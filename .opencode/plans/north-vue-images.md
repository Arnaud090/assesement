# Replace north.vue images with real Rwanda Northern Province photos

Edit `src/views/north.vue` - replace the `<script setup>` section with:

```javascript
<script setup>
const heroImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Volcanoes_National_Park_Rwanda.jpg/1280px-Volcanoes_National_Park_Rwanda.jpg'
const volcanoImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/View_from_afar_the_Volcanoes_Park_in_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/800px-View_from_afar_the_Volcanoes_Park_in_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg'
const gorillaImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mountain_gorilla_%28Gorilla_beringei_beringei%29_yawn.jpg/800px-Mountain_gorilla_%28Gorilla_beringei_beringei%29_yawn.jpg'
const caveImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Musanze-Caves.jpg/800px-Musanze-Caves.jpg'
const lakeImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ruhondo_Lake_Sunset.jpg/800px-Ruhondo_Lake_Sunset.jpg'
const whyImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Rwandan_landscape_%288219706414%29.jpg/800px-Rwandan_landscape_%288219706414%29.jpg'

const attractions = [
  { name: 'Volcanoes National Park', desc: 'Home to endangered mountain gorillas and five majestic volcanoes. A UNESCO Biosphere Reserve.', img: volcanoImg },
  { name: 'Gorilla Trekking', desc: 'One of the world\'s most extraordinary wildlife experiences — meet mountain gorillas up close.', img: gorillaImg },
  { name: 'Musanze Caves', desc: 'Explore ancient lava tubes and caves formed by volcanic activity thousands of years ago.', img: caveImg },
  { name: 'Lake Ruhondo', desc: 'A stunning twin lake at the foot of the volcanoes, perfect for hiking and photography.', img: lakeImg }
]
</script>
```

Then replace the "Why Visit" section image (line ~79):
- Old: `<img :src="volcanoImg" alt="Volcanoes" ...>`
- New: `<img :src="whyImg" alt="Volcanoes Landscape" ...>`
