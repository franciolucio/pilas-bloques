import Service from '@ember/service';

//const URL = "http://localhost:3000/sendMessage";
const URL_SEND_MESSAGE = "http://104.131.245.133:9914/sendMessage";

export default Service.extend({
  compartir(mensaje, imagen) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: URL_SEND_MESSAGE,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
          message: mensaje,
          media: imagen
        }),
        success(res) {
          resolve(res);
        },
        error(xhr) {
          console.error(xhr.responseText);
          reject(xhr.responseText);
        }
      });

    });
  }
});
