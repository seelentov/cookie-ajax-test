export const server = (done) => {
  app.plugins.browsersync.init({
    proxy: 'yoliba.com', // Замените на адрес и порт вашего сервера Open Server
    notify: false
  });
}