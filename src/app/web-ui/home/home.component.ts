import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router
  ) {


  }
  ngAfterViewInit() {
    $(document).ready(function () {
      var $slider = $('.slider');

      if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');

        var updateSliderCounter = function (slick, currentIndex) {
          currentSlide = slick.slickCurrentSlide() + 1;
          slidesCount = slick.slideCount;
          $(sliderCounter).html(currentSlide + '<div class="digit-line"></div>' + slidesCount)
        };

        $slider.on('init', function (event, slick) {
          $slider.append(sliderCounter);
          this.updateSliderCounter(slick);
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
          updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
          autoplay: true,
          autoplaySpeed: 5000,
          infinite: true,
          speed: 500
        });
      }
    });

  }
  ngOnInit(): void {


    $('#toggle').click(function () {
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
    });

  }
  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
