<template>

  <header>
    <div class="container">
      <!--<div class="col-md-8 col-md-offset-2">
        <h1>
          <i class="fa fa-heart"></i> ScrollMagic Demos
          <i class="fa fa-magic"></i>
        </h1>
        <hr>
        <h2>CSS Class Toggles</h2>
        <p class="lead">ScrollMagic also lets you easily toggle as many classes as you want when the Scene is activated via the scroll event.
          This is super handy for doing some complex stuff without the additional JavaScript</p>
      </div>-->
    </div>
    <!--<i class="fa fa-angle-double-down"></i>-->
  </header>

  <main>
    <div class="container">


      <div class="row">

        <div class="col-md-6 col-md-offset-3">
          <div class="wrap" id="scene-1">
            <h2>Some stuff happens</h2>
            <div class="animation" id="animation-1"><i class="fa fa-heart"></i></div>
          </div>
        </div>

      </div>


      <div class="row">

        <div class="col-md-6 col-md-offset-3">
          <div class="wrap" id="scene-2">
            <h2>Magic Happens Here</h2>
            <div class="animation" id="animation-2"><i class="fa fa-heart"></i></div>
          </div>
        </div>

      </div>


      <div class="row">

        <div class="col-md-6 col-md-offset-3">
          <div class="wrap" id="scene-3">
            <h2>Magic Happens Here</h2>
            <div class="animation" id="animation-3"><i class="fa fa-heart"></i></div>
          </div>
        </div>

      </div>

    </div>
  </main>


</template>

<style>
  /* Ignore => Base Styles */

  body {
    background: #e3e3e3;
    -webkit-font-smoothing: antialiased;
  }

  .ScrollSceneIndicators {
    z-index: 9999999 !important;
  }
  /* Ignore => Useless Header Styles */

  header {
    text-align: center;
    background: rgb(255, 145, 0);
    padding: 50px 0 125px;
    color: #fff;
    position: relative;
  }

  header * {
    text-shadow: 0px 1px 1px rgba(150, 150, 150, 0.35);
  }

  header h1 {
    margin-top: 0;
    font-size: 50px;
  }

  header h1 i.fa-heart {
    color: rgb(221, 75, 80);
  }

  header h1 i.fa-magic {
    color: rgb(39, 97, 223);
  }

  header hr {
    max-width: 80px;
    border-top: solid 2px #fff;
  }

  header h2 {
    margin-bottom: 30px;
  }

  header p {
    margin-bottom: 0px;
  }

  header i.fa-angle-double-down {
    font-size: 50px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #111;
  }

  header i.fa-angle-double-down:after {
    content: 'Start Scrolling Down';
    position: absolute;
    bottom: 100%;
    left: -35px;
    font-size: 15px;
    width: 104px;
  }
  /* Create huge scrolling area (imitates height of a page) */

  main {
    padding: 200px 0 1500px 0;
    overflow: hidden;
  }
  /* Styles for wrap for demo */

  .wrap {
    text-align: center;
    background: #fff;
    padding: 50px 0;
    -moz-box-shadow: 0 0 6px rgba(153, 153, 153, 0.25);
    -webkit-box-shadow: 0 0 6px rgba(153, 153, 153, 0.25);
    box-shadow: 0 0 6px rgba(153, 153, 153, 0.25);
    position: relative;
    margin-bottom: 50px;
    overflow: hidden;
  }
  /* Default Animation Styles */

  .animation {
    background: #000;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 50px auto;
    position: relative;
  }

  .animation i {
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 30px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  /* SCENE COLORS */

  body {
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  body.scene-1-active {
    background: rgb(211, 39, 45) !important;
  }

  body.scene-2-active {
    background: rgb(0, 205, 150) !important;
  }

  body.scene-3-active {
    background: rgb(2, 0, 60) !important;
  }
</style>

<script>
  $(function(){
    var smc = new scrollmagic.Controller();

    var tween1 = TweenMax.to('#animation-1', 0.3, {
      backgroundColor: 'rgb(255, 39, 46)',
      scale: 10,
      rotation: 360
    });

    var scene1 = new scrollmagic.Scene({
      triggerElement: '#scene-1',
      offset: 50
    })
    .setClassToggle('body', 'scene-1-active')
    .setTween(tween1)
    .addTo(smc);

    var tween2 = TweenMax.to('#animation-2', 0.3 , {
      backgroundColor: 'rgb(0, 255, 187)',
      scale: 10,
      rotation: 360
    });

    var scene2 = new scrollmagic.Scene({
      triggerElement: '#scene-2',
      offset: 50
    })
    .setClassToggle('body', 'scene-2-active')
    .setTween(tween2)
    .addTo(smc);

    var tween3 = TweenMax.to('#animation-3', 0.3 , {
      backgroundColor: 'rgb(17, 0, 98)',
      scale: 10,
      rotation: 360
    });

    var scene3 = new scrollmagic.Scene({
      triggerElement: '#scene-3',
      offset: 50
    })
    .setClassToggle('body', 'scene-3-active')
    .setTween(tween3)
    .addTo(smc);

    scene1.addIndicators();
    scene2.addIndicators();
    scene3.addIndicators();

  })


</script>
