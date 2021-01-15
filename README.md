# BlogApp---.NetCore---Vue.js
The .Netcore background language mirror api was created and the frontend was created with vue.

Proje kapsamında
Front-end işlemleri için ;

@Nuxtjs
@Vue.js
@Vuex Store
@Axios

Back-end işlemleri için;

.NetCore Api EntityFrameWork
kullanılmıştır.

ServerSide dosyaları .NetCore Api Service klasörünün içerisinde,
NuxtJs ile oluşturulan Vue.js dosyaları BlogVue klasörünün içerisinde,
Veritabanının hazır yedeği database-backup klasörü içerisinde bulunmaktadır.

-BackEnd-

Backend tarafı işlenirken database first kodlama tercih edilmiş olup veritabanı tasarımının ardından veritabanına göre api kodları oluşturulmuştur.

Sistemde temel olarak Posts ve Categories olmak üzere 2 adet model bulunmaktadır.

Api olarak kullanılan sistemde temel olarak bulunan istekler;

/api/getcategories = kategorilerin çağırılması için gereken request

/api/getposts = postların çağırılması için gereken request

/api/getpost?postid={postid} = spesifik bir post çağırmak için gereken request

/api/updatepost = hali hazırda bulunan post'un düzenlenmesi için gereken request

/api/deletepost?postid={postid} = veritabanında bulunan postun silinmesi için gereken request

İstekler yukarıdaki şekilde işlenmiş olup sistemin işleyişi postman aracılığı ile doğrulandıktan sonra frontend kısmına geçilmiştir.

-FrontEnd-

Frontend kısmında kullanılan axios requestleri yapmamızı sağlamakla birlikte vuex store sayfalara arası geçişlerde veri aktarımını kolaylaştırmak adına tercih edilmiştir.

Temel olarak 5 adet sayfa bizi karşılar ;

adminPage = Yayınlanan postların görüntülenmesi yenilerinin eklenmesi için gereken yolun sağlanması postların düzenleme ya da silme işlemlerinin gerçekleşmesi için oluşturulan sayfadır.

editPost = Yayınlanan bir postun başlık içerik ya da kategori gibi değerlerinin değiştirilmesi için oluşturulan sayfadır.

newPost = Yeni bir post oluşturmak için oluşturulan sayfadır.

index = Sistemin ana sayfası - Sistemdeki postların başlıkları ve içeriğin bir kısmı burada gözükmektedir.

postPage = Anasayfadan daha fazlasını görmek için yapılan taleple birlikte iletilen postid'ye göre postun tamamının gösterildiği sayfadır.




