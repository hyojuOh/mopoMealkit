
// 카카오맵 키
  // d26b394c06bd9de52e5d1f0345f5f93b

  // 카카오 맵
//   34.788
//   126.384
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(34.788681113215226, 126.38466191529369), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 


// 마커가 표시될 위치입니다 
var markerPosition = new kakao.maps.LatLng(34.788681113215226, 126.38466191529369); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 마커가 드래그 가능하도록 설정합니다 
marker.setDraggable(true); 