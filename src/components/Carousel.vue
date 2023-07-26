<template>
  <div class="relative h-screen flex justify-center items-center">
    <div class="carousel-container rounded-md">
      <div
        class="carousel-slide transition-all ease-out duration-500 delay-300"
        :style="{ transform: 'translateX(' + translate + '%)' }"
      >
        <div
          v-for="(image, index) in carouselImages"
          :key="index"
          class="carousel-image"
        >
          <img :src="image.src" alt="Carousel Image" class="my-4 mx-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        { src: "/Carousel/carousel4.png" },
        { src: "/Carousel/carousel1.png" },
        { src: "/Carousel/carousel2.png" },
        { src: "/Carousel/carousel3.png" },
        { src: "/Carousel/carousel7.png" },
        { src: "/Carousel/carousel8.png" },
        { src: "/Carousel/carousel1.png" },
        { src: "/Carousel/carousel4.png" },
      ],
      currentIndex: 0,
      translate: 0,
      slideWidth: 40,
      numImages: 12,
      containerWidth: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.carouselImages.length - 1;
        this.translate = -(this.slideWidth * (this.currentIndex + 1));
      } else {
        this.currentIndex--;
        this.translate += this.slideWidth;
      }
    },
    nextSlide() {
      if (this.currentIndex === this.carouselImages.length - 1) {
        this.currentIndex = 0;
        this.translate = 0;
      } else {
        this.currentIndex++;
        this.translate -= this.slideWidth;
      }
    },
    updateContainerWidth() {
      this.containerWidth = this.$el.offsetWidth;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
    this.updateContainerWidth();
    window.addEventListener("resize", this.updateContainerWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateContainerWidth);
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  height: auto;

  overflow: hidden;

  background: #1c3144fa;
}

.carousel-slide {
  display: flex;
  height: 100%;
  transition: transform 1.3s;
}

.carousel-image {
  flex: 1 0 40%;
}

.carousel-image img {
  border-radius: 10px;
  height: 300px;
  width: 400px;
}

@media (max-width: 639px) {
  .carousel-image {
    flex: 1 0 100%;
  }

  .carousel-image img {
    height: 200px;
    width: 300px;
  }
}
</style>

