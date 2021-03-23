$(document).ready(function(){

    ymaps.ready(init);
  
    function init() {

      const centerOrderMap = $(window).innerWidth()>991?[52.03823580508177,113.49829303704823]:[52.03823580508177,113.49829303704823];
    
      const orderMap = new ymaps.Map("order-map", {
          center: centerOrderMap,
          controls: [],
          zoom: 15
        });

        // point1_1 =  new ymaps.Placemark([52.03823580508177,113.49829303704823], {
        //   balloonContent: ''
        // }, {
        //   iconLayout: 'default#image',
        //   iconImageHref: 'img/map-pointer.svg',
        //   iconImageSize: [72, 84],
        //   iconImageOffset: [-30, -60]
        // });


        orderMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
        orderMap.behaviors.disable('scrollZoom');
        orderMap.controls.add('zoomControl');

        // orderMap.geoObjects.add(point1_1);

    }
  
  });
  