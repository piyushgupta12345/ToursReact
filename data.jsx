const data = [
    {
        id: 1,
        location: 'Agra',
        description: 'Agras notable historical period began during Sikandar Lodis reign, but the golden age of the city began with the Mughals. Agra was the foremost city of the Indian subcontinent and the capital of the Mughal Empire under Mughal emperors Babur, Humayun, Akbar, Jahangir and Shah Jahan. Under Mughal rule, Agra became a centre for learning, arts, commerce, and religion, and saw the construction of the Agra Fort, Sikandra and Agras most prized monument, the Taj Mahal, built by Shah Jahan as a mausoleum for his favourite empress. With the decline of the Mughal empire in the late 18th century, the city fell successively first to Marathas and later to the East India Company. After Independence, Agra has developed into an industrial town, with a booming tourism industry, along with footwear, leather and other manufacturing. The Taj Mahal and the Agra Fort are UNESCO World Heritage Sites. The city features mild winters, hot and dry summers and a monsoon season, and is famous for its Mughlai cuisine. Agra is included on the Golden Triangle tourist circuit, along with Delhi and Jaipur; and the Uttar Pradesh Heritage Arc, a tourist circuit of Uttar Pradesh, along with Lucknow and Varanasi.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1280px-Taj_Mahal%2C_Agra%2C_India.jpg',
        price: 12978,
    },
    {
        id: 2,
        location: 'Jaipur',
        description: 'As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Jaipur is also known as the Pink City, due to the dominant colour scheme of its buildings. It is also known as the Paris of India, and C. V. Raman called it the Island of Glory. It is located 268 km (167 miles) from the national capital New Delhi. Jaipur was founded in 1727 by the Kachhwaha Rajput ruler Jai Singh II,[11][12] the ruler of Amer, after whom the city is named. It was one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya.[13] During the British Colonial period, the city served as the capital of Jaipur State. After independence in 1947, Jaipur was made the capital of the newly formed state of Rajasthan.Jaipur is a popular tourist destination in India and forms a part of the west Golden Triangle tourist circuit along with Delhi and Agra (240 km, 149 mi).[14] It also serves as a gateway to other tourist destinations in Rajasthan such as Jodhpur, Jaisalmer, Bikaner, Udaipur, Kota and Mount Abu.On 6 July 2019, UNESCO World Heritage Committee inscribed Jaipur the "Pink City of India" among its World Heritage Sites.[15][16] The city is also home to the UNESCO World Heritage Sites Amer Fort and Jantar Mantar.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
        price: 31000,
    },
    {
        id: 3,
        location: 'Banaras',
        description: 'Varanasi is one of the worlds oldest continually inhabited cities.[21] Kashi, its ancient name, was associated with a kingdom of the same name of 2,500 years ago. The Lion capital of Ashoka at nearby Sarnath has been interpreted to be a commemoration of the Buddhas first sermon there in the fifth century BCE.[22][23] In the 8th century, Adi Shankara established the worship of Shiva as an official sect of Varanasi. Tulsidas wrote his Awadhi language epic, the Ramcharitmanas, a Bhakti movement reworking of the Sanskrit Ramayana, in Varanasi. Several other major figures of the Bhakti movement were born in Varanasi, including Kabir and Ravidas.[24] In the 16th century, Rajput nobles in the service of the courts and armies of the Mughal emperor Akbar, sponsored the building or further enhancement of the major Shiva temple in the city; they also built other temples, all displaying an empire-wide architectural style.[25][26] Under the Treaty of Faizabad, the East India Company acquired Benares in 1775,[27][28] the city later successively becoming a part of the Benares Division in the Ceded and Conquered Provinces, the North-Western Provinces, and the United Provinces, and after Indias independence of Uttar Pradesh',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg/1280px-Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg',
        price: 5100,
    },
    {
        id: 4,
        location: 'Lucknow',
        description: 'Lucknow stands at an elevation of approximately 123 metres (404 ft) above sea level. The city had an area of 402 km2 (155 square miles) until December 2019, when 88 villages were added to the municipal limits and the area increased to 631 km2 (244 square miles).[14] Bounded on the east by Barabanki, on the west by Unnao, on the south by Raebareli and in the north by Sitapur and Hardoi, Lucknow sits on the northwestern shore of the Gomti River. As of 2008, there were 110 wards in the city. Morphologically, three clear demarcations exist: The Central business district, which is a fully built up area, comprises Hazratganj, Aminabad and Chowk. A middle zone surrounds the inner zone with concrete houses while the outer zone consists of slums.[15]Historically, Lucknow was the capital of the Awadh region, controlled by the Delhi Sultanate and later the Mughal Empire. It was transferred to the Nawabs of Awadh. In 1856, the British East India Company abolished local rule and took complete control of the city along with the rest of Awadh and, in 1857, transferred it to the British Raj.[16] Along with the rest of India, Lucknow became independent from Britain on 15 August 1947. It has been listed as the 17th-fastest growing city in India and 74th in the world',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rumi_darwaza_night.jpg/1920px-Rumi_darwaza_night.jpg',
        price: 21000,
    },
    {
        id: 5,
        location: 'Darjeeling',
        description: 'Geographically, the district can be divided into two broad divisions: the hills and the plains. The entire hilly region of the district comes under the Gorkhaland Territorial Administration, a semi-autonomous administrative body under the state government of West Bengal. This body covers the three hill subdivisions of Darjeeling, Kurseong and Mirik and the district of Kalimpong. The foothills of Darjeeling Himalayas, which comes under the Siliguri subdivision, is known as the Terai. The district is bounded on the north by Sikkim, on the south by Uttar Dinajpur district of West Bengal, southwest by Kishanganj district of Bihar state, on the southeast by Panchagarh district of Bangladesh, on the east by Kalimpong and Jalpaiguri districts, and on the west by easternmost Province No. 1 of Nepal. Darjeeling district has a length from north to south of 18 miles (29 km) and a breadth from east to west of 16 miles (26 km). As of 2011, it was the second least populous district of West Bengal (out of 19), after Dakshin Dinajpur',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Darjeeling_Toy_Train_at_Batasia_Loop.jpg',
        price: 35758,
    },
    {
        id: 6,
        location: 'Mathura',
        description: 'Mathura, which lies at the centre of the cultural region of Braj[6] has an ancient history and is also believed to be the homeland and birthplace of Krishna, who belonged to the Yadu dynasty. According to the Archaeological Survey of India plaque at the Mathura Museum,[11] the city is mentioned in the oldest Indian epic, the Ramayana. In the epic, the Ikshwaku prince Shatrughna slays a demon called Lavanasura and claims the land. Afterwards, the place came to be known as Madhuvan as it was thickly wooded, then Madhupura and later Mathura.[12] The most important pilgrimage site in Mathura was Katra , now referred to as Krishna Janmasthan (the birthplace of Krishna). Excavations at the site revealed pottery and terracotta dating to the sixth century BCE, the remains of a large Buddhist complex, including a monastery called Yasha Vihara of the Gupta period, as well as Jain sculptures of the same era',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vishram_Ghat.jpg/1280px-Vishram_Ghat.jpg',
        price: 39876,
    },
    {
        id: 7,
        location: 'Goa',
        description: 'The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure, and Indias National Commission on Population rated it as having the best quality of life in India (based on the commissions 12 Indicators).[9] It is the second-highest ranking among Indian states in the human development index.[4]Panaji is the states capital, while Vasco da Gama is its largest city. The historic city of Margão in Goa still exhibits the cultural influence of the Portuguese, who first voyaged to the subcontinent in the early 16th century as merchants, and conquered it soon thereafter, whereupon Goa became an overseas territory of the Portuguese Empire, part of what was then known as Portuguese India, and remained as such for about 456 years until it was annexed by India in 1961.[10][11] Goas official language, which is spoken by a majority of its inhabitants, is Konkani.Goa is visited by large numbers of international and domestic tourists each year because of its white-sand beaches, active nightlife, places of worship, and World Heritage-listed architecture. It also has rich flora and fauna because it lies very close to the North Western Ghats rainforests, one of the rare biodiversity hotspots of the world',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOM4I2tWGRXG53_w-F9sZ0aYpqnWA3H5LRiaIg-=s1360-w1360-h1020',
        price: 69758,
    }

]