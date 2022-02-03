<script>
import walls from "../assets/guide/angled walls.jpg";
import barriers from "../assets/guide/barriers.jpg";
import ways_down from "../assets/guide/going down.jpg";
import arches from "../assets/guide/hallyway and bridge arches.jpg";
import paths from "../assets/guide/paths and roads.jpg";
import roofs from "../assets/guide/roofs.jpg";
import triangles from "../assets/guide/triangles and circles.jpg";

export default {
  methods: {
    currentImageDown() {
      // If the current index is at 0, we need to move it to the end of the
      // imageList, so just imageList.length - 1. The extra -1 is to avoid running
      // over the end of the array
      // Otherwise, just move it down one
      this.currentImage =
        this.currentImage === 0
          ? this.imageList.length - 1
          : this.currentImage - 1;
    },
    currentImageUp() {
      // Likewise, if the current image is at the top of the list, we'll move it to 0
      // otherwise, just go up one
      this.currentImage =
        this.currentImage === this.imageList.length - 1
          ? 0
          : this.currentImage + 1;
    },
    setImage(index) {
      this.currentImage = index;
    },
  },
  data() {
    return {
      greeting: "Build guides",
      imageList: [
        {
          url: walls,
          title: "Angled Walls",
        },
        {
          url: barriers,
          title: "Types of Barriers",
        },
        {
          url: ways_down,
          title: "Getting Up, Down, and Around",
        },
        {
          url: arches,
          title: "Arch with Pizazz",
        },
        {
          url: paths,
          title: "Paths and Roads",
        },
        {
          url: roofs,
          title: "Roofs",
        },
        {
          url: triangles,
          title: "Triangles and Circles",
        },
      ],
      currentImage: 0,
    };
  }
};
</script>

<template>
  <div class="flex space-x-5 bg-slate-100">
    <!-- The component with the side nav bar -->
    <nav class="basis-1/6 bg-slate-500">
      <ul class="pt-5">
        <li
          :class="[index === this.currentImage ? 'bg-gray-700' : '']"
          class="
            text-lg font-semibold
            py-3 pl-3 bg-slate-800 text-white
            hover:bg-slate-600
            active:bg-slate-900 active:text-slate-500 active:-translate-y-1 active:shadow-xl active:shadow-black
            transition ease-in-out duration-300
            cursor-pointer
          " 
          v-for="(image, index) in imageList" @click="() => setImage(index)">
          {{ image.title }}
        </li>
      </ul>
    </nav>
    <!-- The component with the images -->
    <main class="basis-5/6">
      <div class="flex flex-row justify-center items-center">
        <img 
          class="max-h-screen"
          :src="imageList[currentImage].url" />
      </div>
    </main>
  </div>
</template>
