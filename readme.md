
## Catatan
Ionic react menggunakan capacitor untuk membuat kode native, namun plugin-plugin untuk native dapat menggunakan plugin untuk cordova.

Namun cordova itu sendiri tidak disupport pada ionic react, sehingga command `ionic cordova` akan menghasilkan error.
Tutorial di internet yang menggunakan `ionic cordova plugin add <nama plugin>` dapat diganti dengan `npm install <nama plugin>` dan kemudian menggunakan `ionic cap sync` atau `ionic cap update` untuk membuat plugin terinstall di aplikasi native.