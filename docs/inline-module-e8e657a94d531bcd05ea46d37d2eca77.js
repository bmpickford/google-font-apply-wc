import { LitElement, css, html, render } from 'lit';

var fonts = [{"family":"ABeeZee"},{"family":"Abel"},{"family":"Abhaya Libre"},{"family":"Abril Fatface"},{"family":"Aclonica"},{"family":"Acme"},{"family":"Actor"},{"family":"Adamina"},{"family":"Advent Pro"},{"family":"Aguafina Script"},{"family":"Akaya Kanadaka"},{"family":"Akaya Telivigala"},{"family":"Akronim"},{"family":"Aladin"},{"family":"Alata"},{"family":"Alatsi"},{"family":"Aldrich"},{"family":"Alef"},{"family":"Alegreya"},{"family":"Alegreya SC"},{"family":"Alegreya Sans"},{"family":"Alegreya Sans SC"},{"family":"Aleo"},{"family":"Alex Brush"},{"family":"Alfa Slab One"},{"family":"Alice"},{"family":"Alike"},{"family":"Alike Angular"},{"family":"Allan"},{"family":"Allerta"},{"family":"Allerta Stencil"},{"family":"Allison"},{"family":"Allura"},{"family":"Almarai"},{"family":"Almendra"},{"family":"Almendra Display"},{"family":"Almendra SC"},{"family":"Alumni Sans"},{"family":"Amarante"},{"family":"Amaranth"},{"family":"Amatic SC"},{"family":"Amethysta"},{"family":"Amiko"},{"family":"Amiri"},{"family":"Amita"},{"family":"Anaheim"},{"family":"Andada Pro"},{"family":"Andika"},{"family":"Andika New Basic"},{"family":"Angkor"},{"family":"Annie Use Your Telescope"},{"family":"Anonymous Pro"},{"family":"Antic"},{"family":"Antic Didone"},{"family":"Antic Slab"},{"family":"Anton"},{"family":"Antonio"},{"family":"Arapey"},{"family":"Arbutus"},{"family":"Arbutus Slab"},{"family":"Architects Daughter"},{"family":"Archivo"},{"family":"Archivo Black"},{"family":"Archivo Narrow"},{"family":"Are You Serious"},{"family":"Aref Ruqaa"},{"family":"Arima Madurai"},{"family":"Arimo"},{"family":"Arizonia"},{"family":"Armata"},{"family":"Arsenal"},{"family":"Artifika"},{"family":"Arvo"},{"family":"Arya"},{"family":"Asap"},{"family":"Asap Condensed"},{"family":"Asar"},{"family":"Asset"},{"family":"Assistant"},{"family":"Astloch"},{"family":"Asul"},{"family":"Athiti"},{"family":"Atkinson Hyperlegible"},{"family":"Atma"},{"family":"Atomic Age"},{"family":"Aubrey"},{"family":"Audiowide"},{"family":"Autour One"},{"family":"Average"},{"family":"Average Sans"},{"family":"Averia Gruesa Libre"},{"family":"Averia Libre"},{"family":"Averia Sans Libre"},{"family":"Averia Serif Libre"},{"family":"Azeret Mono"},{"family":"B612"},{"family":"B612 Mono"},{"family":"Bad Script"},{"family":"Bahiana"},{"family":"Bahianita"},{"family":"Bai Jamjuree"},{"family":"Ballet"},{"family":"Baloo 2"},{"family":"Baloo Bhai 2"},{"family":"Baloo Bhaina 2"},{"family":"Baloo Chettan 2"},{"family":"Baloo Da 2"},{"family":"Baloo Paaji 2"},{"family":"Baloo Tamma 2"},{"family":"Baloo Tammudu 2"},{"family":"Baloo Thambi 2"},{"family":"Balsamiq Sans"},{"family":"Balthazar"},{"family":"Bangers"},{"family":"Barlow"},{"family":"Barlow Condensed"},{"family":"Barlow Semi Condensed"},{"family":"Barriecito"},{"family":"Barrio"},{"family":"Basic"},{"family":"Baskervville"},{"family":"Battambang"},{"family":"Baumans"},{"family":"Bayon"},{"family":"Be Vietnam"},{"family":"Be Vietnam Pro"},{"family":"Bebas Neue"},{"family":"Belgrano"},{"family":"Bellefair"},{"family":"Belleza"},{"family":"Bellota"},{"family":"Bellota Text"},{"family":"BenchNine"},{"family":"Benne"},{"family":"Bentham"},{"family":"Berkshire Swash"},{"family":"Besley"},{"family":"Beth Ellen"},{"family":"Bevan"},{"family":"Big Shoulders Display"},{"family":"Big Shoulders Inline Display"},{"family":"Big Shoulders Inline Text"},{"family":"Big Shoulders Stencil Display"},{"family":"Big Shoulders Stencil Text"},{"family":"Big Shoulders Text"},{"family":"Bigelow Rules"},{"family":"Bigshot One"},{"family":"Bilbo"},{"family":"Bilbo Swash Caps"},{"family":"BioRhyme"},{"family":"BioRhyme Expanded"},{"family":"Birthstone"},{"family":"Birthstone Bounce"},{"family":"Biryani"},{"family":"Bitter"},{"family":"Black And White Picture"},{"family":"Black Han Sans"},{"family":"Black Ops One"},{"family":"Blinker"},{"family":"Bodoni Moda"},{"family":"Bokor"},{"family":"Bona Nova"},{"family":"Bonbon"},{"family":"Bonheur Royale"},{"family":"Boogaloo"},{"family":"Bowlby One"},{"family":"Bowlby One SC"},{"family":"Brawler"},{"family":"Bree Serif"},{"family":"Brygada 1918"},{"family":"Bubblegum Sans"},{"family":"Bubbler One"},{"family":"Buda"},{"family":"Buenard"},{"family":"Bungee"},{"family":"Bungee Hairline"},{"family":"Bungee Inline"},{"family":"Bungee Outline"},{"family":"Bungee Shade"},{"family":"Butcherman"},{"family":"Butterfly Kids"},{"family":"Cabin"},{"family":"Cabin Condensed"},{"family":"Cabin Sketch"},{"family":"Caesar Dressing"},{"family":"Cagliostro"},{"family":"Cairo"},{"family":"Caladea"},{"family":"Calistoga"},{"family":"Calligraffitti"},{"family":"Cambay"},{"family":"Cambo"},{"family":"Candal"},{"family":"Cantarell"},{"family":"Cantata One"},{"family":"Cantora One"},{"family":"Capriola"},{"family":"Caramel"},{"family":"Carattere"},{"family":"Cardo"},{"family":"Carme"},{"family":"Carrois Gothic"},{"family":"Carrois Gothic SC"},{"family":"Carter One"},{"family":"Castoro"},{"family":"Catamaran"},{"family":"Caudex"},{"family":"Caveat"},{"family":"Caveat Brush"},{"family":"Cedarville Cursive"},{"family":"Ceviche One"},{"family":"Chakra Petch"},{"family":"Changa"},{"family":"Changa One"},{"family":"Chango"},{"family":"Charm"},{"family":"Charmonman"},{"family":"Chathura"},{"family":"Chau Philomene One"},{"family":"Chela One"},{"family":"Chelsea Market"},{"family":"Chenla"},{"family":"Cherish"},{"family":"Cherry Cream Soda"},{"family":"Cherry Swash"},{"family":"Chewy"},{"family":"Chicle"},{"family":"Chilanka"},{"family":"Chivo"},{"family":"Chonburi"},{"family":"Cinzel"},{"family":"Cinzel Decorative"},{"family":"Clicker Script"},{"family":"Coda"},{"family":"Coda Caption"},{"family":"Codystar"},{"family":"Coiny"},{"family":"Combo"},{"family":"Comfortaa"},{"family":"Comic Neue"},{"family":"Coming Soon"},{"family":"Commissioner"},{"family":"Concert One"},{"family":"Condiment"},{"family":"Content"},{"family":"Contrail One"},{"family":"Convergence"},{"family":"Cookie"},{"family":"Copse"},{"family":"Corben"},{"family":"Cormorant"},{"family":"Cormorant Garamond"},{"family":"Cormorant Infant"},{"family":"Cormorant SC"},{"family":"Cormorant Unicase"},{"family":"Cormorant Upright"},{"family":"Courgette"},{"family":"Courier Prime"},{"family":"Cousine"},{"family":"Coustard"},{"family":"Covered By Your Grace"},{"family":"Crafty Girls"},{"family":"Creepster"},{"family":"Crete Round"},{"family":"Crimson Pro"},{"family":"Crimson Text"},{"family":"Croissant One"},{"family":"Crushed"},{"family":"Cuprum"},{"family":"Cute Font"},{"family":"Cutive"},{"family":"Cutive Mono"},{"family":"DM Mono"},{"family":"DM Sans"},{"family":"DM Serif Display"},{"family":"DM Serif Text"},{"family":"Damion"},{"family":"Dancing Script"},{"family":"Dangrek"},{"family":"Darker Grotesque"},{"family":"David Libre"},{"family":"Dawning of a New Day"},{"family":"Days One"},{"family":"Dekko"},{"family":"Dela Gothic One"},{"family":"Delius"},{"family":"Delius Swash Caps"},{"family":"Delius Unicase"},{"family":"Della Respira"},{"family":"Denk One"},{"family":"Devonshire"},{"family":"Dhurjati"},{"family":"Didact Gothic"},{"family":"Diplomata"},{"family":"Diplomata SC"},{"family":"Do Hyeon"},{"family":"Dokdo"},{"family":"Domine"},{"family":"Donegal One"},{"family":"Doppio One"},{"family":"Dorsa"},{"family":"Dosis"},{"family":"DotGothic16"},{"family":"Dr Sugiyama"},{"family":"Duru Sans"},{"family":"Dynalight"},{"family":"EB Garamond"},{"family":"Eagle Lake"},{"family":"East Sea Dokdo"},{"family":"Eater"},{"family":"Economica"},{"family":"Eczar"},{"family":"El Messiri"},{"family":"Electrolize"},{"family":"Elsie"},{"family":"Elsie Swash Caps"},{"family":"Emblema One"},{"family":"Emilys Candy"},{"family":"Encode Sans"},{"family":"Encode Sans Condensed"},{"family":"Encode Sans Expanded"},{"family":"Encode Sans SC"},{"family":"Encode Sans Semi Condensed"},{"family":"Encode Sans Semi Expanded"},{"family":"Engagement"},{"family":"Englebert"},{"family":"Enriqueta"},{"family":"Ephesis"},{"family":"Epilogue"},{"family":"Erica One"},{"family":"Esteban"},{"family":"Euphoria Script"},{"family":"Ewert"},{"family":"Exo"},{"family":"Exo 2"},{"family":"Expletus Sans"},{"family":"Explora"},{"family":"Fahkwang"},{"family":"Fanwood Text"},{"family":"Farro"},{"family":"Farsan"},{"family":"Fascinate"},{"family":"Fascinate Inline"},{"family":"Faster One"},{"family":"Fasthand"},{"family":"Fauna One"},{"family":"Faustina"},{"family":"Federant"},{"family":"Federo"},{"family":"Felipa"},{"family":"Fenix"},{"family":"Festive"},{"family":"Finger Paint"},{"family":"Fira Code"},{"family":"Fira Mono"},{"family":"Fira Sans"},{"family":"Fira Sans Condensed"},{"family":"Fira Sans Extra Condensed"},{"family":"Fjalla One"},{"family":"Fjord One"},{"family":"Flamenco"},{"family":"Flavors"},{"family":"Fleur De Leah"},{"family":"Fondamento"},{"family":"Fontdiner Swanky"},{"family":"Forum"},{"family":"Francois One"},{"family":"Frank Ruhl Libre"},{"family":"Fraunces"},{"family":"Freckle Face"},{"family":"Fredericka the Great"},{"family":"Fredoka One"},{"family":"Freehand"},{"family":"Fresca"},{"family":"Frijole"},{"family":"Fruktur"},{"family":"Fugaz One"},{"family":"Fuggles"},{"family":"GFS Didot"},{"family":"GFS Neohellenic"},{"family":"Gabriela"},{"family":"Gaegu"},{"family":"Gafata"},{"family":"Galada"},{"family":"Galdeano"},{"family":"Galindo"},{"family":"Gamja Flower"},{"family":"Gayathri"},{"family":"Gelasio"},{"family":"Gemunu Libre"},{"family":"Gentium Basic"},{"family":"Gentium Book Basic"},{"family":"Geo"},{"family":"Georama"},{"family":"Geostar"},{"family":"Geostar Fill"},{"family":"Germania One"},{"family":"Gideon Roman"},{"family":"Gidugu"},{"family":"Gilda Display"},{"family":"Girassol"},{"family":"Give You Glory"},{"family":"Glass Antiqua"},{"family":"Glegoo"},{"family":"Gloria Hallelujah"},{"family":"Glory"},{"family":"Gluten"},{"family":"Goblin One"},{"family":"Gochi Hand"},{"family":"Goldman"},{"family":"Gorditas"},{"family":"Gothic A1"},{"family":"Gotu"},{"family":"Goudy Bookletter 1911"},{"family":"Gowun Batang"},{"family":"Gowun Dodum"},{"family":"Graduate"},{"family":"Grand Hotel"},{"family":"Grandstander"},{"family":"Gravitas One"},{"family":"Great Vibes"},{"family":"Grechen Fuemen"},{"family":"Grenze"},{"family":"Grenze Gotisch"},{"family":"Grey Qo"},{"family":"Griffy"},{"family":"Gruppo"},{"family":"Gudea"},{"family":"Gugi"},{"family":"Gupter"},{"family":"Gurajada"},{"family":"Habibi"},{"family":"Hachi Maru Pop"},{"family":"Hahmlet"},{"family":"Halant"},{"family":"Hammersmith One"},{"family":"Hanalei"},{"family":"Hanalei Fill"},{"family":"Handlee"},{"family":"Hanuman"},{"family":"Happy Monkey"},{"family":"Harmattan"},{"family":"Headland One"},{"family":"Heebo"},{"family":"Henny Penny"},{"family":"Hepta Slab"},{"family":"Herr Von Muellerhoff"},{"family":"Hi Melody"},{"family":"Hina Mincho"},{"family":"Hind"},{"family":"Hind Guntur"},{"family":"Hind Madurai"},{"family":"Hind Siliguri"},{"family":"Hind Vadodara"},{"family":"Holtwood One SC"},{"family":"Homemade Apple"},{"family":"Homenaje"},{"family":"IBM Plex Mono"},{"family":"IBM Plex Sans"},{"family":"IBM Plex Sans Arabic"},{"family":"IBM Plex Sans Condensed"},{"family":"IBM Plex Sans Devanagari"},{"family":"IBM Plex Sans Hebrew"},{"family":"IBM Plex Sans KR"},{"family":"IBM Plex Sans Thai"},{"family":"IBM Plex Sans Thai Looped"},{"family":"IBM Plex Serif"},{"family":"IM Fell DW Pica"},{"family":"IM Fell DW Pica SC"},{"family":"IM Fell Double Pica"},{"family":"IM Fell Double Pica SC"},{"family":"IM Fell English"},{"family":"IM Fell English SC"},{"family":"IM Fell French Canon"},{"family":"IM Fell French Canon SC"},{"family":"IM Fell Great Primer"},{"family":"IM Fell Great Primer SC"},{"family":"Ibarra Real Nova"},{"family":"Iceberg"},{"family":"Iceland"},{"family":"Imbue"},{"family":"Imprima"},{"family":"Inconsolata"},{"family":"Inder"},{"family":"Indie Flower"},{"family":"Inika"},{"family":"Inknut Antiqua"},{"family":"Inria Sans"},{"family":"Inria Serif"},{"family":"Inter"},{"family":"Irish Grover"},{"family":"Istok Web"},{"family":"Italiana"},{"family":"Italianno"},{"family":"Itim"},{"family":"Jacques Francois"},{"family":"Jacques Francois Shadow"},{"family":"Jaldi"},{"family":"JetBrains Mono"},{"family":"Jim Nightshade"},{"family":"Jockey One"},{"family":"Jolly Lodger"},{"family":"Jomhuria"},{"family":"Jomolhari"},{"family":"Josefin Sans"},{"family":"Josefin Slab"},{"family":"Jost"},{"family":"Joti One"},{"family":"Jua"},{"family":"Judson"},{"family":"Julee"},{"family":"Julius Sans One"},{"family":"Junge"},{"family":"Jura"},{"family":"Just Another Hand"},{"family":"Just Me Again Down Here"},{"family":"K2D"},{"family":"Kadwa"},{"family":"Kaisei Decol"},{"family":"Kaisei HarunoUmi"},{"family":"Kaisei Opti"},{"family":"Kaisei Tokumin"},{"family":"Kalam"},{"family":"Kameron"},{"family":"Kanit"},{"family":"Kantumruy"},{"family":"Karantina"},{"family":"Karla"},{"family":"Karma"},{"family":"Katibeh"},{"family":"Kaushan Script"},{"family":"Kavivanar"},{"family":"Kavoon"},{"family":"Kdam Thmor"},{"family":"Keania One"},{"family":"Kelly Slab"},{"family":"Kenia"},{"family":"Khand"},{"family":"Khmer"},{"family":"Khula"},{"family":"Kirang Haerang"},{"family":"Kite One"},{"family":"Kiwi Maru"},{"family":"Klee One"},{"family":"Knewave"},{"family":"KoHo"},{"family":"Kodchasan"},{"family":"Koh Santepheap"},{"family":"Kosugi"},{"family":"Kosugi Maru"},{"family":"Kotta One"},{"family":"Koulen"},{"family":"Kranky"},{"family":"Kreon"},{"family":"Kristi"},{"family":"Krona One"},{"family":"Krub"},{"family":"Kufam"},{"family":"Kulim Park"},{"family":"Kumar One"},{"family":"Kumar One Outline"},{"family":"Kumbh Sans"},{"family":"Kurale"},{"family":"La Belle Aurore"},{"family":"Lacquer"},{"family":"Laila"},{"family":"Lakki Reddy"},{"family":"Lalezar"},{"family":"Lancelot"},{"family":"Langar"},{"family":"Lateef"},{"family":"Lato"},{"family":"League Script"},{"family":"Leckerli One"},{"family":"Ledger"},{"family":"Lekton"},{"family":"Lemon"},{"family":"Lemonada"},{"family":"Lexend"},{"family":"Lexend Deca"},{"family":"Lexend Exa"},{"family":"Lexend Giga"},{"family":"Lexend Mega"},{"family":"Lexend Peta"},{"family":"Lexend Tera"},{"family":"Lexend Zetta"},{"family":"Libre Barcode 128"},{"family":"Libre Barcode 128 Text"},{"family":"Libre Barcode 39"},{"family":"Libre Barcode 39 Extended"},{"family":"Libre Barcode 39 Extended Text"},{"family":"Libre Barcode 39 Text"},{"family":"Libre Barcode EAN13 Text"},{"family":"Libre Baskerville"},{"family":"Libre Caslon Display"},{"family":"Libre Caslon Text"},{"family":"Libre Franklin"},{"family":"Life Savers"},{"family":"Lilita One"},{"family":"Lily Script One"},{"family":"Limelight"},{"family":"Linden Hill"},{"family":"Literata"},{"family":"Liu Jian Mao Cao"},{"family":"Livvic"},{"family":"Lobster"},{"family":"Lobster Two"},{"family":"Londrina Outline"},{"family":"Londrina Shadow"},{"family":"Londrina Sketch"},{"family":"Londrina Solid"},{"family":"Long Cang"},{"family":"Lora"},{"family":"Love Ya Like A Sister"},{"family":"Loved by the King"},{"family":"Lovers Quarrel"},{"family":"Luckiest Guy"},{"family":"Lusitana"},{"family":"Lustria"},{"family":"M PLUS 1p"},{"family":"M PLUS Rounded 1c"},{"family":"Ma Shan Zheng"},{"family":"Macondo"},{"family":"Macondo Swash Caps"},{"family":"Mada"},{"family":"Magra"},{"family":"Maiden Orange"},{"family":"Maitree"},{"family":"Major Mono Display"},{"family":"Mako"},{"family":"Mali"},{"family":"Mallanna"},{"family":"Mandali"},{"family":"Manjari"},{"family":"Manrope"},{"family":"Mansalva"},{"family":"Manuale"},{"family":"Marcellus"},{"family":"Marcellus SC"},{"family":"Marck Script"},{"family":"Margarine"},{"family":"Markazi Text"},{"family":"Marko One"},{"family":"Marmelad"},{"family":"Martel"},{"family":"Martel Sans"},{"family":"Marvel"},{"family":"Mate"},{"family":"Mate SC"},{"family":"Maven Pro"},{"family":"McLaren"},{"family":"Meddon"},{"family":"MedievalSharp"},{"family":"Medula One"},{"family":"Meera Inimai"},{"family":"Megrim"},{"family":"Meie Script"},{"family":"Merienda"},{"family":"Merienda One"},{"family":"Merriweather"},{"family":"Merriweather Sans"},{"family":"Metal"},{"family":"Metal Mania"},{"family":"Metamorphous"},{"family":"Metrophobic"},{"family":"Michroma"},{"family":"Milonga"},{"family":"Miltonian"},{"family":"Miltonian Tattoo"},{"family":"Mina"},{"family":"Miniver"},{"family":"Miriam Libre"},{"family":"Mirza"},{"family":"Miss Fajardose"},{"family":"Mitr"},{"family":"Modak"},{"family":"Modern Antiqua"},{"family":"Mogra"},{"family":"Molengo"},{"family":"Molle"},{"family":"Monda"},{"family":"Monofett"},{"family":"Monoton"},{"family":"Monsieur La Doulaise"},{"family":"Montaga"},{"family":"MonteCarlo"},{"family":"Montez"},{"family":"Montserrat"},{"family":"Montserrat Alternates"},{"family":"Montserrat Subrayada"},{"family":"Moul"},{"family":"Moulpali"},{"family":"Mountains of Christmas"},{"family":"Mouse Memoirs"},{"family":"Mr Bedfort"},{"family":"Mr Dafoe"},{"family":"Mr De Haviland"},{"family":"Mrs Saint Delafield"},{"family":"Mrs Sheppards"},{"family":"Mukta"},{"family":"Mukta Mahee"},{"family":"Mukta Malar"},{"family":"Mukta Vaani"},{"family":"Mulish"},{"family":"MuseoModerno"},{"family":"Mystery Quest"},{"family":"NTR"},{"family":"Nanum Brush Script"},{"family":"Nanum Gothic"},{"family":"Nanum Gothic Coding"},{"family":"Nanum Myeongjo"},{"family":"Nanum Pen Script"},{"family":"Nerko One"},{"family":"Neucha"},{"family":"Neuton"},{"family":"New Rocker"},{"family":"New Tegomin"},{"family":"News Cycle"},{"family":"Newsreader"},{"family":"Niconne"},{"family":"Niramit"},{"family":"Nixie One"},{"family":"Nobile"},{"family":"Nokora"},{"family":"Norican"},{"family":"Nosifer"},{"family":"Notable"},{"family":"Nothing You Could Do"},{"family":"Noticia Text"},{"family":"Noto Kufi Arabic"},{"family":"Noto Music"},{"family":"Noto Naskh Arabic"},{"family":"Noto Nastaliq Urdu"},{"family":"Noto Rashi Hebrew"},{"family":"Noto Sans"},{"family":"Noto Sans Adlam"},{"family":"Noto Sans Adlam Unjoined"},{"family":"Noto Sans Anatolian Hieroglyphs"},{"family":"Noto Sans Arabic"},{"family":"Noto Sans Armenian"},{"family":"Noto Sans Avestan"},{"family":"Noto Sans Balinese"},{"family":"Noto Sans Bamum"},{"family":"Noto Sans Bassa Vah"},{"family":"Noto Sans Batak"},{"family":"Noto Sans Bengali"},{"family":"Noto Sans Bhaiksuki"},{"family":"Noto Sans Brahmi"},{"family":"Noto Sans Buginese"},{"family":"Noto Sans Buhid"},{"family":"Noto Sans Canadian Aboriginal"},{"family":"Noto Sans Carian"},{"family":"Noto Sans Caucasian Albanian"},{"family":"Noto Sans Chakma"},{"family":"Noto Sans Cham"},{"family":"Noto Sans Cherokee"},{"family":"Noto Sans Coptic"},{"family":"Noto Sans Cuneiform"},{"family":"Noto Sans Cypriot"},{"family":"Noto Sans Deseret"},{"family":"Noto Sans Devanagari"},{"family":"Noto Sans Display"},{"family":"Noto Sans Duployan"},{"family":"Noto Sans Egyptian Hieroglyphs"},{"family":"Noto Sans Elbasan"},{"family":"Noto Sans Elymaic"},{"family":"Noto Sans Georgian"},{"family":"Noto Sans Glagolitic"},{"family":"Noto Sans Gothic"},{"family":"Noto Sans Grantha"},{"family":"Noto Sans Gujarati"},{"family":"Noto Sans Gunjala Gondi"},{"family":"Noto Sans Gurmukhi"},{"family":"Noto Sans HK"},{"family":"Noto Sans Hanifi Rohingya"},{"family":"Noto Sans Hanunoo"},{"family":"Noto Sans Hatran"},{"family":"Noto Sans Hebrew"},{"family":"Noto Sans Imperial Aramaic"},{"family":"Noto Sans Indic Siyaq Numbers"},{"family":"Noto Sans Inscriptional Pahlavi"},{"family":"Noto Sans Inscriptional Parthian"},{"family":"Noto Sans JP"},{"family":"Noto Sans Javanese"},{"family":"Noto Sans KR"},{"family":"Noto Sans Kaithi"},{"family":"Noto Sans Kannada"},{"family":"Noto Sans Kayah Li"},{"family":"Noto Sans Kharoshthi"},{"family":"Noto Sans Khmer"},{"family":"Noto Sans Khojki"},{"family":"Noto Sans Khudawadi"},{"family":"Noto Sans Lao"},{"family":"Noto Sans Lepcha"},{"family":"Noto Sans Limbu"},{"family":"Noto Sans Linear A"},{"family":"Noto Sans Linear B"},{"family":"Noto Sans Lisu"},{"family":"Noto Sans Lycian"},{"family":"Noto Sans Lydian"},{"family":"Noto Sans Mahajani"},{"family":"Noto Sans Malayalam"},{"family":"Noto Sans Mandaic"},{"family":"Noto Sans Manichaean"},{"family":"Noto Sans Marchen"},{"family":"Noto Sans Masaram Gondi"},{"family":"Noto Sans Math"},{"family":"Noto Sans Mayan Numerals"},{"family":"Noto Sans Medefaidrin"},{"family":"Noto Sans Meroitic"},{"family":"Noto Sans Miao"},{"family":"Noto Sans Modi"},{"family":"Noto Sans Mongolian"},{"family":"Noto Sans Mono"},{"family":"Noto Sans Mro"},{"family":"Noto Sans Multani"},{"family":"Noto Sans Myanmar"},{"family":"Noto Sans N Ko"},{"family":"Noto Sans Nabataean"},{"family":"Noto Sans New Tai Lue"},{"family":"Noto Sans Newa"},{"family":"Noto Sans Nushu"},{"family":"Noto Sans Ogham"},{"family":"Noto Sans Ol Chiki"},{"family":"Noto Sans Old Hungarian"},{"family":"Noto Sans Old Italic"},{"family":"Noto Sans Old North Arabian"},{"family":"Noto Sans Old Permic"},{"family":"Noto Sans Old Persian"},{"family":"Noto Sans Old Sogdian"},{"family":"Noto Sans Old South Arabian"},{"family":"Noto Sans Old Turkic"},{"family":"Noto Sans Oriya"},{"family":"Noto Sans Osage"},{"family":"Noto Sans Osmanya"},{"family":"Noto Sans Pahawh Hmong"},{"family":"Noto Sans Palmyrene"},{"family":"Noto Sans Pau Cin Hau"},{"family":"Noto Sans Phags Pa"},{"family":"Noto Sans Phoenician"},{"family":"Noto Sans Psalter Pahlavi"},{"family":"Noto Sans Rejang"},{"family":"Noto Sans Runic"},{"family":"Noto Sans SC"},{"family":"Noto Sans Samaritan"},{"family":"Noto Sans Saurashtra"},{"family":"Noto Sans Sharada"},{"family":"Noto Sans Shavian"},{"family":"Noto Sans Siddham"},{"family":"Noto Sans Sinhala"},{"family":"Noto Sans Sogdian"},{"family":"Noto Sans Sora Sompeng"},{"family":"Noto Sans Soyombo"},{"family":"Noto Sans Sundanese"},{"family":"Noto Sans Syloti Nagri"},{"family":"Noto Sans Symbols"},{"family":"Noto Sans Symbols 2"},{"family":"Noto Sans Syriac"},{"family":"Noto Sans TC"},{"family":"Noto Sans Tagalog"},{"family":"Noto Sans Tagbanwa"},{"family":"Noto Sans Tai Le"},{"family":"Noto Sans Tai Tham"},{"family":"Noto Sans Tai Viet"},{"family":"Noto Sans Takri"},{"family":"Noto Sans Tamil"},{"family":"Noto Sans Tamil Supplement"},{"family":"Noto Sans Telugu"},{"family":"Noto Sans Thaana"},{"family":"Noto Sans Thai"},{"family":"Noto Sans Thai Looped"},{"family":"Noto Sans Tifinagh"},{"family":"Noto Sans Tirhuta"},{"family":"Noto Sans Ugaritic"},{"family":"Noto Sans Vai"},{"family":"Noto Sans Wancho"},{"family":"Noto Sans Warang Citi"},{"family":"Noto Sans Yi"},{"family":"Noto Sans Zanabazar Square"},{"family":"Noto Serif"},{"family":"Noto Serif Ahom"},{"family":"Noto Serif Armenian"},{"family":"Noto Serif Balinese"},{"family":"Noto Serif Bengali"},{"family":"Noto Serif Devanagari"},{"family":"Noto Serif Display"},{"family":"Noto Serif Dogra"},{"family":"Noto Serif Ethiopic"},{"family":"Noto Serif Georgian"},{"family":"Noto Serif Grantha"},{"family":"Noto Serif Gujarati"},{"family":"Noto Serif Gurmukhi"},{"family":"Noto Serif Hebrew"},{"family":"Noto Serif JP"},{"family":"Noto Serif KR"},{"family":"Noto Serif Kannada"},{"family":"Noto Serif Khmer"},{"family":"Noto Serif Lao"},{"family":"Noto Serif Malayalam"},{"family":"Noto Serif Myanmar"},{"family":"Noto Serif Nyiakeng Puachue Hmong"},{"family":"Noto Serif SC"},{"family":"Noto Serif Sinhala"},{"family":"Noto Serif TC"},{"family":"Noto Serif Tamil"},{"family":"Noto Serif Tangut"},{"family":"Noto Serif Telugu"},{"family":"Noto Serif Thai"},{"family":"Noto Serif Tibetan"},{"family":"Noto Serif Yezidi"},{"family":"Noto Traditional Nushu"},{"family":"Nova Cut"},{"family":"Nova Flat"},{"family":"Nova Mono"},{"family":"Nova Oval"},{"family":"Nova Round"},{"family":"Nova Script"},{"family":"Nova Slim"},{"family":"Nova Square"},{"family":"Numans"},{"family":"Nunito"},{"family":"Nunito Sans"},{"family":"Odibee Sans"},{"family":"Odor Mean Chey"},{"family":"Offside"},{"family":"Oi"},{"family":"Old Standard TT"},{"family":"Oldenburg"},{"family":"Oleo Script"},{"family":"Oleo Script Swash Caps"},{"family":"Open Sans"},{"family":"Open Sans Condensed"},{"family":"Oranienbaum"},{"family":"Orbitron"},{"family":"Oregano"},{"family":"Orelega One"},{"family":"Orienta"},{"family":"Original Surfer"},{"family":"Oswald"},{"family":"Otomanopee One"},{"family":"Over the Rainbow"},{"family":"Overlock"},{"family":"Overlock SC"},{"family":"Overpass"},{"family":"Overpass Mono"},{"family":"Ovo"},{"family":"Oxanium"},{"family":"Oxygen"},{"family":"Oxygen Mono"},{"family":"PT Mono"},{"family":"PT Sans"},{"family":"PT Sans Caption"},{"family":"PT Sans Narrow"},{"family":"PT Serif"},{"family":"PT Serif Caption"},{"family":"Pacifico"},{"family":"Padauk"},{"family":"Palanquin"},{"family":"Palanquin Dark"},{"family":"Palette Mosaic"},{"family":"Pangolin"},{"family":"Paprika"},{"family":"Parisienne"},{"family":"Passero One"},{"family":"Passion One"},{"family":"Pathway Gothic One"},{"family":"Patrick Hand"},{"family":"Patrick Hand SC"},{"family":"Pattaya"},{"family":"Patua One"},{"family":"Pavanam"},{"family":"Paytone One"},{"family":"Peddana"},{"family":"Peralta"},{"family":"Permanent Marker"},{"family":"Petit Formal Script"},{"family":"Petrona"},{"family":"Philosopher"},{"family":"Piazzolla"},{"family":"Piedra"},{"family":"Pinyon Script"},{"family":"Pirata One"},{"family":"Plaster"},{"family":"Play"},{"family":"Playball"},{"family":"Playfair Display"},{"family":"Playfair Display SC"},{"family":"Podkova"},{"family":"Poiret One"},{"family":"Poller One"},{"family":"Poly"},{"family":"Pompiere"},{"family":"Pontano Sans"},{"family":"Poor Story"},{"family":"Poppins"},{"family":"Port Lligat Sans"},{"family":"Port Lligat Slab"},{"family":"Potta One"},{"family":"Pragati Narrow"},{"family":"Prata"},{"family":"Preahvihear"},{"family":"Press Start 2P"},{"family":"Pridi"},{"family":"Princess Sofia"},{"family":"Prociono"},{"family":"Prompt"},{"family":"Prosto One"},{"family":"Proza Libre"},{"family":"Public Sans"},{"family":"Puritan"},{"family":"Purple Purse"},{"family":"Qahiri"},{"family":"Quando"},{"family":"Quantico"},{"family":"Quattrocento"},{"family":"Quattrocento Sans"},{"family":"Questrial"},{"family":"Quicksand"},{"family":"Quintessential"},{"family":"Qwigley"},{"family":"Racing Sans One"},{"family":"Radley"},{"family":"Rajdhani"},{"family":"Rakkas"},{"family":"Raleway"},{"family":"Raleway Dots"},{"family":"Ramabhadra"},{"family":"Ramaraja"},{"family":"Rambla"},{"family":"Rammetto One"},{"family":"Rampart One"},{"family":"Ranchers"},{"family":"Rancho"},{"family":"Ranga"},{"family":"Rasa"},{"family":"Rationale"},{"family":"Ravi Prakash"},{"family":"Recursive"},{"family":"Red Hat Display"},{"family":"Red Hat Text"},{"family":"Red Rose"},{"family":"Redressed"},{"family":"Reem Kufi"},{"family":"Reenie Beanie"},{"family":"Reggae One"},{"family":"Revalia"},{"family":"Rhodium Libre"},{"family":"Ribeye"},{"family":"Ribeye Marrow"},{"family":"Righteous"},{"family":"Risque"},{"family":"Roboto"},{"family":"Roboto Condensed"},{"family":"Roboto Mono"},{"family":"Roboto Slab"},{"family":"Rochester"},{"family":"Rock Salt"},{"family":"RocknRoll One"},{"family":"Rokkitt"},{"family":"Romanesco"},{"family":"Ropa Sans"},{"family":"Rosario"},{"family":"Rosarivo"},{"family":"Rouge Script"},{"family":"Rowdies"},{"family":"Rozha One"},{"family":"Rubik"},{"family":"Rubik Beastly"},{"family":"Rubik Mono One"},{"family":"Ruda"},{"family":"Rufina"},{"family":"Ruge Boogie"},{"family":"Ruluko"},{"family":"Rum Raisin"},{"family":"Ruslan Display"},{"family":"Russo One"},{"family":"Ruthie"},{"family":"Rye"},{"family":"STIX Two Text"},{"family":"Sacramento"},{"family":"Sahitya"},{"family":"Sail"},{"family":"Saira"},{"family":"Saira Condensed"},{"family":"Saira Extra Condensed"},{"family":"Saira Semi Condensed"},{"family":"Saira Stencil One"},{"family":"Salsa"},{"family":"Sanchez"},{"family":"Sancreek"},{"family":"Sansita"},{"family":"Sansita Swashed"},{"family":"Sarabun"},{"family":"Sarala"},{"family":"Sarina"},{"family":"Sarpanch"},{"family":"Satisfy"},{"family":"Sawarabi Gothic"},{"family":"Sawarabi Mincho"},{"family":"Scada"},{"family":"Scheherazade"},{"family":"Scheherazade New"},{"family":"Schoolbell"},{"family":"Scope One"},{"family":"Seaweed Script"},{"family":"Secular One"},{"family":"Sedgwick Ave"},{"family":"Sedgwick Ave Display"},{"family":"Sen"},{"family":"Sevillana"},{"family":"Seymour One"},{"family":"Shadows Into Light"},{"family":"Shadows Into Light Two"},{"family":"Shanti"},{"family":"Share"},{"family":"Share Tech"},{"family":"Share Tech Mono"},{"family":"Shippori Mincho"},{"family":"Shippori Mincho B1"},{"family":"Shojumaru"},{"family":"Short Stack"},{"family":"Shrikhand"},{"family":"Siemreap"},{"family":"Sigmar One"},{"family":"Signika"},{"family":"Signika Negative"},{"family":"Simonetta"},{"family":"Single Day"},{"family":"Sintony"},{"family":"Sirin Stencil"},{"family":"Six Caps"},{"family":"Skranji"},{"family":"Slabo 13px"},{"family":"Slabo 27px"},{"family":"Slackey"},{"family":"Smokum"},{"family":"Smythe"},{"family":"Sniglet"},{"family":"Snippet"},{"family":"Snowburst One"},{"family":"Sofadi One"},{"family":"Sofia"},{"family":"Solway"},{"family":"Song Myung"},{"family":"Sonsie One"},{"family":"Sora"},{"family":"Sorts Mill Goudy"},{"family":"Source Code Pro"},{"family":"Source Sans Pro"},{"family":"Source Serif Pro"},{"family":"Space Grotesk"},{"family":"Space Mono"},{"family":"Spartan"},{"family":"Special Elite"},{"family":"Spectral"},{"family":"Spectral SC"},{"family":"Spicy Rice"},{"family":"Spinnaker"},{"family":"Spirax"},{"family":"Squada One"},{"family":"Sree Krushnadevaraya"},{"family":"Sriracha"},{"family":"Srisakdi"},{"family":"Staatliches"},{"family":"Stalemate"},{"family":"Stalinist One"},{"family":"Stardos Stencil"},{"family":"Stick"},{"family":"Stick No Bills"},{"family":"Stint Ultra Condensed"},{"family":"Stint Ultra Expanded"},{"family":"Stoke"},{"family":"Strait"},{"family":"Style Script"},{"family":"Stylish"},{"family":"Sue Ellen Francisco"},{"family":"Suez One"},{"family":"Sulphur Point"},{"family":"Sumana"},{"family":"Sunflower"},{"family":"Sunshiney"},{"family":"Supermercado One"},{"family":"Sura"},{"family":"Suranna"},{"family":"Suravaram"},{"family":"Suwannaphum"},{"family":"Swanky and Moo Moo"},{"family":"Syncopate"},{"family":"Syne"},{"family":"Syne Mono"},{"family":"Syne Tactile"},{"family":"Tajawal"},{"family":"Tangerine"},{"family":"Taprom"},{"family":"Tauri"},{"family":"Taviraj"},{"family":"Teko"},{"family":"Telex"},{"family":"Tenali Ramakrishna"},{"family":"Tenor Sans"},{"family":"Text Me One"},{"family":"Texturina"},{"family":"Thasadith"},{"family":"The Girl Next Door"},{"family":"Tienne"},{"family":"Tillana"},{"family":"Timmana"},{"family":"Tinos"},{"family":"Titan One"},{"family":"Titillium Web"},{"family":"Tomorrow"},{"family":"Tourney"},{"family":"Trade Winds"},{"family":"Train One"},{"family":"Trirong"},{"family":"Trispace"},{"family":"Trocchi"},{"family":"Trochut"},{"family":"Truculenta"},{"family":"Trykker"},{"family":"Tulpen One"},{"family":"Turret Road"},{"family":"Ubuntu"},{"family":"Ubuntu Condensed"},{"family":"Ubuntu Mono"},{"family":"Uchen"},{"family":"Ultra"},{"family":"Uncial Antiqua"},{"family":"Underdog"},{"family":"Unica One"},{"family":"UnifrakturCook"},{"family":"UnifrakturMaguntia"},{"family":"Unkempt"},{"family":"Unlock"},{"family":"Unna"},{"family":"Urbanist"},{"family":"VT323"},{"family":"Vampiro One"},{"family":"Varela"},{"family":"Varela Round"},{"family":"Varta"},{"family":"Vast Shadow"},{"family":"Vesper Libre"},{"family":"Viaoda Libre"},{"family":"Vibes"},{"family":"Vibur"},{"family":"Vidaloka"},{"family":"Viga"},{"family":"Voces"},{"family":"Volkhov"},{"family":"Vollkorn"},{"family":"Vollkorn SC"},{"family":"Voltaire"},{"family":"Waiting for the Sunrise"},{"family":"Wallpoet"},{"family":"Walter Turncoat"},{"family":"Warnes"},{"family":"Wellfleet"},{"family":"Wendy One"},{"family":"WindSong"},{"family":"Wire One"},{"family":"Work Sans"},{"family":"Xanh Mono"},{"family":"Yaldevi"},{"family":"Yanone Kaffeesatz"},{"family":"Yantramanav"},{"family":"Yatra One"},{"family":"Yellowtail"},{"family":"Yeon Sung"},{"family":"Yeseva One"},{"family":"Yesteryear"},{"family":"Yomogi"},{"family":"Yrsa"},{"family":"Yusei Magic"},{"family":"ZCOOL KuaiLe"},{"family":"ZCOOL QingKe HuangYou"},{"family":"ZCOOL XiaoWei"},{"family":"Zen Dots"},{"family":"Zen Loop"},{"family":"Zen Tokyo Zoo"},{"family":"Zeyada"},{"family":"Zhi Mang Xing"},{"family":"Zilla Slab"},{"family":"Zilla Slab Highlight"}];

class GfontApply extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;

        --color-border: hsl(206 81.9% 65.3%);
        --color-bg: hsl(225 60.0% 99.4%);

        --color-list-hover: hsl(208 77.5% 76.9%);
        --color-list-odd: hsl(210 100% 98%);
        --color-list-even: white;
      }

      form {
        display: block;
        margin: auto;
        font-family: monospace !important;
        width: 350px;
        background-color: var(--color-bg);
      }

      #font-family-select {
        margin-top: 8px;
        position: relative;
        padding: 8px 12px;
        border-radius: 8px;
        border-style: solid;
        border-width: 1px;
        appearance: none;
      }

      #font-family-select:focus {
        border-color: var(--color-border);
      }

      #font-family-select[data-typing='true'] {
        border-radius: 8px 8px 0 0;
      }

      label,
      #font-family-select {
        width: 100%;
      }

      ul {
        width: 374px;
        position: relative;
        margin: 0;
        padding: 0;
        top: 0;
        left: -2px;
        list-style-type: none;
        border-width: 3px;
        border-style: solid;
        border-color: var(--color-border);
        border-radius: 0 0 8px 8px;
        border-top: unset;
      }

      li {
        padding: 12px;
        cursor: pointer;
      }

      li:nth-child(odd) {
        background-color: var(--color-list-odd);
      }

      li:nth-child(even) {
        background-color: var(--color-list-even);
      }

      li:hover,
      li:active,
      li:focus {
        background-color: var(--color-list-hover);
      }
    `;
  }


  static get properties() {
    return {
      matches: { type: Array, attribute: false },
      fontFamily: { type: String, attribute: false },
      fontsDownloaded: { type: Array, attribute: false },
      fonts: { type: Array },
      maxResults: { type: Number },
      apiKey: { type: String },
      show: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.fonts = [];
    this.matches = [];
    this.fontsDownloaded = [];
    this.fontFamily = '';
    this.maxResults = 4;
    this.show = true;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.fonts || this.fonts.length === 0) {
      this.__getFonts();
    }
  }

  async __getFonts() {
    if (!this.apiKey) {
      throw new Error('No API key supplied');
    }

    const response = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${this.apiKey}`
    );
    const _data = await response.json();
    this.fonts = _data.items;
  }

  render() {
    return html`
      <form
        @blur=${() => {
          this.matches = [];
        }}
        style=${!this.show && `display: none`}
      >
        <label for="font-family-select">Search for you favourite font</label
        ><br />
        <input
          id="font-family-select"
          name="font-family-select"
          aria-label="Type the font you want to search for"
          type="text"
          ?disabled=${this.fonts.length === 0}
          data-typing=${this.matches.length > 0}
          .value=${this.fontFamily}
          @keyup=${this._onInputChange}
        />
        ${this.matches.length > 0 ? this.renderMatches() : ''}
      </form>
      <slot></slot>
    `;
  }

  renderMatches() {
    return html`<ul>
      ${this.matches.map(
        match => html` <li
          tabindex="0"
          style=${`font-family: '${match.family}'`}
          id=${encodeURIComponent(match.family)}
          @keyup=${e => {
            if (e.keyCode === 13) this._onFontFamilyClick(match);
          }}
          @click=${() => this._onFontFamilyClick(match)}
          .value=${match.family}
        >
          ${match.family}
        </li>`
      )}
    </ul>`;
  }

  _onInputChange(e) {
    if (!this.fonts) {
      throw new Error('Font list still downloading', this.fonts);
    }
    const _value = e.target.value;
    const _matches = this.fonts.filter(d => {
      const regex = new RegExp(`^${_value}`, 'gi');
      return d.family.match(regex);
    });

    this.matches = _matches.slice(0, this.maxResults);

    for (const _match of this.matches) {
      const family = encodeURIComponent(_match.family);
      if (!this.fontsDownloaded.includes(family)) {
        this._downloadFont(family, family);
        this.fontsDownloaded.push(family);
      }
    }
  }

  _onFontFamilyClick(match) {
    if (!match) {
      throw new Error('No value found for selected font');
    }

    this.matches = [];
    this.fontFamily = match.family;
    this._downloadFont(match.family);
    this.style.fontFamily = `${match.family}`;
  }

  _downloadFont(family, text) {
    const linkEl = document.createElement('link');
    let cssUrl = `https://fonts.googleapis.com/css2?family=${family}`;
    if (text) {
      cssUrl += `&text=${text}`;
    }
    linkEl.rel = 'stylesheet';
    linkEl.href = cssUrl;
    this.appendChild(linkEl);
  }
}

window.customElements.define('gfont-apply', GfontApply);

render(
      html`
        <gfont-apply .fonts=${fonts}>
          <h1>HTML Ipsum Presents</h1>

				<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

				<h2>Header Level 2</h2>

				<ol>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ol>

				<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

				<h3>Header Level 3</h3>

				<ul>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ul>

				<pre><code>
				#header h1 a {
				  display: block;
				  width: 300px;
				  height: 80px;
				}
				</code></pre>
        </gfont-apply>
      `,
      document.querySelector('#demo')
    );
