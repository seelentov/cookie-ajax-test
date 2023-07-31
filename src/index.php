<!DOCTYPE php>
<php lang="ru">
  @@include('php/__head.php',{
  "title":"Главная"
  })
  
  <body>
    @@include('php/__header.php',{})
    <div class="wrapper">
      <main>
        <section class='home__banner'>
          @@include('php/__banner.php',{})
        </section>
        <section class='home__moving-text'>
          @@include('php/__moving-text.php',{})
        </section>
        <section class='home__promotion'>
          @@include('php/__promotion.php',{}')
        </section>
        <section class='home__categories'>
          @@include('php/__categories.php',{}')
        </section>
        <section class='home__popular'>
          @@include('php/__popular.php',{}')
        </section>
        <section class='home__services'>
          @@include('php/__services.php',{}')
        </section>
        <section class='home__articles'>
          @@include('php/__articles.php',{}')
        </section>
        <section class='home__events'>
          @@include('php/__events.php',{}')
        </section>
        <section class='home__brands'>
          @@include('php/__brands.php',{}')
        </section>
        <section class='home__feedback'>
          @@include('php/__feedback.php',{}')
        </section>
      </main>
    </div>
    @@include('php/__footer.php',{})
    @@include('php/__scripts.php',{}')
    @@include('php/__callback-form.php',{}')
  </body>
</php>