BE

### `$ pip install -r requirements.txt`
### `$ python manage.py runserver`

FE

folder node_modules tidak disertakan:

### `$ npm install`
### `$ npm start`

URL [http://localhost:3000](http://localhost:3000)

Username: admin

Password: admin

Working:
- Login dengan JWT tapi tersimpan di LocalStorage
- Token Expired tiap 4 Detik auto refresh
- Reusable UI component (ex: Card, CardProducts, TopBar, SideBar)

NotWorking:
- Redux Global State
- Redux CRUD

**Screenshot:**
Token berubah tiap 4 detik:
![alt tag](https://github.com/zidni-bwi/react-dashboard-jwt/blob/main/Screenshot_5.png)

Refresh token dikirim tiap client melakukan refresh:
![alt tag](https://github.com/zidni-bwi/react-dashboard-jwt/blob/main/Screenshot_7.png)

Percobaan store state global menggunakan Redux tapi belum berhasil untuk melakukan update:
![alt tag](https://github.com/zidni-bwi/react-dashboard-jwt/blob/main/Screenshot_8.png)

Tampilan Dashboard:
![alt tag](https://github.com/zidni-bwi/react-dashboard-jwt/blob/main/Screenshot_9.png)
