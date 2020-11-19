<template>
  <section class="changeable-bg hero is-fullheight">
    <div class="container">

        <header class="section has-text-centered">
          <h1 class="title" id="main-title">VUE3 COLOR CHECKER</h1>
        </header>

        <section class="section">
          <input
            type="text"
            id="input-color"
            class="has-box-centered has-text-centered"
            placeholder="#a8dadc"
          />
        </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "App"
}
</script>

<style lang="scss">
@charset "utf-8";
@import "https://fonts.googleapis.com/css2?family=Advent+Pro:wght@600;700&family=Open+Sans:wght@700&display=swap";

$bg: #a8dadc;
$black: #444444;
$white: #efefef;
$light-white: #ffffff;
$margin: 25px;

.changeable-bg {
  background: $bg;
}

.has-box-centered {
  display: block;
  margin-right: auto;
  margin-left: auto;
}



#main-title {
  font-family: "Advent Pro", sans-serif;
  font-weight: 700;
  font-size: 72px;
  color: $black;
  margin-bottom: $margin;
}

#input-color {
  width: 350px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 36px;
  background: transparent;
  border: 0px;
  border-bottom: 3px solid $light-white;
}
#input-color, #input-color::placeholder {
  color: $light-white;
}

#color-references {
  display: flex;
  width: 690px;
  flex-direction: column;

  .refs {
    display: flex;
    flex-direction: row;
    margin-bottom: $margin;
  }

  .ref {
    display: block;
    height: 40px;
    flex-shrink: 1;
    flex-grow: 1;

    font-family: "Advent Pro", sans-serif;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.7px;
    text-align: center;
    border-radius: 5px;
    padding: 0px;

    &:first-child {
    }
  }

  #fidb, #fiwb {
    color: $bg;
    width: 309px;
  }
  #fidb {
    background: $black;
  }
  #fiwb {
    background: $white;
  }

  #bodf, #bowf {
    background: $bg;
    border: 1px solid;
    width: 308px;
  }
  #bodf {
    color: $black;
    border-color: $black;
  }
  #bowf {
    color: $white;
    border-color: $white;
  }

}

//#color-references {
//  display: block;
//  width: 690px;
//
//  .reference {
//    display: block;
//    border-radius: 5px;
//    font-family: "Advent Pro", sans-serif;
//    font-weight: 600;
//    font-size: 24px;
//    letter-spacing: 0.5px;
//    text-align: center;
//    padding: 0px;
//    margin-right: $margin;
//    margin-bottom: $margin;
//  }
//
//  #fidb, #fiwb {
//    color: $bg;
//  }
//  #fidb {
//    background: $black;
//  }
//  #fiwb {
//    background: $white;
//  }
//
//  #bodf, #bowf {
//    background: $bg;
//    border: 1px solid;
//    margin-right: 0px;
//  }
//  #bodf {
//    color: $black;
//    border-color: $black;
//  }
//  #bowf {
//    color: $white;
//    border-color: $white;
//  }
//}
</style>
