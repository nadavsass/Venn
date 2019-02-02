const axios = require('axios');

class FlickrService {
	
	search(query,page) {
		const remoteServerURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1&text=" + query + "&page=" + page;
		console.log(remoteServerURL);

		return axios.get(remoteServerURL).then((response) => {
			return {
				metadata: {
					total: response.data.photos.total,
					pages: response.data.photos.pages
				},
				results: this.map(response.data.photos.photo)
			}
		});
	}
	
	map(photos) {
		return photos.map((photo) => {
			return {
			title: photo.title,
			imageUrl: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
			}
		});
	}
}

module.exports = FlickrService;