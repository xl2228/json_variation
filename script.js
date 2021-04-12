let outputCard = document.getElementById('outputCard');
let input = document.getElementById('inputSign');
var runCardFunction = false;

window.addEventListener('DOMContentLoaded', function(){

  executeButton.addEventListener("click", runFunction);


});



let jsonDatabase = [

  {
    "sign_image": "images/aries.png",
    "zodiac_sign": "Aries",
    "summary": "Summary: The week kicks off with a fresh burst of energy, Aries. The moon spends the first half of the day keeping busy while in your sign. Luna’s union with romantic Venus and optimistic Jupiter helps to ease any tensions brewing around career matters, which are liable to crop up from the moon’s square to unsettling Pluto. Later, Luna dips into peace-seeking Taurus, bringing a slow and steady pace to embrace.",
    "lucky_number": "Lucky Number: 5",
    "lucky_color": "#9C6A41",
    "luck_color": "Lucky Color: Khaki"
  },
  {
    "sign_image": "images/taurus.png",
    "zodiac_sign": "Taurus",
    "summary": "Summary: You’re flipping the switch from introvert to extrovert through the course of the day, Taurus. The moon careens through individualistic Aries and makes a series of aspects to other planets, coloring the first half of the day full of action and involvement. It’s easy to get things off the ground, so long as you have some solitude. Later on, Luna slides into your sign, ramping up your self-expression.",
    "lucky_number": "Lucky Number: 4",
    "lucky_color": "#2549FF",
    "luck_color": "Lucky Color: Blue"
  },
  {
    "sign_image": "images/gemini.png",
    "zodiac_sign": "Gemini",
    "summary": "Summary: Both your quiet Twin and loud Twin get equal air time today, Gemini. The moon cruises through go-getter Aries the first half of the day, embracing a series of stimulating cosmic connections. Expect to be reaching out to people in your network and to be on your game socially. Later, Luna dips into slow and steady Taurus, withdrawing you into your inner world for some quiet restoration.",
    "lucky_number": "Lucky Number: 6",
    "lucky_color": "#DB294E",
    "luck_color": "Lucky Color: Red"

  },
  {
    "sign_image": "images/cancer.png",
    "zodiac_sign": "Cancer",
    "summary": "Summary: A strange mix of fast and slow seems to permeate the day ahead, Cancer. The first half of the day is highly active and stirs with excitable energy around your career, as the Aries moon reaches out to a variety of planets. It’s an ideal day for plowing ahead with your ambitions and getting things in motion. Later, the moon marches into peace-seeking Taurus, slowing your pace and grounding your energy.",
    "lucky_number": "Lucky Number:2",
    "lucky_color": "#6F9E87",
    "luck_color": "Lucky Color: Green"
  },
  {
    "sign_image": "images/leo.png",
    "zodiac_sign": "Leo",
    "summary": "Summary: It’s hard to sit still under Monday’s cosmic landscape, Leo. A new vision has only just begun to sprout in your mind's eye around the big-picture perspective of your life, and you’re feeling ready to take action. The eager Aries moon enjoys a series of high-energy aspects this morning, helping you tackle anything on your plate. Later, the moon plows into steady Taurus, focusing your energy on career concerns.",
    "lucky_number": "Lucky Number: 9",
    "lucky_color": "#F599F3",
    "luck_color": "Lucky Color: Pink"
  },
  {
    "sign_image": "images/virgo.png",
    "zodiac_sign": "Virgo",
    "summary": "Summary: Today’s cosmic landscape is something of a roller coaster, Virgo. The first half of the day focuses your energy on the unspoken stories stirring around your intimate relationships, as the Aries moon forms a variety of high-energy aspects. It’s an ideal time to check back in and face any looming, important conversations. Later, Luna dives into relaxed Taurus, easing the pace and helping you to step back to see the big picture.",
    "lucky_number": "Lucky Number: 7",
    "lucky_color": "#898DDF",
    "luck_color": "Lucky Color: Purple"
  },
  {
    "sign_image": "images/libra.png",
    "zodiac_sign": "Libra",
    "summary": "Summary: Relationship energy dominates the day ahead, Libra. The moon spends the morning hours wandering through hyperactive Aries, enjoying a series of pleasant contacts that elevate moods and makes it easy to patch up any rough spots. Later, the moon wanders into peace-seeking Taurus, increasing your need for intimate, honest interactions. You’re likely to be in a pensive, reserved mood—so, don’t sweat it if you need solitude.",
    "lucky_number": "Lucky Number: 8",
    "lucky_color": "#8BDEDB",
    "luck_color": "Lucky Color: Aqua"

  },
  {
    "sign_image": "images/scorpio.png",
    "zodiac_sign": "Scorpio",
    "summary": "Summary: You’re ready to hit the ground running today, Scorpio. The moon roams through energetic Aries and enjoys a variety of strong connections. This is imbuing the first half of the day with uplifted moods and positive interactions on the work front. Later, the moon marches into your opposite sign of grounded Taurus, directing your focus towards the current stories stirring around in your love life.",
    "lucky_number": "Lucky Number: 5",
    "lucky_color": "#162461",
    "luck_color": "Lucky Color: Navy"
  },
  {
    "sign_image": "images/sagittarius.png",
    "zodiac_sign": "Sagittarius",
    "summary": "Summary: Monday’s skies start things off slow, Sagittarius. The moon wanders through enthusiastic Aries, putting you more in the mood for play. Luna finds herself enjoying a series of mood-boosting, supportive aspects. This energy makes it easy to get lost in creative action or leisurely activities. Later, the moon trots into hardworking Taurus—kicking you into high gear to help you tackle everything on your to-do list.",
    "lucky_number": "Lucky Number: 6",
    "lucky_color": "#DE9C99",
    "luck_color": "Lucky Color: Apricot"
  },
  {
    "sign_image": "images/capricorn.png",
    "zodiac_sign": "Capricorn",
    "summary": "Summary: You’re likely to find yourself in two different modes of action today, Capricorn. The morning hours see you withdrawn into your private inner world, as you explore various stories emerging around the home front. The individualistic Aries moon enjoys a variety of uplifting aspects, which keeps the mood light and family connections positive. Later, Luna dives into Taurus, encouraging you to reconnect with activities that bring you joy.",
    "lucky_number": "Lucky Number: 3",
    "lucky_color": "#614216",
    "luck_color": "Lucky Color: Brown"
  },
  {
    "sign_image": "images/aquarius.png",
    "zodiac_sign": "Aquarius",
    "summary": "Summary: Monday’s cosmic landscape is filled with action, Aquarius. You’re something of a hot commodity the first half of the day, as you’re likely to be immersed in conversations or busy playing catch-up with projects. The excitable Aries moon ramps up energy around your self-expression, so speak up where it's necessary. Later, Luna dives into easygoing Taurus, slowing the pace and drawing your attention towards family matters.",
    "lucky_number": "Lucky Number: 5",
    "lucky_color": "#91DAFF",
    "luck_color": "Lucky Color: Sky Blue"
  },
  {
    "sign_image": "images/pisces.png",
    "zodiac_sign": "Pisces",
    "summary": "Summary: You’re ready to get things in motion, Pisces. You’re entering a new playing field when it comes to expanding your resources and leveling up financially. Don’t be afraid to ask for what you want today, as the go-getter Aries moon’s abundance of sweet alignments this morning helps make it easy to get into good graces. Later, Luna dives into Taurus, ramping up your need to tell your story.",
    "lucky_number": "Lucky Number: 2",
    "lucky_color": "#F5E498",
    "luck_color": "Lucky Color: Yellow"
  }


];

// for (var i = 0; i < jsonDatabase.length;) {
//   if (input = "Aries") {
//     createSignCard(jsonDatabase[0]);
//   }
//
// }

// for (var i = 0; i < jsonDatabase.length; i++) {
//   createSignCard(jsonDatabase[i]);
//
// }
function runFunction(){
  var currentlyInputSign = input.value;
  if (currentlyInputSign == "aries") {
    createSignCard(jsonDatabase[0]);

  }else if (currentlyInputSign == "taurus"){
    createSignCard(jsonDatabase[1]);

  }else if (currentlyInputSign == "gemini") {
    createSignCard(jsonDatabase[2]);

  }else if (currentlyInputSign == "cancer") {
    createSignCard(jsonDatabase[3]);

  }else if (currentlyInputSign == "leo") {
    createSignCard(jsonDatabase[4]);

  }else if (currentlyInputSign == "virgo") {
    createSignCard(jsonDatabase[5]);

  }else if (currentlyInputSign == "libra") {
    createSignCard(jsonDatabase[6]);

  }else if (currentlyInputSign == "scorpio") {
    createSignCard(jsonDatabase[7]);

  }else if (currentlyInputSign == "sagittarius") {
    createSignCard(jsonDatabase[8]);

  }else if (currentlyInputSign == "capricorn") {
    createSignCard(jsonDatabase[9]);

  }else if (currentlyInputSign == "aquarius") {
    createSignCard(jsonDatabase[10]);

  }else if (currentlyInputSign == "pisces") {
    createSignCard(jsonDatabase[11]);

  }
};




function createSignCard(incomingJSON) {
  ///new div and class
  let newCardContent = document.createElement("DIV");
  newCardContent.classList.add('cardStyle');
  newCardContent.style.backgroundColor = incomingJSON['lucky_color'];

  ///sign illustration
  let newImage = document.createElement("IMG");
  newImage.classList.add("signImage");
  newImage.src = incomingJSON['sign_image'];
  newCardContent.appendChild(newImage);

  /// sign name
  let newSignName = document.createElement("DIV");
  newSignName.classList.add('cardTitle');
  newSignName.innerText = incomingJSON['zodiac_sign'];
  newCardContent.appendChild(newSignName);

  ///Horoscopes summary
  let newSignSummary = document.createElement("DIV");
  newSignSummary.classList.add('summary');
  newSignSummary.innerText = incomingJSON['summary'];
  newCardContent.appendChild(newSignSummary);

  ///lucky number
  let newLuckyNumber = document.createElement("DIV");
  newLuckyNumber.classList.add('number');
  newLuckyNumber.innerText = incomingJSON['lucky_number'];
  newCardContent.appendChild(newLuckyNumber);

  ///lucky color
  let newLuckColor = document.createElement("DIV");
  newLuckColor.classList.add('color');
  newLuckColor.innerText = incomingJSON['luck_color'];
  newCardContent.appendChild(newLuckColor);

  outputCard.appendChild(newCardContent);
}
