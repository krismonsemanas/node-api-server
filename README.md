# node-api-server
simple api server with json files, node &amp; express js
node-api-server dibuat dengan tujuan untuk diintegrasikan dengan sensor IoT, api ini dibangun menggunakan node js & express js serta menggunaan file json sebagai db nya.
## langkah instalasi
```
npm install
```
## Menjalankan api service
Untuk menjalankan api service ini ketikan
```
npm start
```
tetapi sebelum itu ubahlah file data.example.json yang ada di folder
```
data/data.example.json
```
menjadi
```
data/data.json
```
## Cara penggunaan
### menggunakan terminal linux
ketikan untuk membaca seluruh isi yang ada di data.json
```
crul localhost:3000/sensors
```
ketikan untuk untuk mem POST data
```
curl --location --request POST 'http://localhost:3000/sensors' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "Suhu",
    "value": 20
}'
```
ketikan perintah di bawah ini untuk menampilkan data berdasarkan type sensor
```
curl localhost:3000/sensors/suhu  // suhu disini adalah sebagai parameter, parameter tergantung nilai dari type yg di POST
```
### menggunakan browser
ketikan
```
localhost:3000/sensors
```
ketikan perintah di bawah ini untuk menampilkan data berdasarkan type sensor
```
curl localhost:3000/sensors/suhu
```
Selain dengan cara di atas bisa juga menggunakan POSTMAN
