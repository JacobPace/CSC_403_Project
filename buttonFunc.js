/*
Class for the State object that contains the values:
    name -> string: name of the state to be displayed on the popup
    id -> string: allows for easier integration with simplemaps
    visited -> boolean: is true/false depeing on if the state has been visited yet to prevent it being selected twice (false by default)
    neighbors -> array: contains a list of neighboring states that can be accessed to move the currently selected state to a non-visited neighbor
    info -> string: holds tourism information about the state

    Also contains the methods:
    setNeighbors(x) -> inputs an array of states to set as the neighbors of the state
    isVisited() -> setter method to change the visited boolean from "false" to "true" to indicate thatit has been visited
*/
class State {
    constructor(name, id, visited, neighbors, info){
        this.name = name;
        this.id = id;
        this.visited = false;
        this.neighbors = [];
        this.info = info;
    }
    setNeighbors(x){
        this.neighbors = x;
    }
    isVisited(){
        this.visited = true;
    }
}

let Alabama = new State("Alabama", "AL", false, [], "Restaurant 1: Lambert's Cafe, 2981 S McKenzie St, Foley, AL 36535<br>Restaurant 2: Bottega, 2240 Highland Ave, Birmingham, AL 35205<br>Tourist spot 1: USS ALABAMA Battleship Memorial Park, 2703 Battleship Pkwy, Mobile, AL 36602<br>Tourist spot 2: Cathedral Caverns State Park, 637 Cave Rd, Woodville, AL 35776");
let Alaska = new State("Alaska", "AK", false, [], "Restaurant 1: Rustic Goat, 2800 Turnagain St, Anchorage, AK 99517<br>Restaurant 2: Alaska Chopped and Chowdered, 4403 Spenard Rd, Anchorage, AK 99517<br>Tourist spot 1: Alaska Wildlife Conservation Center, 43520 Seward Hwy, Girdwood, AK 99587<br>Tourist spot 2: White Pass & Yukon Route Railway, 201 2nd Ave, Skagway, AK 99840");
let Arizona = new State("Arizona", "AZ", false, [], "Restaurant 1: Different Pointe of View, 11111 N 7th St, Phoenix, AZ 85020<br>Restaurant 2: Top of the Rock Restaurant, 2000 W Westcourt Way, Tempe, AZ 85282<br>Tourist spot 1: Desert Botanical Garden, 1201 N Galvin Pkwy, Phoenix, AZ 85008<br>Tourist spot 2: Musical Instrument Museum, 4725 E Mayo Blvd, Phoenix, AZ 85050");
let Arkansas = new State("Arkansas", "AR", false, [], "Restaurant 1: The Grumpy Rabbit, 105 Front St SW, Lonoke, AR 72086<br>Restaurant 2: The Pantry Restaurant, 11401 N Rodney Parham Rd, Little Rock, AR 72212<br>Tourist spot 1: Crystal Bridges Museum of American Art, 600 Museum Way, Bentonville, AR 72712<br>Tourist spot 2: Crater of Diamonds State Park, 209 State Park Rd, Murfreesboro, AR 71958");
let California = new State("California", "CA", false, [], "Restaurant 1: Chez Panisse, 1517 Shattuck Ave., Berkeley, CA 94709<br>Restaurant 2: Ritual at Manresa, 320 Village Ln, Los Gatos, CA 95030<br>Tourist spot 1: Disneyland Park, Anaheim, CA 92802<br>Tourist spot 2: San Diego Zoo, 2920 Zoo Dr, San Diego, CA 92101");
let Colorado = new State("Colorado", "CO", false, [], "Restaurant 1: The Rabbit Hole, 101 N Tejon St, Colorado Springs, CO 80903<br>Restaurant 2: Alma Fonda Fina, 2556 15th St, Denver, CO 80211<br>Tourist spot 1: Denver Museum of Nature & Science, 2001 Colorado Blvd, Denver, CO 80205<br>Tourist spot 2: Cave of the Winds Mountain Park, 100 Cave of the Winds Rd, Manitou Springs, CO 80829");
let Connecticut = new State("Connecticut", "CT", false, [], "Restaurant 1: Millwright's Restaurant, 77 West St, Simsbury, CT 06070<br>Restaurant 2: Fire by Forge Restaurant, 539 Broad St, Hartford, CT 06106<br>Tourist spot 1: Mystic Aquarium, 55 Coogan Blvd, Mystic, CT 06355<br>Tourist spot 2: The Mark Twain House & Museum, 351 Farmington Ave, Hartford, CT 06105");
let Delaware = new State("Delaware", "DE", false, [], "Restaurant 1: Snuff Mill Restaurant, Butchery & Wine Bar, 1601 Concord Pike Suite 77-79, Wilmington, DE 19803<br>Restaurant 2: Jack’s on Main, 314 Main St, Clayton, DE 19938<br>Tourist spot 1: Air Mobility Command Museum, 1301 Heritage Rd, Dover AFB, DE 19902<br>Tourist spot 2: Hagley Museum, 200 Hagley Creek Rd, Wilmington, DE 19807");
let Florida = new State("Florida", "FL", false, [], "Restaurant 1: Dockside Seafood Restaurant Jax Beach, 2510 2nd Ave N, Jacksonville Beach, FL 32250<br>Restaurant 2: Rocca, 323 W Palm Ave, Tampa, FL 33602<br>Tourist spot 1: Siesta Beach, Sarasota, FL 34242<br>Tourist spot 2: Universal Studios Florida, 6000 Universal Blvd, Orlando, FL 32819");
let Georgia = new State("Georgia", "GA", false, [], "Restaurant 1: Whiskey Bird, 1409 N Highland Ave NE, Atlanta, GA 30306<br>Restaurant 2: Marcel, 1170 Howell Ml Rd NW, Atlanta, GA 30318<br>Tourist spot 1: Rock City Gardens, 1400 Patten Rd, Lookout Mountain, GA 30750<br>Tourist spot 2: Georgia Aquarium, 225 Baker St NW, Atlanta, GA 30313");
let Hawaii = new State("Hawaii", "HI", false, [], "Restaurant 1: Duke's Waikiki, 2335 Kalākaua Ave 116, Honolulu, HI 96815<br>Restaurant 2: Monkeypod Kitchen, 2169 Kālia Rd unit 111, Honolulu, HI 96815<br>Tourist spot 1: Polynesian Cultural Center, 55-370 Kamehameha Hwy, Laie, HI 96762<br>Tourist spot 2: USS Arizona Memorial, 1 Arizona Memorial Pl, Honolulu, HI 96818");
let Idaho = new State("Idaho", "ID", false, [], "Restaurant 1: Izzy's Comfort Kitchen, 726 N 4th St, Coeur d'Alene, ID 83814<br>Restaurant 2: Brick 29, 320 11th Ave S Suite#300, Nampa, ID 83651<br>Tourist spot 1: Shoshone Falls Park, 4155 Shoshone Falls Grade Rd, Twin Falls, ID 83301<br>Tourist spot 2: Lava Hot Springs Foundation World Famous Hot Springs, 430 Main St Ste.A, Lava Hot Springs, ID 83246");
let Illinois = new State("Illinois", "IL", false, [], "Restaurant 1: AMBAR Restaurant, 700 N Clark St, Chicago, IL 60654<br>Restaurant 2: Quartino Ristorante, 626 N State St, Chicago, IL 60654<br>Tourist spot 1: The Art Institute of Chicago, 111 S Michigan Ave, Chicago, IL 60603<br>Tourist spot 2: Cloud Gate, 201 E Randolph St, Chicago, IL 60602");
let Indiana = new State("Indiana", "IN", false, [], "Restaurant 1: The Fountain Room, 830 Massachusetts Ave Suite 1480, Indianapolis, IN 46204<br>Restaurant 2: Vida, 601 E New York St, Indianapolis, IN 46202<br>Tourist spot 1: Turkey Run State Park, 8121 Park Rd, Marshall, IN 47859<br>Tourist spot 2: The Children's Museum of Indianapolis, 3000 N Meridian St, Indianapolis, IN 46208");
let Iowa = new State("Iowa", "IA", false, [], "Restaurant 1: Oak Park, 3901 Ingersoll Ave, Des Moines, IA 50312<br>Restaurant 2: Proudfoot & Bird, 1000 Walnut St, Des Moines, IA 50309<br>Tourist spot 1: Maquoketa Caves State Park, 9688 Caves Rd, Maquoketa, IA 52060<br>Tourist spot 2: National Mississippi River Museum & Aquarium, 350 E 3rd St, Dubuque, IA 52001");
let Kansas = new State("Kansas", "KS", false, [], "Restaurant 1: Silo Modern Farmhouse, 17501 W 87th St, Lenexa, KS 66219<br>Restaurant 2: Joe's KC BBQ, 3002 W 47th Ave, Kansas City, KS 66103<br>Tourist spot 1: Sedgwick County Zoo, 5555 W Zoo Blvd, Wichita, KS 67212<br>Tourist spot 2: The Keeper of the Plains, 339 Veterans Pkwy, Wichita, KS 67203");
let Kentucky = new State("Kentucky", "KY", false, [], "Restaurant 1: Ford's Garage Florence, 4911 Houston Rd, Florence, KY 41042<br>Restaurant 2: The Kitchen Table, 522 Happy Hollow Rd, Clermont, KY 40110<br>Tourist spot 1: Louisville Slugger Museum & Factory, 800 W Main St, Louisville, KY 40202<br>Tourist spot 2: Ark Encounter, 1 Ark Encounter Dr, Williamstown, KY 41097");
let Louisiana = new State("Louisiana", "LA", false, [], "Restaurant 1: Log Cabin Grill & Market, 1906 Farmerville Hwy, Ruston, LA 71270<br>Restaurant 2 Restaurant Cotton, 101 N Grand St, Monroe, LA 71201<br>Tourist spot 1: The National WWII Museum, 945 Magazine St, New Orleans, LA 70130<br>Tourist spot 2: St. Louis Cathedral, 615 Pere Antoine Alley, New Orleans, LA 70116");
let Maine = new State("Maine", "ME", false, [], "Restaurant 1: Twelve, 115 Thames St, Portland, ME 04101<br>Restaurant 2: Fore Street Restaurant, 288 Fore St, Portland, ME 04101<br>Tourist spot 1: Portland Head Light, Cape Elizabeth, ME 04107<br>Tourist spot 2: Coastal Maine Botanical Gardens, 105 Botanical Gdns Dr, Boothbay, ME 04537");
let Maryland = new State("Maryland", "MD", false, [], "Restaurant 1: MoCo's Founding Farmers, 12505 Park Potomac Ave, Potomac, MD 20854<br>Restaurant 2: Dutch's Daughter, 581 Himes Ave, Frederick, MD 21703<br>Tourist spot 1: National Aquarium, 501 E Pratt St, Baltimore, MD 21202<br>Tourist spot 2: Fort McHenry National Monument and Historic Shrine, 2400 E Fort Ave, Baltimore, MD 21230");
let Massachusetts = new State("Massachusetts", "MA", false, [], "Restaurant 1: Boston Sail Loft, 80 Atlantic Ave, Boston, MA 02110<br>Restaurant 2: Carmelina's, 307 Hanover St, Boston, MA 02113<br>Tourist spot 1: Museum of Fine Arts, 465 Huntington Ave, Boston, MA 02115<br>Tourist spot 2: Isabella Stewart Gardner Museum, 25 Evans Way, Boston, MA 02115");
let Michigan = new State("Michigan", "MI", false, [], "Restaurant 1: Mabel Gray, 23825 John R Rd, Hazel Park, MI 48030<br>Restaurant 2: Plank's Tavern on the Water, 800 Whitwam Dr, St Joseph, MI 49085<br>Tourist spot 1: Henry Ford Museum of American Innovation, 20900 Oakwood Blvd, Dearborn, MI 48124<br>Tourist spot 2: Detroit Institute of Arts, 5200 Woodward Ave, Detroit, MI 48202");
let Minnesota = new State("Minnesota", "MN", false, [], "Restaurant 1: Spoon and Stable, 211 N 1st St, Minneapolis, MN 55401<br>Restaurant 2: Butcher & The Boar, 901 N 3rd St Suite 195, Minneapolis, MN 55401<br>Tourist spot 1: Mall of America, 60 E Broadway, Bloomington, MN 55425<br>Tourist spot 2: Minneapolis Institute of Art, 2400 3rd Ave S, Minneapolis, MN 55404");
let Mississippi = new State("Mississippi", "MS", false, [], "Restaurant 1: Shaggy's on the Rez, 1733 Spillway Rd, Brandon, MS 39047<br>Restaurant 2: Sully's, 1316 30th Ave, Gulfport, MS 39501<br>Tourist spot 1: Elvis Presley Birthplace, 306 Elvis Presley Dr, Tupelo, MS 38801<br>Tourist spot 2: Vicksburg National Military Park, 3201 Clay St, Vicksburg, MS 39183");
let Missouri = new State("Missouri", "MO", false, [], "Restaurant 1: Pappy's Smokehouse, 3106 Olive St, St. Louis, MO 63103<br>Restaurant 2: The Encore Lakeside Grill & Sky Bar, 3076 Bagnell Dam Blvd, Lake Ozark, MO 65049<br>Tourist spot 1: Silver Dollar City, 399 Silver Dollar City Pkwy, Branson, MO 65616<br>Tourist spot 2: Missouri Botanical Garden, 4344 Shaw Blvd, St. Louis, MO 63110");
let Montana = new State("Montana", "MT", false, [], "Restaurant 1: Bitterroot Bistro, 19 S Willson Ave, Bozeman, MT 59715<br>Restaurant 2: Gallatin River Lodge, 9105 Thorpe Rd, Bozeman, MT 59718<br>Tourist spot 1: Little Bighorn Battlefield National Monument, Battlefield Tour Rd, Crow Agency, MT 59022<br>Tourist spot 2: Grizzly & Wolf Discovery Center, 201 S Canyon St, West Yellowstone, MT 59758");
let Nebraska = new State("Nebraska", "NE", false, [], "Restaurant 1: Salted Edge, 110 S 243rd St, Waterloo, NE 68069<br>Restaurant 2: Ooh De Lally, 4916 Underwood Ave, Omaha, NE 68132<br>Tourist spot 1: Omaha's Henry Doorly Zoo and Aquarium, 3701 S 10th St, Omaha, NE 68107<br>Tourist spot 2: Scotts Bluff National Monument, 190276 Old Oregon Trail, Gering, NE 69341");
let Nevada = new State("Nevada", "NV", false, [], "Restaurant 1: Sparrow + Wolf, 4480 Spring Mountain Rd 100, Las Vegas, NV 89102<br>Restaurant 2: Wild River Grille, 17 S Virginia St, Reno, NV 89501<br>Tourist spot 1: Bellagio Hotel & Casino, 3600 S Las Vegas Blvd, Las Vegas, NV 89109<br>Tourist spot 2: Fountains of Bellagio, 3600 S Las Vegas Blvd, Las Vegas, NV 89109");
let New_Hampshire = new State("New Hampshire", "NH", false, [], "Restaurant 1: The Foundry, 50 Commercial St, Manchester, NH 03101<br>Restaurant 2: Firefly Bistro & Bar, 22 Concord St, Manchester, NH 03101<br>Tourist spot 1: Flume Gorge, 852 Daniel Webster Hwy, Lincoln, NH 03251<br>Tourist spot 2: The Mount Washington Cog Railway, 3168 Base Station Rd, MOUNT WASHINGTON, NH 03589");
let New_Jersey = new State("New Jersey", "NJ", false, [], "Restaurant 1: Nicholas Barrel & Roost, 160 NJ-35, Red Bank, NJ 07701<br>Restaurant 2: Heirloom Kitchen, 3853 County Rd 516, Old Bridge, NJ 08857<br>Tourist spot 1: Liberty State Park, 1 Audrey Zapp Dr, Jersey City, NJ 07305<br>Tourist spot 2: Grounds For Sculpture, 80 Sculptors Way, Hamilton Township, NJ 08619");
let New_Mexico = new State("New Mexico", "NM", false, [], "Restaurant 1: The Ranch House, 2571 Cristo's Rd, Santa Fe, NM 87507<br>Restaurant 2: Sawmill Market, 1909 Bellamah Ave NW, Albuquerque, NM 87104<br>Tourist spot 1: Meow Wolf Santa Fe's House of Eternal Return, 1352 Rufina Cir, Santa Fe, NM 87507<br>Tourist spot 2: Santa Fe Plaza, 63 Lincoln Ave, Santa Fe, NM 87501");
let New_York = new State("New York", "NY", false, [], "Restaurant 1: Gramercy Tavern, 42 E 20th St, New York, NY 10003<br>Restaurant 2: Boucherie West Village, 99 7th Ave S, New York, NY 10014<br>Tourist spot 1: Empire State Building, 20 W 34th St., New York, NY 10001<br>Tourist spot 2: The Metropolitan Museum of Art, 1000 5th Ave, New York, NY 10028");
let North_Carolina = new State("North Carolina", "NC", false, [], "Restaurant 1: Southern Pecan - Gulf Coast Kitchen, 6706-C, Phillips Pl Ct, Charlotte, NC 28210<br>Restaurant 2: Herons, The Umstead Hotel and Spa, 100 Woodland Pond Dr, Cary, NC 27513<br>Tourist spot 1: Battleship North Carolina, 1 Battleship Rd NE, Wilmington, NC 28401<br>Tourist spot 2: Chimney Rock State Park, 431 Main St, Chimney Rock, NC 28720");
let North_Dakota = new State("North Dakota", "ND", false, [], "Restaurant 1: The Paddle Trap, 2500 Pirates Loop SE, Mandan, ND 58554<br>Restaurant 2: Mezzaluna & The Drawing Room, 309 Roberts St N, Fargo, ND 58102<br>Tourist spot 1: International Peace Garden, 10939 Highway 281, Boissevain, MB R0K 0E0, Canada<br>Tourist spot 2: Dakota Zoo, 602 Riverside Park Rd, Bismarck, ND 58504");
let Ohio = new State("Ohio", "OH", false, [], "Restaurant 1: The Barn at Rocky Fork Creek, 1370 E Johnstown Rd, Gahanna, OH 43230<br>Restaurant 2: The Guild House, 624 N High St, Columbus, OH 43215<br>Tourist spot 1: Cedar Point, 1 Cedar Point Dr, Sandusky, OH 44870<br>Tourist spot 2: Rock & Roll Hall of Fame, 1100 E 9th St, Cleveland, OH 44114");
let Oklahoma = new State("Oklahoma", "OK", false, [], "Restaurant 1: Redrock Canyon Grill, 9221 Lake Hefner Pkwy, Oklahoma City, OK 73120<br>Restaurant 2: Cheever's Cafe, 2409 N Hudson Ave, Oklahoma City, OK 73103<br>Tourist spot 1: Oklahoma City National Memorial & Museum, 620 N Harvey Ave, Oklahoma City, OK 73102<br>Tourist spot 2: Oklahoma City Zoo, 2000 Remington Pl, Oklahoma City, OK 73111");
let Oregon = new State("Oregon", "OR", false, [], "Restaurant 1: Local Ocean Seafoods, 213 SE Bay Blvd., Newport, OR 97365<br>Restaurant 2: Cowboy Dinner Tree, 50836 E. Bay Road County Rd 4, 12 Forest Service Rd #28, Silver Lake, OR 97638<br>Tourist spot 1: Haystack Rock, US-101, Cannon Beach, OR 97110<br>Tourist spot 2: International Rose Test Garden, 400 SW Kingston Ave, Portland, OR 97205");
let Pennsylvania = new State("Pennsylvania", "PA", false, [], "Restaurant 1: Jasper's Backyard, 101 E 7th Ave, Conshohocken, PA 19428<br>Restaurant 2: RE Farm Cafe at Windswept Farm, 1000 S Fillmore Rd, State College, PA 16803<br>Tourist spot 1: Philadelphia Museum of Art, 2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130<br>Tourist spot 2: Hersheypark, 100 Hersheypark Dr, Hershey, PA 17033");
let Rhode_Island = new State("Rhode Island", "RI", false, [], "Restaurant 1: Hemenway's Restaurant, 121 S Main St, Providence, RI 02903<br>Restaurant 2: The Nordic, 178 Nordic Trl, Charlestown, RI 02813<br>Tourist spot 1: The Breakers, 44 Ochre Point Ave, Newport, RI 02840<br>Tourist spot 2: Roger Williams Park Zoo, 1000 Elmwood Ave, Providence, RI 02907");
let South_Carolina = new State("South Carolina", "SC", false, [], "Restaurant 1: The Obstinate Daughter, 2063 Middle St, Sullivan's Island, SC 29482<br>Restaurant 2: Old Mill Brewpub, 711 E Main St, Lexington, SC 29072<br>Tourist spot 1: Falls Park on the Reedy, 601 S Main St, Greenville, SC 29601<br>Tourist spot 2: Patriots Point Naval & Maritime Museum, 40 Patriots Point Rd, Mt Pleasant, SC 29464");
let South_Dakota = new State("South Dakota", "SD", false, [], "Restaurant 1: Harvester Kitchen by Bryan, 196 E 6th St Unit 101, Sioux Falls, SD 57104<br>Restaurant 2: Rivage Oak Kitchen, 300 N Cherapa Pl Ste 102, Sioux Falls, SD 57103<br>Tourist spot 1: Falls Park, 131 E Falls Park Dr, Sioux Falls, SD 57104<br>Tourist spot 2: Reptile Gardens, 8955 US-16, Rapid City, SD 57702");
let Tennessee = new State("Tennessee", "TN", false, [], "Restaurant 1: The Stillery, 113 2nd Ave N, Nashville, TN 37201<br>Restaurant 2: Lockeland Table, 1520 Woodland St, Nashville, TN 37206 <br>Tourist spot 1: Graceland, Elvis Presley Blvd, Memphis, TN 38116<br>Tourist spot 2: Dollywood, 2700 Dollywood Parks Blvd, Pigeon Forge, TN 37863");
let Texas = new State("Texas", "TX", false, [], "Restaurant 1: Soul Food Kitchen, 3731 Elm St, Choudrant, LA 71227<br>Restaurant 2: Taste of Texas, 10505 Katy Fwy, Houston, TX 77024<br>Tourist spot 1: The Dallas Arboretum and Botanical Garden, 8525 Garland Rd, Dallas, TX 75218<br>Tourist spot 2: Space Center Houston, 1601 E NASA Pkwy, Houston, TX 77058");
let Utah = new State("Utah", "UT", false, [], "Restaurant 1: Sunday's Best Salt Lake at the Post District, 505 Gale St, Salt Lake City, UT 84101<br>Restaurant 2: Red Iguana, 736 W North Temple St, Salt Lake City, UT 84116<br>Tourist spot 1: Temple Square, 50 North Temple, Salt Lake City, UT 84150<br>Tourist spot 2: Deer Valley Resort, 2250 Deer Valley Dr S, Park City, UT 84060");
let Vermont = new State("Vermont", "VT", false, [], "Restaurant 1: Farmhouse Tap & Grill, 160 Bank St, Burlington, VT 05401<br>Restaurant 2: Hen of the Wood, 14 S Main St, Waterbury, VT 05676<br>Tourist spot 1: Church Street Marketplace, 131 Church St, Burlington, VT 05401<br>Tourist spot 2: Shelburne Museum, 6000 Shelburne Rd, Shelburne, VT 05482");
let Virginia = new State("Virginia", "VA", false, [], "Restaurant 1: Founding Farmers Tysons, 1800 Tysons Blvd, Tysons, VA 22102<br>Restaurant 2: The Secret Garden Cafe, 404 Mill St, Occoquan Historic District, VA 22125<br>Tourist spot 1: Luray Caverns, 101 Cave Hill Rd, Luray, VA 22835<br>Tourist spot 2: Steven F. Udvar-Hazy Center,14390 Air and Space Museum Pkwy, Chantilly, VA 20151");
let Washington = new State("Washington", "WA", false, [], "Restaurant 1: Six Seven Restaurant, 2411 Alaskan Wy Pier 67, Seattle, WA 98121<br>Restaurant 2: The Wandering Goose, 2964 Kindred Ave, Tokeland, WA 98590<br>Tourist spot 1: Olympic National Park, 3002 Mt Angeles Rd, Port Angeles, WA 98362<br>Tourist spot 2: Space Needle, 400 Broad St, Seattle, WA 98109");
let West_Virginia = new State("West Virginia", "WV", false, [], "Restaurant 1: Hillbilly Hot Dogs, 6951 Ohio River Rd, Lesage, WV 25537<br>Restaurant 2: Bricks & Barrels, 1214 Smith St, Charleston, WV 25301<br>Tourist spot 1: Harpers Ferry National Historical Park, 171 Shoreline Dr, Harpers Ferry, WV 25425<br>Tourist spot 2: Blackwater Falls State Park, 1584 Blackwater Lodge Rd, Davis, WV 26260");
let Wisconsin = new State("Wisconsin", "WI", false, [], "Restaurant 1: Lake City Social Grill & Bar, 644 Wisconsin Dells Pkwy, Wisconsin Dells, WI 53965<br>Restaurant 2: Swingin' Door Exchange, 219 E Michigan St, Milwaukee, WI 53202<br>Tourist spot 1: Milwaukee Art Museum, 700 N Art Museum Dr, Milwaukee, WI 53202<br>Tourist spot 2: Harley-Davidson Museum, 400 W Canal St, Milwaukee, WI 53201");
let Wyoming = new State("Wyoming", "WY", false, [], "Restaurant 1: The Bistro, 112 Center St, Jackson, WY 83001<br>Restaurant 2: Miazga's, 399 W Broadway, Jackson, WY 83001<br>Tourist spot 1: Buffalo Bill Center of the West, 720 Sheridan Ave, Cody, WY 82414<br>Tourist spot 2: National Museum of Wildlife Art, 2820 Rungius Rd, Jackson, WY 83001");

const AllStates = [Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut,
    Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky,
    Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri,
    Montana, Nebraska, Nevada, New_Hampshire, New_Jersey, New_Mexico, New_York, North_Carolina,
    North_Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode_Island, South_Carolina, South_Dakota,
    Tennessee, Texas, Utah, Vermont, Virginia, Washington, West_Virginia, Wisconsin, Wyoming];

setAllNeighbors();

function setAllNeighbors(){
    Alabama.setNeighbors([Mississippi, Florida, Georgia, Tennessee]);
    Alaska.setNeighbors([Washington, Idaho, Montana]);
    Arizona.setNeighbors([California, Nevada, Utah, Colorado, New_Mexico]);
    Arkansas.setNeighbors([Mississippi, Missouri, Oklahoma, Louisiana, Tennessee, Texas]);
    California.setNeighbors([Oregon, Nevada, Arizona, Hawaii]);
    Colorado.setNeighbors([Wyoming, Nebraska, Kansas, Oklahoma, Utah, New_Mexico, Arizona]);
    Connecticut.setNeighbors([New_York, Massachusetts, Rhode_Island]);
    Delaware.setNeighbors([Maryland, New_Jersey, Pennsylvania]);
    Florida.setNeighbors([Georgia, Alabama]);
    Georgia.setNeighbors([Tennessee, North_Carolina, South_Carolina, Florida, Alabama]);
    Hawaii.setNeighbors([California]);
    Idaho.setNeighbors([Washington, Oregon, Nevada, Montana, Wyoming, Utah, Alaska]);
    Illinois.setNeighbors([Iowa, Wisconsin, Indiana, Kentucky, Missouri]);
    Indiana.setNeighbors([Illinois, Michigan, Ohio, Kentucky]);
    Iowa.setNeighbors([Minnesota, South_Dakota, Nebraska, Missouri, Wisconsin, Illinois]);
    Kansas.setNeighbors([Nebraska, Colorado, Oklahoma, Missouri]);
    Kentucky.setNeighbors([Illinois, Indiana, Ohio, West_Virginia, Virginia, Tennessee, Missouri]);
    Louisiana.setNeighbors([Arkansas, Mississippi, Texas]);
    Maine.setNeighbors([New_Hampshire, Massachusetts]);
    Maryland.setNeighbors([West_Virginia, Pennsylvania, Delaware, Virginia]);
    Massachusetts.setNeighbors([Maine, New_Hampshire, Vermont, New_York, Connecticut, Rhode_Island]);
    Michigan.setNeighbors([Wisconsin, Indiana, Ohio]);
    Minnesota.setNeighbors([North_Dakota, South_Dakota, Wisconsin, Iowa]);
    Mississippi.setNeighbors([Arkansas, Louisiana, Tennessee, Alabama]);
    Missouri.setNeighbors([Iowa, Illinois, Kentucky, Tennessee, Arkansas, Oklahoma, Kansas, Nebraska]);
    Montana.setNeighbors([Alaska, North_Dakota, South_Dakota, Wyoming, Idaho]);
    Nebraska.setNeighbors([South_Dakota, Iowa, Missouri, Kansas, Colorado, Wyoming]);
    Nevada.setNeighbors([Oregon, Idaho, Utah, Arizona, California]);
    New_Hampshire.setNeighbors([Maine, Vermont, Massachusetts]);
    New_Jersey.setNeighbors([New_York, Pennsylvania, Delaware]);
    New_Mexico.setNeighbors([Colorado, Oklahoma, Texas, Arizona, Utah]);
    New_York.setNeighbors([Vermont, Massachusetts, Connecticut, Rhode_Island, New_Jersey, Pennsylvania]);
    North_Carolina.setNeighbors([Virginia, Tennessee, South_Carolina]);
    North_Dakota.setNeighbors([Minnesota, South_Dakota, Montana]);
    Ohio.setNeighbors([Michigan, Pennsylvania, West_Virginia, Kentucky, Indiana]);
    Oklahoma.setNeighbors([Kansas, Arkansas, Texas, New_Mexico, Colorado]);
    Oregon.setNeighbors([Washington, Idaho, Nevada, California]);
    Pennsylvania.setNeighbors([New_York, New_Jersey, Maryland, West_Virginia, Ohio]);
    Rhode_Island.setNeighbors([Massachusetts, Connecticut, New_York]);
    South_Carolina.setNeighbors([North_Carolina, Georgia]);
    South_Dakota.setNeighbors([North_Dakota, Minnesota, Iowa, Nebraska, Wyoming, Montana]);
    Tennessee.setNeighbors([Kentucky, Virginia, North_Carolina, Georgia, Alabama, Mississippi, Arkansas, Missouri]);
    Texas.setNeighbors([Oklahoma, Arkansas, Louisiana, New_Mexico]);
    Utah.setNeighbors([Idaho, Wyoming, Colorado, New_Mexico, Arizona, Nevada]);
    Vermont.setNeighbors([New_Hampshire, Massachusetts, New_York]);
    Virginia.setNeighbors([Maryland, North_Carolina, Tennessee, Kentucky, West_Virginia]);
    Washington.setNeighbors([Alaska, Oregon, Idaho]);
    West_Virginia.setNeighbors([Pennsylvania, Maryland, Virginia, Kentucky, Ohio]);
    Wisconsin.setNeighbors([Michigan, Illinois, Iowa, Minnesota]);
    Wyoming.setNeighbors([Montana, South_Dakota, Nebraska, Colorado, Utah, Idaho]);
}

let currentState;
let visitedStates = 0;
const container = document.getElementById('fireworks');
const fireworks = new Fireworks.default(container);

// Function to generate a random INT between 2 values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event handler for states using SimpleMaps. Allows for grabbing the name of the state selected and
// associating it with the respective state object
simplemaps_usmap.hooks.click_state = function(id){
    currentState = simplemaps_usmap_mapdata.state_specific[id].name;
    currentState = AllStates.find(state => state.name === currentState);
    if (currentState.visited == false) {
        currentState.isVisited();
        visitedStates++;
        console.log(currentState.name + " has been visited, and the value of visited is " + currentState.visited);
        console.log("There are " + visitedStates + " visited states.");
        simplemaps_usmap_mapdata.state_specific[id].color = "#ebb866";
        simplemaps_usmap.refresh();
        if (allVisited()){
            toggleReward();
        }
    }
    else {
        ; // do nothing if user clicks the state again
    }
}

 // Moves to the next state and toggles the popup display based on visibility.
function nextState(){
    
    const state_popup = document.getElementById("state_popup");
    const button = document.getElementById("button");

    if (state_popup.style.display == "none"){
        selectState();
        state_popup.style.display = "inline-block";
        state_popup.innerHTML = currentState.name + "<br>" + currentState.info;
        currentState.isVisited();
        visitedStates++;
        simplemaps_usmap_mapdata.state_specific[currentState.id].color = "#ebb866";
        simplemaps_usmap.refresh();
        button.innerHTML = "Close Window";
    }
    else {
        state_popup.style.display = "none";
        button.innerHTML = "Next State";
    }
}

// Returns true/false if all states have been visited
function allVisited(){
    for (let i = 0; i < 49; i++){
        if (AllStates[i].visited == false){
            return false;
        }
    }
    return true;
}

// Returns true/false if any state has been visited
function anyVisited(){
    for (let i = 0; i < 49; i++){
        if(AllStates[i].visited == true){
            return true;
        }
    }
    return false;
}

function findNeighbor(state){
    console.log("Finding neighbor");
    let options = [];
    // Find all unvisted neighbors of current state
    for (let i = 0; i < state.neighbors.length; i++){
        if(state.neighbors[i].visited == false){
            options.push(state.neighbors[i]);
        }
    }
    // Randomly select a non visited neighbor of the current state
    if (options.length > 0){
        let randomNum = getRandomInt(0, options.length-1);
        return options[randomNum];
    }
    
    return findNeighborNeighbor(state);
}

function findNeighborNeighbor(newState){
    // Find neighbor of a neighbor that has yet to be visited if all current neighbors have been visited
    console.log("Finding neighbor of neighbor");
    let j;
    for(j = 0; j < newState.neighbors.length; j++){
        let k;
        let newerState = newState.neighbors[j];
        for(k = 0; k < newerState.neighbors.length; k++){
            if (newerState.neighbors[k].visited == false){
                return newerState.neighbors[k];
            }
        }
    return findNeighborNeighbor(newState.neighbors[getRandomInt(0, newState.neighbors.length-1)]);
    }
    
}

// Toggles a popup and fireworks to appear upon every state being marked visited
function toggleReward(){
    const reward_popup = document.getElementById("reward_popup");

    if (reward_popup.style.display == "none"){
        reward_popup.style.display = "inline-block";
        reward_popup.innerHTML = "Congradulations!<br>You visited every state!";
        fireworks.start();
    }
    else {
        reward_popup.style.display = "none";
        fireworks.stop();
    }
}

function selectState(){
    console.log(visitedStates);
    
    // If all states have been visited, do the celebration
    if(allVisited() && visitedStates >= 50){
        console.log("All States have been visited!!!!");
        toggleReward();
}
    // If any state has already been visited, move to its neighbor
    else if(anyVisited()){
        currentState.isVisited();
        currentState = findNeighbor(currentState);
    }
    // No state has been visited, randomly select a starting point
    else{
        visitedStates++;
        currentState = AllStates[getRandomInt(0, 49)];
    }
}

















