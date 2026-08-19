// Neila Drinks Matcha visit log — one entry per VISIT (matches the Google Sheet 1:1).
// Some cafés are visited more than once — that's expected and tracked here.
var NDM_VISITS = [
  { name: "3 Little Figs", address: "278 Highland Ave, Somerville, MA 02143", lat: 42.391795, lng: -71.111900, url: "https://www.3littlefigs.com/", score: 4.0, date: "2026-03-29",
    quote: "I got an iced oat milk matcha latte with vanilla. Something I have had many times but still hits so good.",
    review: "Good Morning Instagram! This is my first post! 3 Little Figs, Somerville, MA. I got an iced oat milk matcha latte with vanilla. Something I have had many times but still hits so good. I would rate it a 4/5 🍵🍵🍵🍵" },
  { name: "OK Pantry", address: "2 Hudson St, Kinderhook, NY 12106", lat: 42.394765, lng: -73.698456, url: "https://www.okpantry.com/", score: 3.3, date: "2026-04-04",
    quote: "Sometimes you have to roll with the punches — the punches being the coffee shop doesn't have matcha anymore. Rating this iced hojicha oat milk latte a 2.7/5!",
    review: "Neila ALSO drinks Hojicha, a cousin of matcha which is roasted, giving the darker color. It also has less caffeine #themoreyouknow. Sometimes you have to roll with the punches. The punches being the coffee shop doesn't have matcha anymore. However, I would rate this iced hojicha oat milk latte a 2.7/5 from OK Pantry in Kinderhook, NY!!!! Happy Easter to all my new followers!🐣" },
  { name: "Bartlett House", address: "2258 NY-66, Ghent, NY 12075", lat: 42.327186, lng: -73.618378, url: "https://bartletthouse.com/", score: 4.1, date: "2026-04-05",
    quote: "My favorite cafe/bakery in Columbia county 😋 — a very quintessential matcha with no whistles and bells.",
    review: "Bartlett House in Ghent, NY. My favorite cafe/bakery in Columbia county 😋. And even better they had matcha!!!! This was a very quintessential matcha with no whistles and bells, I'd give it a 4.1/5 - and the lemon curd and raspberry jam donut was a 10/10. Exactly what I needed after a long weekend with Myrna. Have a fantastic week everyone and I'll see you next weekend xoxo NDM" },
  { name: "Phinista Cafe", address: "1876 Massachusetts Ave, Cambridge, MA 02140", lat: 42.388247, lng: -71.119644, url: "https://www.phinista.com/", score: 4.3, date: "2026-04-11",
    quote: "Got an iced strawberry matcha with oat milk and an iced ube matcha with oat milk! I would give them both a 4.3/5!!!!",
    review: "Happy Spring Saturday everyone! Had to visit Phinista in Cambridge inspired by the lovely The Drama down the street from Andy's Diner!! We got an iced strawberry matcha with oat milk and an iced ube matcha with oat milk! I would give them both a 4.3/5!!!! The Saigon Bahn Mi was also delicious as well as the gluten free ube basque cheesecake!!! Ttyl!! ✌🏻" },
  { name: "True Grounds", address: "717 Broadway Ball Square, Somerville, MA 02144", lat: 42.400134, lng: -71.112497, url: "https://www.truegrounds.com/", score: 4.2, date: "2026-04-12",
    quote: "Got an iced honey lavender matcha with oat milk! There was an evaporation problem and it was gone too soon!",
    review: "True Grounds, Somerville MA 📍 I got an iced honey lavender matcha with oat milk! I would rate it a 4.2/5 - there was an evaporation problem and it was gone too soon! Also met an amazing 4 month old puppy named Felix 😋😋 Don't let Monday ruin your Sunday and happy Euphoria day" },
  { name: "Nine Bar Espresso", address: "11 Holland St, Somerville, MA 02144", lat: 42.397157, lng: -71.122919, url: "https://www.instagram.com/ninebarespresso/?hl=en", score: 3.8, date: "2026-04-12",
    quote: "Double Trouble Today! A cheeky iced matcha latte with oat milk — very classic. 3.8/5.",
    review: "Nine Bar Espresso in Somerville MA 📍Double Trouble Today! Took a little stroll into Davis Square with the puppies today for a cheeky iced matcha latte with oat milk! I would give it a 3.8/5, very classic. Scroll for a double headed beast 🐶🐶" },
  { name: "Bom Dough Cafe", address: "1271 Cambridge St, Cambridge, MA 02139", lat: 42.373584, lng: -71.098663, url: "https://bomdough.com/", score: 3.7, date: "2026-04-24",
    quote: "Real ones know I haven't been back since I got bom doughed a few months ago — but I had to face the beast today.",
    review: "Bom Dough, Cambridge MA📍Real ones know I haven't been back since I got bom doughed a few months ago- but I had to face the beast today. BTW the proper matcha to person ratio is 3:2. Balled out on lemon meringue, guava, and golden banana iced matcha latte with oat milk. I would rate them 2.5/5, 4/5, 4.5/5 respectively. Im just a banana 🍌 loving girl! Happy friyay everyone!" },
  { name: "Tandem Bagel Company", address: "95 Elm St, West Springfield, MA 01089", lat: 42.106389, lng: -72.622833, url: "https://tandembagelco.com/", score: 3.6, date: "2026-04-25",
    quote: "A little sweet but very delicious and it went down quick.",
    review: "Tandem Bagels West Springfield, MA 📍 I got an iced oat milk vanilla matcha latte and I would rate it a 3.6/5. It was a little sweet but very delicious and it went down quick. Love to represent my West Springfield Westies with the best baby Myrna. Happy Earth day!" },
  { name: "Hearth & Hug Bakery", address: "349 Highland Ave, Somerville, MA 02144", lat: 42.394288, lng: -71.116838, url: "https://www.hearthandhugbakery.com/", score: 3.9, date: "2026-04-26",
    quote: "An iced mint violet matcha latte with oat milk — very unique and floral forward, not my fav but fun to try something new.",
    review: "Hearth and Hug Bakery in Somerville, MA 📍 Don't let your Monday ruin your Sunday everyone 🌼 I hope everyone had a fantastic weekend. This overcast morning we took a stroll to Hearth and Hug and I got an iced mint violet matcha latte with oat milk, this was very unique and floral forward, not my fav but fun to try something new and I'm excited to come back and keep trying the new flavors. I would rate it a 3.9/5! ✌️" },
  { name: "Revival Cafe + Kitchen", address: "197 Elm St, Somerville, MA 02144", lat: 42.393496, lng: -71.120428, url: "https://www.revivalcafeandkitchen.com/", score: 4.6, date: "2026-05-02",
    quote: "Had to pay my very first follower a visit!!!! A lovely large iced matcha latte with oat milk and cold foam — delish.",
    review: "Revival Somerville, MA 📍 had to pay my very first follower a visit!!!! Happy May 🌺 Got a lovely large iced matcha latte with oat milk and cold foam, this was delish I would rate it a 4.6/5. Have a fantastic weekend my lovely followers ❤️" },
  { name: "Diesel Cafe", address: "257 Elm St, Somerville, MA 02144", lat: 42.395707, lng: -71.121968, url: "https://diesel-cafe.com/", score: 4.3, date: "2026-05-09",
    quote: "Happy Porchfest everybody!!! A large iced vanilla matcha latte with oat milk — muted but delicioso.",
    review: "Diesel Cafe, Somerville MA 📍Happy Porchfest everybody!!! I got a large iced vanilla matcha latte with oat milk and it was muted but delicioso I would rate it a 4.3/5!!! Keep on keeping on 😎" },
  { name: "Vinal Bakery", address: "222 Somerville Ave, Somerville, MA 02143", lat: 42.378039, lng: -71.091631, url: "https://www.vinalbakery.com/", score: 4.1, date: "2026-05-10",
    quote: "Got a scrumptious bfast at one of Somerville's best, plus an iced matcha latte with oat milk. Classic.",
    review: "Vinal Bakery Somerville, MA 📍Happy Mother's Day to all of my matcha mommies 🫶 especially my #1 spell checker linnymags luv u delishioso 🥰🥰🥰 This morning I got a scrumptious bfast at Vinal bakery, one of Somerville's best and got an iced matcha latte with oat milk. Classic. I would give it a 4.1/5. Love you all and see you soon 😘😘" },
  { name: "Pavement Coffeehouse", address: "1663 Massachusetts Ave, Cambridge, MA 02138", lat: 42.381834, lng: -71.119472, url: "https://pavementcoffeehouse.com/", score: 3.3, date: "2026-05-16",
    quote: "A little too sweet for my taste but didn't stop me from chugging it down.",
    review: "Pavement Coffeehouse Cambridge, MA 📍 Took a jaunt to Pavement yesterday. The weather was too gorgeous 💐 🌞 I got an iced matcha latte with oat milk and vanilla, it was a little too sweet for my taste but didn't stop me from chugging it down. I would rate it a 3.3/5!" },
  { name: "Our Daily Bread", address: "116 Hudson Ave, Chatham, NY 12037", lat: 42.357378, lng: -73.600668, url: "https://www.ourdailybreaddeli.com/", score: 4.0, date: "2026-05-24",
    quote: "My only gripe is that the straw was not structurally sound and I could not stir my drink!",
    review: "Our Daily Bread Chatham, NY📍Got a coconut iced matcha latte with oat milk!!! This was yummy! My only gripe is that the straw was not structurally sound and I could not stir my drink! I hereby rank this matcha a 4/5! Happy Sunday minus the sun ☀️" },
  { name: "Kijitora", address: "578 Driggs Ave, Brooklyn, NY 11211", lat: 40.716577, lng: -73.957382, url: "https://www.kijitorabrooklyn.com/", score: 4.6, date: "2026-05-30",
    quote: "This adorable cafe in BK also had cat blind boxes?!? Could it get any better!",
    review: "Kijitora Brooklyn, NY 📍Hello hello hello!! I jetsetted to NYC this weekend and had many matchas, amidst the hectic travel I couldn't post all of them. However, this iced strawberry matcha latte with oat milk was definitely special, earning a 4.5/5 on taste and on the new COLOR rating scale a 4.6/5! This adorable cafe in BK also had cat blind boxes?!? Could it get any better! Now I hope everyone has a great week and if anyone else is suffering from a transition weather cold I hope your sneezing stops and your mucus clears 🤧" },
  { name: "Kickstand Cafe", address: "594 Massachusetts Ave, Arlington, MA 02476", lat: 42.414696, lng: -71.152819, url: "http://www.thekickstandcafe.com/", score: 3.9, date: "2026-06-07",
    quote: "Had to return to my hometown for a special little cafe in Arlington center on a beautiful Sunday AM!",
    review: "Kickstand Cafe, Arlington MA 📍 Had to return to my hometown for a special little cafe in Arlington center on a beautiful Sunday AM! I got a large vanilla iced matcha latte with oat milk! It was good and definitely hit the spot on such a beautiful day, I would rank taste a 3.7/5 and color a 3.9/5! Love a hometown hero moment with my babies🤤 Sorry for the post delay- try being an influencer for a day" },
  { name: "Tilde", address: "2376 Massachusetts Ave, Cambridge, MA 02140", lat: 42.396676, lng: -71.129769, url: "https://www.tildecambridge.com/", score: 4.7, date: "2026-06-14",
    quote: "The seasonal toasted tiki syrup (macadamia and coconut)! This was delish and fresh and fun! No notes 👌",
    review: "Tilde Cambridge, MA 📍 Happy Sunday to my lovely followers! It's World Cup szn and it's HOT- what could be better! Had to start today off with an iced matcha latte with oat milk and the seasonal toasted tiki syrup (macadamia and coconut)! This was delish and fresh and fun! I would rank it a 4.6/5 on flavor and 4.8/5 for color! No notes 👌👌👌I also loved some of the little decorations 👀👀👀" },
  { name: "Verveine Cafe & Bakery", address: "298 Massachusetts Ave, Cambridge, MA 02139", lat: 42.362286, lng: -71.098779, url: "https://www.verveinecafe.com/", score: 4.0, date: "2026-06-20",
    quote: "I can never recreate an ube matcha like this at home, any advice is appreciated!",
    review: "Verveine Cafe, Cambridge MA 📍Stopped by the best gluten free spot I've EVER visited this lovely Saturday. Got a few delicious pastries (the cinnamon bun goated) and some delectable matcha. I got a large iced strawberry matcha latte with oat milk, I would rate it a 3.9/5 and color a 4.9/5 (beautiful)! I don't think I mixed mine enough so I drank up all the strawberry syrup early on, still went down quick though. Chad got an iced ube matcha latte with oat milk, I would give that a 4.1/5 and the color a 4.9/5 (also beautiful). I can never recreate an ube matcha like this at home, any advice is appreciated! Enjoy the rest of your weekend and shoutout to Posy on her 16th birthday and all the daddies for Father's Day!" },
  { name: "Bloc Cafe", address: "11 Bow St, Somerville, MA 02143", lat: 42.380808, lng: -71.096853, url: "https://blocsomerville.com/", score: 4.3, date: "2026-07-11",
    quote: "Color doesn't matter as much if the flavor is bumping. Vamos Argentina 🇦🇷!",
    review: "Bloc Cafe Somerville, MA 📍Had to stop into Union Square for the lovely farmers market and some delicious coffee at Bloc! We know and love Diesel so had to come out to support their cousin! I got an iced strawberry matcha latte with oat milk. This was delicious I would give it a 4.3/5 and the color a 4/5 (color doesn't matter as much if the flavor is bumping). Happy love island USA finale day and happy birthday to all my cancer loved ones!! Vamos Argentina 🇦🇷!" },
  { name: "Dock Square Coffee House", address: "18 Dock Square, Kennebunkport, ME 04046", lat: 43.361405, lng: -70.477303, url: "https://www.dschkpt.com/", score: 4.5, date: "2026-07-12",
    quote: "We took a little jaunt this Sunday am to get an iced wild blueberry matcha latte with oat milk. This was bussing.",
    review: "Dock Square Coffee House Kennebunkport, ME 📍 So excited to feature my favorite little town in Maine for one of my 🦀 @kendall.eaton birthday! We took a little jaunt this Sunday am to get an iced wild blueberry matcha latte with oat milk. This was bussing. I would rate the taste a 4.5/5 and color a 3.9/5. Enjoy your Sunday everyone 😎" },
  { name: "True Grounds", address: "717 Broadway Ball Square, Somerville, MA 02144", lat: 42.400134, lng: -71.112497, url: "https://www.truegrounds.com/", score: 4.6, date: "2026-07-19",
    quote: "I got a large iced matcha latte with oat milk and the bees knees syrup (honey, cinnamon, etc.). This is one of my faves 🤤",
    review: "7/18 True Grounds Somerville, MA 📍Hello! Yesterday we took a stroll to Ball square and I got a large iced matcha latte with oat milk and the bees knees syrup (honey, cinnamon, etc.). This is one of my faves 🤤 I would rate this a 4.6/5 and the color a 4/5. It truly was gone too soon. See you all soon 👋" },
  { name: "Hearth & Hug Bakery", address: "349 Highland Ave, Somerville, MA 02144", lat: 42.394288, lng: -71.116838, url: "https://www.hearthandhugbakery.com/", score: 4.0, date: "2026-08-02",
    quote: "I spotted a little white fluff in the window and had to pull over ASAP to say hello to a fellow Westie!",
    review: "8/2 Hearth and Hug Bakery Somerville, MA 📍Guys, I was minding my business driving to Trader Joe's and I spotted a little white fluff in the window of Hearth and Hug and had to pull over ASAP to say hello to a fellow Westie! W for dog friendly establishments. But while I was saying hi and receiving licks from adorable Ava the 6 year old, but seemingly mini, Westie!!!! I then got a cheeky little vanilla iced matcha latte! This was delish I would give it a 4/5, it had a slight chocolate milky taste which I can get behind, and the color was gorge I'd rate it a 4.2/5. Happy Sunday and I hope to see this little Westie around Somerville in the future!!" },
  { name: "Magic Brain Cafe", address: "31 Perry St, Cape May, NJ 08204", lat: 38.931460, lng: -74.923802, url: "https://www.magicbraincapemay.com/", score: 3.9, date: "2026-08-16",
    quote: "On our wonderful weekend getaway to New Jersey we stopped into this cute little cafe to get an iced matcha latte with baba syrup and oat milk.",
    review: "8/16 Magic Brain Cafe Cape May, NJ 📍On our wonderful weekend getaway to New Jersey we stopped into this cute little cafe to get an iced matcha latte with baba syrup and oat milk. This was sweet going down and gone in a minute, I would rank the taste a 3.9/5 and the color a 3.3/5. Have a great week ☀️ ✌️💚" }
];

// Derives one entry per unique café (by name), using its most recent visit —
// this is what powers the map pins and the rankings leaderboard.
function getLatestCafes(visits){
  var latest = {};
  visits.forEach(function(v){
    if (!latest[v.name] || new Date(v.date) > new Date(latest[v.name].date)) {
      latest[v.name] = v;
    }
  });
  return Object.keys(latest).map(function(k){ return latest[k]; });
}
