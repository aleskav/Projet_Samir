
		function zoomIn(event) {
			document.getElementById('zoom-image').style.visibility = 'visible';
			document.getElementById('zoom-image').style.backgroundPosition = '-' + event.offsetX*2 + 'px -' + event.offsetY*2 + 'px';
		}

		function zoomOut() {
			document.getElementById('zoom-image').style.visibility = 'hidden';
		}

        function changeImage(image) {
		document.querySelector('.product-image').style.backgroundImage = 'url(' + image + ')';
		document.getElementById('zoom-image').style.backgroundImage = 'url(' + image + ')';
	}

