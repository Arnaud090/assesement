# Replace online images with user's local images

## 1. `src/views/north.vue` - Replace `<script setup>` block

Replace the current script setup with:

```javascript
<script setup>
import northBg from '/src/assets/images/north.jpg'
import north1Img from '/src/assets/images/north1.jpg'
import gorillaImg from '/src/assets/images/gorilla.jpg'
import ruhondoImg from '/src/assets/images/ruhondo.jpg'

const attractions = [
  { name: 'Volcanoes National Park', desc: 'Home to endangered mountain gorillas and five majestic volcanoes. A UNESCO Biosphere Reserve.', img: north1Img },
  { name: 'Gorilla Trekking', desc: 'One of the world\'s most extraordinary wildlife experiences — meet mountain gorillas up close.', img: gorillaImg },
  { name: 'Musanze Caves', desc: 'Explore ancient lava tubes and caves formed by volcanic activity thousands of years ago.', img: north1Img },
  { name: 'Lake Ruhondo', desc: 'A stunning twin lake at the foot of the volcanoes, perfect for hiking and photography.', img: ruhondoImg }
]
</script>
```

Then in the template:
- Line ~18: Change `<img :src="heroImg" ...>` to `<img :src="northBg" ...>`
- Line ~79: Change `<img :src="volcanoImg" ...>` to `<img :src="north1Img" ...>`

## 2. `src/views/south.vue` - Replace images

Change the `<script setup>` section - replace online URLs with local imports:

```javascript
<script setup>
import rwanda1Img from '/src/assets/images/Rwanda (1).jfif'
import kivuImg from '/src/assets/images/kivu.jpg'
import nyungweImg from '/src/assets/images/nyungwe park.jpg'
import huyeImg from '/src/assets/images/huye.jpg'
import nyanzaImg from '/src/assets/images/nyanza palace.jpg'

const attractions = [
  { name: 'Nyungwe National Park', desc: 'One of Africa\'s oldest rainforests, home to chimpanzees, monkeys, and the famous canopy walkway.', img: nyungweImg },
  { name: 'Butare (Huye)', desc: 'Rwanda\'s intellectual and cultural capital, home to the National Museum and ethnographic treasures.', img: huyeImg },
  { name: 'Nyanza Palace', desc: 'The former royal palace of the Rwandan king, offering deep insights into pre-colonial history.', img: nyanzaImg },
  { name: 'Akagera South', desc: 'The southern reaches of Akagera offer stunning landscapes and diverse wildlife viewing opportunities.', img: kivuImg }
]
</script>
```

Template lines to keep as-is (hero background and Why Visit section use `rwanda1Img` - already local).
