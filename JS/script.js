    function showcard(cardTitle) {
    var popup = document.querySelector('.popup');
    var popupContent = document.getElementById('popupContent');

    if (cardTitle === 'Big Mac') {
        popupContent.innerHTML = `<h1>${cardTitle}</h1><p>Ever wondered what's on a Big Mac®? The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese. It contains no artificial flavors, preservatives, or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.</p>`;
      } else if (cardTitle === 'McFries') {
        popupContent.innerHTML = `<h1>${cardTitle}</h1><p>McDonald's World Famous Fries are made with premium potatoes such as the Russet Burbank and the Shepody. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside. Best of all, you can get medium Fries for free every Friday with any $1 purchase, exclusively in the McDonald’s app. Pair our World Famous Fries with one of our classic McDonald’s Burgers. There are 320 calories in a medium McDonald's Fries. Order yours today from our full menu in the app with McDelivery® or Curbside pickup.</p>`;
      } else if (cardTitle === 'McChicken') {
        popupContent.innerHTML = `<h1>${cardTitle}</h1><p>It’s a classic for a reason. Savor the satisfying crunch of our juicy chicken patty, topped with shredded lettuce and just the right amount of creamy mayonnaise, all served on a perfectly toasted bun. The McChicken has 400 calories. Order a McChicken today from our full menu in the app using Mobile Order & Pay for pickup or McDelivery®.</p>`;
      } else if (cardTitle === 'McFloat') {
        popupContent.innerHTML = `<h1>${cardTitle}</h1><p>Coke float is a cola-based ice cream soda made of coke, it's the main float or regular float in the menu of McDonalds Restaurant. It consists of Coca Cola Coke with lots of ice, turns of sundae and a shot of hot fudge. It comes with a two sizes 16oz. a regular float and 22oz. a monster float. Monster float was once featured as a promotional item in the movie Monster VS. Alien which also comes with McDonalds Happy Meal. Later on this year they added it into the regular menu.</p>`;
      } 

    popup.style.visibility = 'visible';
    document.querySelector('.cardcontainer').style.visibility = 'hidden';

  }

    function exit(){
        document.querySelector('.popup').style.visibility='hidden';
        document.querySelector('.cardcontainer').style.visibility='visible';
    }