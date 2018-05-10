// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);


window.onload = choosePic;

var nbaPic = new Array("https://www.nba.com/lakers/sites/lakers/files/caps1997.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/994052bc-f9fb-40c6-9fca-facdd7db5353.jpg", "images/MJ-DunkContest_.jpg", "https://www.nba.com/lakers/sites/lakers/files/caps2008.jpg", "https://www.nba.com/lakers/sites/lakers/files/caps1979.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/574fb615-1cf2-4697-becd-e09d1094ead6.jpg", "https://www.nba.com/lakers/sites/lakers/files/caps2004.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/03f10406-4491-48e3-8d85-3ad040210113.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/d4e43cfd-9343-4d07-b341-a3c0802512cd.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/9e677e05-877d-4dd3-bacc-9291af0e8d79.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/78297d8a-fbc1-4e94-ba9b-2c6ba7fb4849.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/6799fa00-24f0-4bf0-93dd-1b1977ff9cf0.jpg");

// var nbaPic = new Array("http://www.nba.com/celtics/sites/celtics/files/180422tatum.jpg", "https://lagiornatasportiva.it/wp-content/uploads/2018/04/Philadelphia-76ers-Miami-Heat-NBA.jpg", "http://www.nba.com/celtics/sites/celtics/files/article_1200x550_7.jpg", "https://s.yimg.com/uu/api/res/1.2/QY5pOuu54ZqjwQAU6PjMfw--~B/aD01NTA7dz0xMjAwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s1.yimg.com/uu/api/res/1.2/DzE8gCNhJY5eBeP2KMsN4g--/dz0xMjAwO2g9NTUwO3RhZz1vcmlnaW5hbDthcHBpZD15bmV3cw--/http://streambe.zenfs.com/streambe/streambe_1f402563-27bc-3cbd-8605-35a424ac50c0-758891388.jpeg", "https://www.nba.com/celtics/sites/celtics/files/180116rondo.jpg") 1200 x 550

// var nbaPic = new Array("http://www.nba.com/celtics/sites/celtics/files/180422tatum.jpg", "https://lagiornatasportiva.it/wp-content/uploads/2018/04/Philadelphia-76ers-Miami-Heat-NBA.jpg", "http://www.nba.com/celtics/sites/celtics/files/article_1200x550_7.jpg", "https://s.yimg.com/uu/api/res/1.2/QY5pOuu54ZqjwQAU6PjMfw--~B/aD01NTA7dz0xMjAwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s1.yimg.com/uu/api/res/1.2/DzE8gCNhJY5eBeP2KMsN4g--/dz0xMjAwO2g9NTUwO3RhZz1vcmlnaW5hbDthcHBpZD15bmV3cw--/http://streambe.zenfs.com/streambe/streambe_1f402563-27bc-3cbd-8605-35a424ac50c0-758891388.jpeg", "https://www.nba.com/celtics/sites/celtics/files/180116rondo.jpg", "https://www.nba.com/lakers/sites/lakers/files/caps1997.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/994052bc-f9fb-40c6-9fca-facdd7db5353.jpg", "images/MJ-DunkContest_.jpg", "https://www.nba.com/lakers/sites/lakers/files/caps2008.jpg", "https://www.nba.com/lakers/sites/lakers/files/caps1979.jpg", "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/574fb615-1cf2-4697-becd-e09d1094ead6.jpg", "https://www.nba.com/lakers/sites/lakers/files/caps2004.jpg","https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/03f10406-4491-48e3-8d85-3ad040210113.jpg");1200 x 500 & 1200 x 550

function choosePic() {
  var randomNum = Math.floor(Math.random() * nbaPic.length);
  document.getElementById("myPicture").src = nbaPic[randomNum];
}