// instgrm.Embeds.process()
//
//
// GET /oembed  {
//     "author_id": 9538472,
//     "author_name": "jaydelewww",
//     "author_url": "https://www.instagram.com/jaydelewww/",
//     "height": null,
//     "html":"...",
//     "media_id": "558717847597368461_9538472",
//     "provider_name": "Instagram",
//     "provider_url": "http://instagram.com/",
//     "title": "Wii Gato (Lipe Sleep)",
//     "type": "rich",
//     "thumbnail_url": "http://distilleryimage5.ak.instagram.com/5dceebb02c5811e3b57222000a9e07e9_8.jpg",
//     "thumbnail_width": 640,
//     "thumbnail_height": 640,
//     "version": "1.0",
//     "width": 658
// }

var request = new XMLHttpRequest();

request.open('GET', 'https://www.instagram.com/jaydelewww/', true);

request.onload = function() {


}

request.send();

const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);
