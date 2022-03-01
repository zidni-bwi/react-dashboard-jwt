import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('jwt') ? jwt_decode(localStorage.getItem('jwt')) : null)
    let [loading, setLoading] = useState(true)

    // Redirect
    const history = useHistory()

    // UseContext Login
    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', { // API
            method:'POST',
            headers:{'Content-Type':'application/json'}, // Tipe JSON
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value}) // Value input
        })
        let data = await response.json()

        // Simpan JWT di LocalStorage Non-Cookie
        if(response.status === 200){
            setAuthTokens(data) // Isi Data
            setUser(jwt_decode(data.access)) // Isi Data
            localStorage.setItem('jwt', JSON.stringify(data)) // Save JWT
            history.push('/') // Redirect
            console.log('Login Berhasil')
        }else{
            console.log('Login Gagal')
            alert('Username: admin\nPassword: admin')
        }
    }

    // UseContext Logout
    let logoutUser = () => {
        setAuthTokens(null) // Kosongkan
        setUser(null) // Kosongkan
        localStorage.removeItem('jwt') // Hapus JWT
        history.push('/login') // Redirect
        console.log('Logout Berhasil')
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    useEffect(()=> {
        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
