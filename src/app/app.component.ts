import { Component } from '@angular/core';
import { CARDS } from './cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memory Game';
  cards = CARDS;
  s1Hidden = true;
  s2Hidden = true;
  s3Hidden = true;
  s4Hidden = true;
  s5Hidden = true;
  s6Hidden = true;
  s7Hidden = true;
  s8Hidden = true;
  s9Hidden = true;
  s10Hidden = true;
  s11Hidden = true;
  s12Hidden = true;
  s13Hidden = true;
  s14Hidden = true;
  s15Hidden = true;
  s16Hidden = true;

  showOrHideCard1() {
    var element = document.getElementById("s1");
    if (this.s1Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s1Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s1Hidden = true;
    }
  }
  showOrHideCard2() {
    var element = document.getElementById("s2");
    if (this.s2Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s2Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s2Hidden = true;
    }
  }
  showOrHideCard3() {
    var element = document.getElementById("s3");
    if (this.s3Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s3Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s3Hidden = true;
    }
  }
  showOrHideCard4() {
    var element = document.getElementById("s4");
    if (this.s4Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s4Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s4Hidden = true;
    }
  }
  showOrHideCard5() {
    var element = document.getElementById("s5");
    if (this.s5Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s5Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s5Hidden = true;
    }
  }
  showOrHideCard6() {
    var element = document.getElementById("s6");
    if (this.s6Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s6Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s6Hidden = true;
    }
  }
  showOrHideCard7() {
    var element = document.getElementById("s7");
    if (this.s7Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s7Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s7Hidden = true;
    }
  }
  showOrHideCard8() {
    var element = document.getElementById("s8");
    if (this.s8Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s8Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s8Hidden = true;
    }
  }
  showOrHideCard9() {
    var element = document.getElementById("s9");
    if (this.s9Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s9Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s9Hidden = true;
    }
  }
  showOrHideCard10() {
    var element = document.getElementById("s10");
    if (this.s10Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s10Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s10Hidden = true;
    }
  }
  showOrHideCard11() {
    var element = document.getElementById("s11");
    if (this.s11Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s11Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s11Hidden = true;
    }
  }
  showOrHideCard12() {
    var element = document.getElementById("s12");
    if (this.s12Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s12Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s12Hidden = true;
    }
  }
  showOrHideCard13() {
    var element = document.getElementById("s13");
    if (this.s13Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s13Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s13Hidden = true;
    }
  }
  showOrHideCard14() {
    var element = document.getElementById("s14");
    if (this.s14Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s14Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s14Hidden = true;
    }
  }
  showOrHideCard15() {
    var element = document.getElementById("s15");
    if (this.s15Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s15Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s15Hidden = true;
    }
  }
  showOrHideCard16() {
    var element = document.getElementById("s16");
    if (this.s16Hidden) {
      element.classList.remove('isHidden');
      element.classList.add('isVisible');
      this.s16Hidden = false;
    } else {
      element.classList.remove('isVisible');
      element.classList.add('isHidden');
      this.s16Hidden = true;
    }
  }
}
