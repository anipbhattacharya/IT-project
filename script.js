
/* =====================================================
   EXPLORE SODEPUR
   Tourism & Heritage of Sodepur
   Complete JavaScript for 15 website routes
   ===================================================== */

/* =====================================================
   1. HERITAGE DATA
   ===================================================== */

const heritage = [
    {
        slug: "gandhi-memorial-ashram",
        title: "Sodepur Gandhi Memorial Ashram / Khadi Pratisthan",
        short: "The historic eastern hermitage of Mahatma Gandhi, established by Satish Chandra Dasgupta as a vital center of the Khadi and rural self-reliance movement.",
        category: "Freedom Movement",
        image: "images/gandhi_memorial.png",
        sections: [
            [
                "Establishment by Satish Chandra Dasgupta",
                "Khadi Pratisthan at Sodepur was established in the 1920s by eminent scientist, chemist, and freedom fighter Satish Chandra Dasgupta. Formerly the superintendent and chief chemist at Bengal Chemical and Pharmaceutical Works under Acharya Prafulla Chandra Roy, Dasgupta resigned from his lucrative scientific career to dedicate his life to the freedom movement and rural constructive work. He acquired land at Sodepur to build a model institution for spinning, weaving, cottage industries, and swadeshi production."
            ],
            [
                "Mahatma Gandhi's Eastern Hermitage",
                "Mahatma Gandhi revered the Sodepur Ashram as his eastern headquarters, famously calling it his 'second home' and 'second Sabarmati'. Gandhi stayed at Sodepur during several defining junctures of India's independence struggle, notably during the tumultuous years leading up to the Round Table Conferences and his pivotal peace missions during the 1946–1947 communal crises in Bengal. Sodepur served as an eastern nerve center where national leaders gathered to formulate national strategy."
            ],
            [
                "Inauguration of the Kalashala (1927)",
                "In 1927, Mahatma Gandhi inaugurated the 'Kalashala' workshop within the ashram campus. Conceived as a technological and educational institute for rural regeneration, the Kalashala engaged in continuous engineering research to enhance the efficiency of the charkha (spinning wheel), ginning equipment, and indigenous looms, harmonizing grassroots manual labor with scientific inquiry."
            ],
            [
                "Khadi & Rural Self-Reliance",
                "Beyond khadi textile manufacturing, the ashram spearheaded diverse cottage industries including handmade paper production, indigenous beekeeping, non-violent leather tanning, and herbal soap making. Satish Chandra Dasgupta demonstrated that rural economic self-sufficiency was the true bedrock of national independence, creating an enduring legacy of sustainable living and constructive nationalism."
            ]
        ]
    },

    {
        slug: "sodepur-railway",
        title: "Sodepur Railway Heritage",
        short: "A vital artery of Eastern Railway's Sealdah suburban network, connecting Kolkata with Bandel and Katwa while catalyzing regional trade and urban growth.",
        category: "Transport Heritage",
        image: "images/sodepur_rail.png",
        sections: [
            [
                "Integration into Eastern Railway Network",
                "Sodepur railway station forms an essential node of Eastern Railway's Sealdah suburban division along the Sealdah–Ranaghat mainline. Commissioned during the mid-to-late 19th-century railway expansion under the Eastern Bengal Railway, the station provided direct rail links connecting Sealdah with vital trade junctions across North 24 Parganas, Bandel, Naihati, and Katwa."
            ],
            [
                "Catalyst for Rapid Urbanization",
                "The advent of regular suburban train services fundamentally transformed Sodepur from a quiet riverine settlement into a dynamic suburban hub. Efficient rail access allowed families, clerks, professionals, and students to commute smoothly into central Kolkata, accelerating housing development and public infrastructure throughout the greater Panihati-Sodepur municipal belt."
            ],
            [
                "Trade Corridors & Station Marketplaces",
                "The railway station spurred the emergence of major commercial hubs, centered around the renowned Sodepur Station Road Bazar. Local farmers, handloom weavers from neighboring weaving colonies, and wholesale suppliers used the station to transport fresh agricultural produce, daily essentials, and consumer goods, establishing a bustling round-the-clock marketplace."
            ],
            [
                "Suburban Commuter Lifeline & Modern Identity",
                "Today, Sodepur railway station remains the throbbing civic heartbeat of the locality. With multiple platforms handling high-frequency EMU suburban locals, passenger overhead footbridges, and surrounding transit corridors, the station continues to symbolize the mobility, endurance, and everyday rhythm of suburban life."
            ]
        ]
    },

    {
        slug: "panihati-mahotsabtala-ghat",
        title: "Panihati Mahotsabtala Ghat",
        short: "The sacred riverfront ghat consecrated by the historic Danda Mahotsava (Chira-Dadhi Mahotsava) initiated by Raghunatha Das Goswami under Nityananda Prabhu.",
        category: "Riverfront Heritage",
        image: "images/Panihati Mahotsabtala Ghat.png",
        sections: [
            [
                "The Historic Danda Mahotsava",
                "Panihati Mahotsabtala Ghat holds supreme spiritual reverence in Gaudiya Vaishnavism as the site of the historic Danda Mahotsava (the festival of punishment and mercy), popularly celebrated as the Chira-Dadhi Mahotsava (Chipped Rice and Yogurt Festival). In the 16th century, Srila Raghunatha Das Goswami, longing to renounce worldly wealth to serve Sri Chaitanya Mahaprabhu, met Sri Nityananda Prabhu seated beneath a large banyan tree on this riverbank."
            ],
            [
                "Nityananda Prabhu's Loving Injunction",
                "Sri Nityananda Prabhu humorously commanded Raghunatha Das to feed all assembled Vaishnavas and village folk as an auspicious 'punishment' before granting him spiritual benediction. Raghunatha Das organized a grand feast, serving chipped rice soaked in yogurt, condensed milk, bananas, and sugar in earthenware pots to thousands of devotees lining the Hooghly riverbank."
            ],
            [
                "Mystical Presence of Sri Chaitanya Mahaprabhu",
                "Classical Vaishnava texts, most notably Krishnadasa Kaviraja's Sri Chaitanya Charitamrita, narrate that Sri Chaitanya Mahaprabhu mystically appeared from Puri to partake in the feast alongside Nityananda Prabhu, delighting the gathered congregation. This divine past-time established Panihati as a monumental focal point of egalitarian devotional fellowship."
            ],
            [
                "Living Pilgrimage & Annual Chira-Dadhi Mela",
                "Every year on the Shukla Trayodashi of the month of Jyeshtha (May–June), hundreds of thousands of pilgrims, monks, and international devotees assemble at Mahotsabtala Ghat. Clay pots filled with seasoned chipped rice and curd are distributed amidst resounding congregational Harinama Sankirtan, keeping this 500-year-old tradition vibrantly alive."
            ]
        ]
    },

    {
        slug: "baro-mandir-ghat",
        title: "Baro Mandir Ghat",
        short: "An awe-inspiring riverfront sanctuary on the Hooghly featuring twelve historic Aatchala and Ekratna Shiva temples arranged in rhythmic harmony.",
        category: "Temple Heritage",
        image: "images/baro_mondirghat.png",
        sections: [
            [
                "Architectural Layout & Symmetrical Alignment",
                "Baro Mandir Ghat is an extraordinary riverfront architectural ensemble consisting of twelve Shiva temples built in ordered, symmetrical alignments along the banks of the sacred Hooghly River. Established in the 19th century by devout local patrons, the twelve shrines were designed to mirror classical Shaivite sacred geometry, offering a grand visual vista to travelers sailing along the river."
            ],
            [
                "Traditional Aatchala & Ekratna Design",
                "The temples display Bengal's indigenous brick and terracotta craftsmanship, primarily executed in the traditional 'Aatchala' (eight-roofed) and 'Ekratna' (single-pinnacle) structural styles. Their curved cornices, mimicking the gentle slopes of thatched rural huts (Bangla chala), harmoniously combine vernacular architectural aesthetics with monumental masonry."
            ],
            [
                "Shaivite Sanctuary on the Hooghly",
                "Each temple enshrines a sacred Shiva Lingam sculpted from black basalt stone. The presence of twelve dedicated Shiva shrines directly adjacent to the predominant Vaishnava pilgrimage sites of Panihati demonstrates Bengal's historical synthesis and peaceful coexistence of Shaivite, Shakta, and Vaishnava devotional traditions."
            ],
            [
                "Riverfront Sanctity & Community Rhythm",
                "The stepped masonry ghat allows pilgrims to take ritual morning baths in the Holy Ganga before offering fresh water and bael leaves at the shrines. The scenic ghat pavilions remain favorite contemplative retreats for morning meditation, festival gatherings like Maha Shivaratri, and viewing evening river breezes."
            ]
        ]
    },

    {
        slug: "chaitanya-mahaprabhu-temple",
        title: "Chaitanya Mahaprabhu Temple, Panihati",
        short: "A venerated Gaudiya Vaishnava pilgrimage destination preserving the spiritual footprints and ecstatic past-times of Sri Chaitanya and Nityananda Prabhu.",
        category: "Religious Heritage",
        image: "images/Chaitanya Mahaprabhu Temple, Panihati.png",
        sections: [
            [
                "Historical Epicenter of Gaudiya Vaishnavism",
                "The Sri Chaitanya Mahaprabhu Temple in Panihati represents the historical and emotional core of the 16th-century Bhakti movement in Bengal. Sri Chaitanya Mahaprabhu visited Panihati multiple times, particularly during his travels between Navadvip, Nilachala (Puri), and Vrindavan, elevating this riverside locality into a sacred pilgrimage station."
            ],
            [
                "The Divine Confluence of Gaur and Nitai",
                "Panihati witnessed intense spiritual past-times between Sri Chaitanya and His divine associate Nityananda Prabhu. Under their revolutionary spiritual leadership, devotional congregational chanting (Sankirtan) was disseminated unconditionally to people across all social strata, breaking down caste hierarchies and formal ritual rigidities."
            ],
            [
                "Sanctum Sanctorum & Sacred Deities",
                "The temple enshrines exquisite deities of Gaur-Nitai (Sri Chaitanya Mahaprabhu and Sri Nityananda Prabhu), resplendent in celebratory posture with arms raised in ecstatic kirtan. Surrounding courtyards house commemorative shrines, historical holy footprints (Charan Chinha), and sacred trees linked to ancient saintly assemblies."
            ],
            [
                "Perpetual Kirtan & Living Pilgrimage",
                "The temple complex remains filled year-round with soul-stirring Padavali Kirtan, devotional scripture readings from the Chaitanya Bhagavata, and grand celebrations on festivals like Gaura Purnima and Dol Yatra, drawing scholars, ascetics, and devotees from around the world."
            ]
        ]
    },

    {
        slug: "giribala-dasi-thakurbari",
        title: "Giribala Dasi Thakurbari",
        short: "An aristocratic household temple estate illustrating the vital role of domestic Vaishnavite worship and private patronage in Panihati's spiritual fabric.",
        category: "Local Religious Heritage",
        image: "images/Giribala Dasi Thakurbari.png",
        sections: [
            [
                "Devotional Legacy of Giribala Dasi",
                "Founded during the late 19th century by Giribala Dasi, a devout noblewoman belonging to an affluent landholding family, this Thakurbari represents the fine tradition of private religious endowment in Bengal. Inspired by deep Gaudiya Vaishnava piety, she dedicated her personal estate to the establishment and perpetual maintenance of a consecrated family temple."
            ],
            [
                "Preserving Domestic Vaishnavite Traditions",
                "In traditional Bengali society, the Thakurbari served as an essential nexus between private family worship and the broader spiritual life of the neighborhood. Giribala Dasi Thakurbari preserved continuous daily sevas, food offerings (bhog), and morning and evening aartis, welcoming local residents into a shared sanctum of communal devotion."
            ],
            [
                "Courtyard Architecture & Natmandir Design",
                "The complex is constructed around a serene central open courtyard (Uthan) fronted by a pillared Natmandir (prayer and performance pavilion) and an elevated garbhagriha (sanctum sanctorum). Decorated with ornate cast-iron railings, high-ceilinged verandahs, and stucco mouldings, the estate mirrors the tasteful confluence of late colonial residential and temple architecture."
            ],
            [
                "Living Neighborhood Heritage",
                "Even as modern suburban developments expanded around it, the Thakurbari has preserved its timeless devotional character. It continues to host intimate celebrations during Janmashtami, Radhashtami, and Jhulan Yatra, standing as an authentic emblem of Panihati's enduring household devotional heritage."
            ]
        ]
    },

    {
        slug: "gobinda-kumar-house",
        title: "Gobinda Kumar House",
        short: "A stately heritage mansion showcasing late 19th and early 20th-century Bengali zamindari and elite residential architectural splendour in Sodepur.",
        category: "Built Heritage",
        image: "images/Gobinda Kumar House.png",
        sections: [
            [
                "Elite Bengali Zamindari Architecture",
                "Gobinda Kumar House is one of Sodepur's foremost surviving historic estates from the late 19th and early 20th century. During this era, prosperous zamindars, judicial officers, and influential merchants constructed expansive suburban retreats along the northern corridors of Calcutta, combining opulent domestic quarters with expansive gardens and ceremonial courtyards."
            ],
            [
                "Distinctive Architectural Elements",
                "The mansion exemplifies neoclassical Bengal residential architecture, featuring solid brick-and-lime mortar masonry, imposing Tuscan and Corinthian colonnades, grand semicircular stucco arches, and traditional green louvred shuttered windows (khorkhori). Its wide wrapping verandahs and high ceilings were specifically engineered to harness cooling breezes from the nearby Hooghly River."
            ],
            [
                "Socio-Cultural Center & Festive Gatherings",
                "Historic homes of this stature were centers of refined cultural salons, musical gatherings, and civic meetings. Gobinda Kumar House historically hosted elaborate seasonal celebrations, most prominently the traditional autumn Durga Puja with Pratima Niranjan processions, reinforcing deep bonds with the neighborhood."
            ],
            [
                "Conservation Value & Suburban Memory",
                "As an architectural time capsule, Gobinda Kumar House provides invaluable physical evidence of Sodepur's transformation from rural estates and orchard-flanked villas into a bustling modern municipality, reminding visitors of the town's aristocratic heritage and built craftsmanship."
            ]
        ]
    },

    {
        slug: "saheb-bagan-bari",
        title: "Saheb Bagan Bari",
        short: "A historical colonial garden estate reflecting 19th-century villa culture and the early suburbanization of the Sodepur-Panihati riverine belt.",
        category: "Built Heritage",
        image: "images/saheb_bagan_bari.png",
        sections: [
            [
                "Colonial Garden Estate Heritage",
                "Saheb Bagan Bari ('Gentleman's Garden Estate') is a captivating testament to the garden retreat culture that flourished along the Hooghly during the 18th and 19th centuries. European commercial agents, colonial administrators, and wealthy Calcutta elites established pastoral country houses (bagan baris) in Sodepur and Panihati to escape the dense air and crowded streets of colonial Calcutta."
            ],
            [
                "Horticultural Landscape & Original Layout",
                "Originally set within sprawling acreage dotted with exotic fruit orchards, towering mahogany and banyan trees, ornate carriage pathways, and reflective water bodies (pukur), the estate was planned as a self-sustaining peaceful retreat. The surrounding gardens accommodated stables, guest pavilions, and servants' quarters."
            ],
            [
                "Architectural Blend of Indo-Saracenic & European Styles",
                "The estate's residential bungalow features raised plinth foundations to guard against monsoon tides, thick heat-dissipating masonry walls, deep shaded porticos, classical pediments, and Venetian fanlight windows. This architecture illustrates the pragmatic fusion of European classical geometry with tropical climate adaptations."
            ],
            [
                "Historical Transition & Local Heritage Memory",
                "Over decades of regional growth, the historic estate transitioned through various institutional and private hands, yet its distinct landscape and structure permanently influenced local place names and collective memory, symbolizing Sodepur's multifaceted social tapestry."
            ]
        ]
    },

    {
        slug: "hooghly-river-heritage",
        title: "Hooghly River Heritage",
        short: "The civilizational, economic, and ecological lifeline of Bengal, connecting historical trade routes, sacred bathing ghats, and rich riverine traditions.",
        category: "River Heritage",
        image: "images/hooghly river heritage.png",
        sections: [
            [
                "Geographical & Civilizational Lifeline",
                "The Bhagirathi-Hooghly River, the western distributary of the sacred Ganges, forms the geographic backbone and historical lifeblood of southern Bengal. Flowing serenely along the western flank of Panihati and Sodepur, its waters have nurtured settlements, supported agriculture, and inspired poets, philosophers, and spiritual seekers for millennia."
            ],
            [
                "Historic Maritime Highway & Trade Enclaves",
                "For centuries, the Hooghly served as the grand maritime expressway connecting Bengal to global commerce. European trading companies—the Portuguese at Hooghly, Dutch at Chinsurah, French at Chandannagar, Danes at Serampore, and British at Calcutta—sailed these very waters. Indigenous cargo boats (dinghies, bajras, and bhar boats) ferried silk, spices, salt, and jute between upcountry river ports and the ocean."
            ],
            [
                "Riverfront Ghats & Daily Living Traditions",
                "The riverbank at Sodepur and Panihati is punctuated by monumental bathing ghats where local life unfolds from dawn until dusk. From ritual morning ablutions and sun salutations (arghya) to fishermen casting nets in the tidal currents, the river remains an active stage of community identity, spiritual devotion, and cultural continuity."
            ],
            [
                "Ecosystem, Biodiversity & Heritage Preservation",
                "The river ecosystem sustains diverse aquatic flora and fauna, notably the iconic Gangetic hilsa (tenualosa ilisha) that holds a cherished place in Bengal's culinary culture. Safeguarding the cleanliness, riparian biodiversity, and architectural integrity of the Hooghly riverfront is integral to preserving Sodepur's living heritage."
            ]
        ]
    },

    {
        slug: "vaishnava-heritage",
        title: "Panihati / Sodepur Vaishnava Heritage",
        short: "The collective spiritual ecosystem formed by the legacy of Chaitanya Mahaprabhu, soul-stirring kirtan culture, and sacred texts like Sri Chaitanya Charitamrita.",
        category: "Vaishnava Heritage",
        image: "images/Panihati Sodepur Vaishnava Heritage.png",
        sections: [
            [
                "The 16th-Century Bhakti Renaissance",
                "The Vaishnava heritage of the Panihati-Sodepur riverine belt constitutes one of the most radiant chapters of the medieval Bhakti renaissance in India. Inspired by Sri Chaitanya Mahaprabhu and Sri Nityananda Prabhu, Gaudiya Vaishnavism transformed the religious ethos of Bengal through the message of universal love, spiritual equality, and profound humility, liberating society from rigid sectarian orthodoxy."
            ],
            [
                "Immortalized in Classical Sacred Literature",
                "Panihati holds prominent mention across celebrated Gaudiya Vaishnava scriptures, including Krishnadasa Kaviraja Goswami's Sri Chaitanya Charitamrita, Vrindavana Dasa Thakura's Sri Chaitanya Bhagavata, and the devotional lyrics of Locana Dasa. These texts chronicle historic gatherings where saints, scholars, and ordinary householders came together on these riverbanks in joyous spiritual revelry."
            ],
            [
                "Kirtan Culture & Communal Harmony",
                "The practice of congregational Sankirtan—accompanied by the rhythmic beats of the mridanga (khol) and brass kartal cymbals—flourished into an enduring musical tradition here. Padavali kirtan and Nagar kirtan processions dissolved societal divides, cultivating a compassionate community culture that continues to permeate local festivals and temple rhythms."
            ],
            [
                "Living Monastic Network & Sacred Circuit",
                "Today, Panihati and Sodepur are linked by an extensive circuit of historical akharas, mutts, and samadhi shrines. The perennial tradition of hosting pilgrims with gracious hospitality and sanctified prasad preserves the sublime spiritual essence of this hallowed riverbank corridor."
            ]
        ]
    },

    {
        slug: "local-cultural-heritage",
        title: "Sodepur Local Cultural Heritage",
        short: "An inspiring synthesis of post-partition refugee resilience, historic handloom textile markets, grand community pujas, and vibrant suburban coexistence.",
        category: "Community Heritage",
        image: "images/local cultural heritage.png",
        sections: [
            [
                "Post-Partition Resilience & Refugee Resettlement",
                "Following the 1947 partition of Bengal, Sodepur became a major haven for displaced families migrating from East Bengal. Confronting severe economic hardship, these resilient communities established cooperative residential colonies, self-funded schools, libraries, and welfare institutions. Their relentless determination transformed barren suburban terrain into a thriving educational and cultural hub, defining Sodepur's proud civic character."
            ],
            [
                "Handloom Weaving, Jute Mills & Industrial Growth",
                "Sodepur's economic growth was fueled by traditional handloom weaving clusters and cottage industries alongside the heavy industrial mills along the Barrackpore Trunk Road (BT Road). Skilled weavers established vibrant markets for Bengal cotton and tant garments, while local engineering and manufacturing units anchored the suburban employment base."
            ],
            [
                "Grand Community Festivals (Durga Puja & Dol Purnima)",
                "Community life in Sodepur shines brightest during community celebrations. Sharodotsav (Durga Puja) witnesses spectacular neighborhood art installations (pandals), classical illuminations, and cultural programs organized by neighborhood clubs. Dol Purnima, Kali Puja, Saraswati Puja, and the historic Panihati Rath Yatra unite generations in joyful communal harmony."
            ],
            [
                "Suburban Coexistence & Cultural Vitality",
                "Sodepur exemplifies the classic Bengali culture of 'adda' (intellectual and friendly conversation) across neighborhood tea stalls, parks, and clubhouses. Renowned for its passionate patronage of football, cricket, theatre, classical music, and literature, Sodepur seamlessly harmonizes its historical pedigree with modern suburban vibrancy."
            ]
        ]
    }
];


/* =====================================================
   2. ROUTE DEFINITIONS
   ===================================================== */

const routes = {
    "/": {
        type: "home",
        title: "Home"
    },

    "/heritage": {
        type: "heritage",
        title: "Heritage of Sodepur"
    },

    "/hotel-booking": {
        type: "booking",
        title: "Hotel Booking"
    },

    "/gallery": {
        type: "gallery",
        title: "Gallery"
    }
};

/* Add one independent route for every heritage location. */

heritage.forEach(function (item) {
    routes["/heritage/" + item.slug] = {
        type: "detail",
        title: item.title,
        item: item
    };
});


/* =====================================================
   3. GALLERY DATA
   ===================================================== */

const galleryItems = [
    {
        name: "Gandhi Memorial Ashram",
        slug: "gandhi-memorial-ashram"
    },
    {
        name: "Sodepur Railway Station",
        slug: "sodepur-railway"
    },
    {
        name: "Panihati Mahotsabtala Ghat",
        slug: "panihati-mahotsabtala-ghat"
    },
    {
        name: "Baro Mandir Ghat",
        slug: "baro-mandir-ghat"
    },
    {
        name: "Chaitanya Mahaprabhu Temple",
        slug: "chaitanya-mahaprabhu-temple"
    },
    {
        name: "Giribala Dasi Thakurbari",
        slug: "giribala-dasi-thakurbari"
    },
    {
        name: "Gobinda Kumar House",
        slug: "gobinda-kumar-house"
    },
    {
        name: "Saheb Bagan Bari",
        slug: "saheb-bagan-bari"
    },
    {
        name: "Hooghly River",
        slug: "hooghly-river-heritage"
    },
    {
        name: "Panihati / Sodepur Vaishnava Heritage",
        slug: "vaishnava-heritage"
    },
    {
        name: "Sodepur Local Cultural Heritage",
        slug: "local-cultural-heritage"
    }
];


/* =====================================================
   4. HELPER FUNCTIONS
   ===================================================== */

/* Prevent special characters from being interpreted as HTML. */

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}


/* Safely resolve image paths so nested routes like /heritage/... do not 404 */

function resolveImagePath(imageUrl) {
    if (!imageUrl) {
        return "";
    }

    if (
        imageUrl.startsWith("http://") ||
        imageUrl.startsWith("https://") ||
        imageUrl.startsWith("data:")
    ) {
        return imageUrl;
    }

    /* When served via HTTP/HTTPS, root the image path from origin */
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        const cleanPath = imageUrl.replace(/^\.?\/?/, "");
        return "/" + encodeURI(cleanPath);
    }

    /* When loaded via file:// protocol directly */
    return encodeURI(imageUrl);
}


/* Create an image or a blank placeholder. */

function imageSlot(label, imageUrl = "", extraClass = "") {
    if (imageUrl) {
        const resolved = resolveImagePath(imageUrl);
        return `
            <img
                class="real-image ${extraClass}"
                src="${escapeHtml(resolved)}"
                alt="${escapeHtml(label)}"
                loading="lazy"
            >
        `;
    }

    return `
        <div
            class="image-placeholder ${extraClass}"
            role="img"
            aria-label="${escapeHtml(label)} photo placeholder"
        >
            <div>
                <strong>${escapeHtml(label)}</strong>
                <span>Photo placeholder · Add your image here</span>
            </div>
        </div>
    `;
}


/* Create a clickable heritage card. */

function createHeritageCard(item) {
    return `
        <article class="site-card">

            <a
                class="card-image"
                href="/heritage/${item.slug}"
                data-link
                aria-label="View ${escapeHtml(item.title)}"
            >
                ${imageSlot(item.title, item.image)}
            </a>

            <div class="card-body">

                <span class="eyebrow">
                    ${escapeHtml(item.category)}
                </span>

                <h3>${escapeHtml(item.title)}</h3>

                <p>${escapeHtml(item.short)}</p>

                <a
                    class="card-link"
                    href="/heritage/${item.slug}"
                    data-link
                >
                    Explore site <span aria-hidden="true">↗</span>
                </a>

            </div>
        </article>
    `;
}


/* Create a common page heading. */

function createBanner(category, title, description) {
    return `
        <section class="page-banner">

            <div class="container">

                <div class="breadcrumb">
                    <a href="/" data-link>Home</a>
                    /
                    ${escapeHtml(title)}
                </div>

                <span class="eyebrow">
                    ${escapeHtml(category)}
                </span>

                <h1>${escapeHtml(title)}</h1>

                <p class="lead">
                    ${escapeHtml(description)}
                </p>

            </div>

        </section>
    `;
}


/* =====================================================
   5. HOME PAGE
   Route: /
   ===================================================== */

function homePage() {
    return `

        <section class="hero">

            <div class="container hero-grid">

                <div>

                    <span class="eyebrow">
                        A journey through local history
                    </span>

                    <h1>
                        Discover <span>Sodepur.</span>
                    </h1>

                    <p class="lead">
                        Tourism &amp; Heritage of Sodepur
                    </p>

                    <p class="muted">
                        Sodepur, in the Panihati area of North 24
                        Parganas, West Bengal, brings together
                        freedom-movement history, railway life,
                        religious traditions and the cultural
                        landscape of the Hooghly River.
                    </p>

                    <div class="hero-actions">

                        <a
                            class="btn"
                            href="/heritage"
                            data-link
                        >
                            Explore heritage ↗
                        </a>

                        <a
                            class="btn secondary"
                            href="/gallery"
                            data-link
                        >
                            View gallery
                        </a>

                    </div>

                    <div class="stats-row">

                        <div class="stat">
                            <strong>11</strong>
                            <span>Heritage listings</span>
                        </div>

                        <div class="stat">
                            <strong>15</strong>
                            <span>Separate routes</span>
                        </div>

                        <div class="stat">
                            <strong>1</strong>
                            <span>Connected region</span>
                        </div>

                    </div>

                </div>

                <div class="hero-visual">

                    ${imageSlot("Sodepur heritage / riverfront", "images/hooghly river heritage.png")}

                    <div class="visual-note">
                        <strong>Stories rooted in place</strong>
                        <small>History · Faith · Community</small>
                    </div>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="section-heading">

                    <div>
                        <span class="eyebrow">Start exploring</span>
                        <h2>Heritage highlights</h2>
                    </div>

                    <p>
                        From Gandhi's association with Khadi
                        Pratisthan to riverfront ghats and local
                        traditions, explore the places that shape
                        the area's identity.
                    </p>

                </div>

                <div class="card-grid">
                    ${heritage.slice(0, 3).map(createHeritageCard).join("")}
                </div>

            </div>

        </section>


        <section class="section-sm">

            <div class="container">

                <div class="feature-band">

                    <div>

                        <span class="eyebrow" style="color:#e5c28f">
                            Plan a visit
                        </span>

                        <h2>Make room for local discovery.</h2>

                        <p>
                            Browse the heritage directory, view
                            the photo gallery, or use the sample
                            hotel enquiry form for your project.
                        </p>

                    </div>

                    <a
                        class="btn"
                        href="/hotel-booking"
                        data-link
                    >
                        Hotel booking form →
                    </a>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="section-heading">
                    <div>
                        <span class="eyebrow">The local story</span>
                        <h2>More than a destination</h2>
                    </div>
                </div>

                <div class="card-grid">

                    <article class="site-card">
                        <div class="card-body">
                            <h3>Freedom movement</h3>
                            <p>
                                Explore Sodepur's association with
                                Satish Chandra Dasgupta, Khadi
                                Pratisthan and Mahatma Gandhi.
                            </p>
                        </div>
                    </article>

                    <article class="site-card">
                        <div class="card-body">
                            <h3>River and faith</h3>
                            <p>
                                Discover the ghats, temple
                                traditions and religious heritage
                                connected with the Hooghly River.
                            </p>
                        </div>
                    </article>

                    <article class="site-card">
                        <div class="card-body">
                            <h3>Community and culture</h3>
                            <p>
                                Local architecture, transport
                                and neighbourhood traditions form
                                an interconnected heritage landscape.
                            </p>
                        </div>
                    </article>

                </div>

            </div>

        </section>

    `;
}


/* =====================================================
   6. HERITAGE PAGE
   Route: /heritage
   ===================================================== */

function heritagePage() {
    return `

        ${createBanner(
        "Explore the region",
        "Heritage of Sodepur",
        "A visual directory of heritage and cultural places in Sodepur and the immediately surrounding Panihati area. Select a card to open its dedicated page."
    )}

        <section class="section">

            <div class="container">

                <div class="notice" style="margin-bottom:25px">
                    Explore historical landmarks, architectural monuments, and sacred riverfront ghats spanning Sodepur and Panihati.
                </div>

                <div class="card-grid">
                    ${heritage.map(createHeritageCard).join("")}
                </div>

            </div>

        </section>

    `;
}


/* =====================================================
   7. INDIVIDUAL HERITAGE PAGES
   Each heritage site has its own route.
   ===================================================== */

function detailPage(item) {
    return `

        ${createBanner(
        item.category,
        item.title,
        item.short
    )}

        <section class="section">

            <div class="container detail-layout">

                <div class="detail-image">

                    ${imageSlot(item.title, item.image)}

                    <div class="info-panel">

                        <h3>Visitor checklist</h3>

                        <ul>
                            <li>
                                Confirm public access before visiting.
                            </li>

                            <li>
                                Respect local worship and community spaces.
                            </li>

                            <li>
                                Use verified photographs and
                                reliable sources for site-specific facts.
                            </li>
                        </ul>

                    </div>

                </div>


                <div class="detail-copy">

                    <span class="eyebrow">Site overview</span>

                    <h2>About this place</h2>

                    <p>${escapeHtml(item.short)}</p>

                    ${item.sections.map(function (section) {
        return `
                            <h2>${escapeHtml(section[0])}</h2>
                            <p>${escapeHtml(section[1])}</p>
                        `;
    }).join("")}

                    <div class="hero-actions">

                        <a
                            class="btn"
                            href="/heritage"
                            data-link
                        >
                            ← Back to Heritage
                        </a>

                        <a
                            class="btn secondary"
                            href="/gallery"
                            data-link
                        >
                            Open Gallery
                        </a>

                    </div>

                </div>

            </div>

        </section>

    `;
}


/* =====================================================
   8. HOTEL BOOKING PAGE
   Route: /hotel-booking
   ===================================================== */

function bookingPage() {
    return `

        ${createBanner(
        "Plan your stay",
        "Hotel Booking",
        "A front-end booking enquiry form for visitors planning to explore Sodepur and Panihati. This project does not process real reservations or payments."
    )}

        <section class="section">

            <div class="container booking-wrap">


                <aside class="booking-intro">

                    <span
                        class="eyebrow"
                        style="color:#e5c28f"
                    >
                        Stay information
                    </span>

                    <h2>Plan with ease.</h2>

                    <p>
                        Fill in your travel dates and room
                        preferences. The form demonstrates common
                        HTML form elements and validates the
                        required fields.
                    </p>

                    ${imageSlot("Sodepur heritage stay", "images/Gobinda Kumar House.png")}

                    <p style="font-size:13px;margin-top:18px">
                        Demo only · No data is sent to a server.
                    </p>

                </aside>


                <form id="bookingForm" class="booking-form">

                    <div class="form-grid">


                        <div class="field">
                            <label for="fullName">Full name *</label>

                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Your full name"
                                autocomplete="name"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="email">Email address *</label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                autocomplete="email"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="phone">Phone number *</label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+91 98765 43210"
                                autocomplete="tel"
                                pattern="[0-9+() -]{8,18}"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="address">Address *</label>

                            <input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Street, city, PIN"
                                autocomplete="street-address"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="checkin">Check-in date *</label>

                            <input
                                id="checkin"
                                name="checkin"
                                type="date"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="checkout">Check-out date *</label>

                            <input
                                id="checkout"
                                name="checkout"
                                type="date"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="adults">Number of adults *</label>

                            <input
                                id="adults"
                                name="adults"
                                type="number"
                                min="1"
                                max="20"
                                value="2"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="children">Number of children</label>

                            <input
                                id="children"
                                name="children"
                                type="number"
                                min="0"
                                max="20"
                                value="0"
                            >
                        </div>


                        <div class="field">
                            <label for="guests">
                                Total number of guests *
                            </label>

                            <input
                                id="guests"
                                name="guests"
                                type="number"
                                min="1"
                                max="40"
                                value="2"
                                required
                            >
                        </div>


                        <div class="field">
                            <label for="rooms">Number of rooms *</label>

                            <input
                                id="rooms"
                                name="rooms"
                                type="number"
                                min="1"
                                max="10"
                                value="1"
                                required
                            >
                        </div>


                        <div class="field full">
                            <label for="roomType">Room type *</label>

                            <select
                                id="roomType"
                                name="roomType"
                                required
                            >
                                <option value="">
                                    Select a room type
                                </option>

                                <option>Single Room</option>
                                <option>Double Room</option>
                                <option>Deluxe Room</option>
                                <option>Family Room</option>
                            </select>
                        </div>


                        <fieldset
                            class="field full"
                            style="border:0;padding:0;margin:0"
                        >

                            <legend>Preferred contact method</legend>

                            <div class="radio-row">

                                <label>
                                    <input
                                        type="radio"
                                        name="contact"
                                        value="Email"
                                        checked
                                    >
                                    Email
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="contact"
                                        value="Phone"
                                    >
                                    Phone
                                </label>

                            </div>

                        </fieldset>


                        <div class="field full">

                            <label for="requests">
                                Special requests
                            </label>

                            <textarea
                                id="requests"
                                name="requests"
                                placeholder="Arrival time, accessibility needs, or other requests"
                            ></textarea>

                        </div>


                    </div>


                    <div class="form-actions">

                        <button class="btn" type="submit">
                            Submit enquiry →
                        </button>

                        <button
                            class="btn secondary"
                            type="reset"
                        >
                            Clear form
                        </button>

                    </div>


                    <p
                        class="muted"
                        style="font-size:12px;margin-top:14px"
                    >
                        * Required fields. This is a demonstration
                        form. Your details are not sent to a server.
                    </p>

                </form>

            </div>

        </section>

    `;
}


/* =====================================================
   9. GALLERY PAGE
   Route: /gallery
   ===================================================== */

function galleryPage() {
    return `

        ${createBanner(
        "Photo collection",
        "Gallery",
        "A photo-grid layout for Sodepur and Panihati's heritage sites. Replace the blank slots with photographs you have permission to use."
    )}

        <section class="section">

            <div class="container">

                <div
                    class="notice"
                    style="margin-bottom:24px"
                >
                    Visual archives and authentic heritage photography showcasing the sacred ghats, temples, historic estates, and community landmarks of Sodepur and Panihati.
                </div>


                <div class="gallery-grid">

                    ${galleryItems.map(function (galleryItem) {

        const site = heritage.find(function (item) {
            return item.slug === galleryItem.slug;
        });

        const imageUrl = site ? site.image : "";

        return `
                            <figure class="gallery-item">

                                ${imageSlot(
            galleryItem.name,
            imageUrl
        )}

                                <figcaption>
                                    ${escapeHtml(galleryItem.name)}
                                </figcaption>

                            </figure>
                        `;

    }).join("")}

                </div>

            </div>

        </section>

    `;
}


/* =====================================================
   10. ROUTE NORMALIZATION & RESOLUTION
   ===================================================== */

function normalizePath(path) {
    if (!path || path === "/" || path === "" || path === "#" || path === "#/") {
        return "/";
    }

    let cleaned = path.replace(/^#\/?/, "/");
    cleaned = cleaned.replace(/\/+$/, "");
    return cleaned.startsWith("/") ? cleaned : "/" + cleaned;
}

function getCurrentPath() {
    if (window.location.hash) {
        return normalizePath(window.location.hash);
    }

    const path = normalizePath(window.location.pathname);
    if (routes[path]) {
        return path;
    }

    if (path.endsWith("/index.html") || path.endsWith("\\index.html")) {
        return "/";
    }

    return path;
}


/* =====================================================
   11. MAIN RENDER FUNCTION
   ===================================================== */

function render() {

    const path = getCurrentPath();

    const route = routes[path];

    const app = document.getElementById("app");


    /* Update browser tab title. */

    document.title = (
        route
            ? route.title
            : "Page Not Found"
    ) + " | Explore Sodepur";


    /* Update active navigation link. */

    document.querySelectorAll(".main-nav a").forEach(function (link) {

        const linkPath = normalizePath(
            link.getAttribute("href")
        );

        const isActive =
            linkPath === path ||
            (
                path.startsWith("/heritage/") &&
                linkPath === "/heritage"
            );

        link.classList.toggle("active", isActive);

    });


    /* Handle unknown routes. */

    if (!route) {

        app.innerHTML = `

            ${createBanner(
            "404",
            "Page not found",
            "This route is not part of the Explore Sodepur website."
        )}

            <section class="section">

                <div class="container">

                    <a
                        class="btn"
                        href="/"
                        data-link
                    >
                        Return home
                    </a>

                </div>

            </section>

        `;

    } else if (route.type === "home") {

        app.innerHTML = homePage();

    } else if (route.type === "heritage") {

        app.innerHTML = heritagePage();

    } else if (route.type === "booking") {

        app.innerHTML = bookingPage();

    } else if (route.type === "gallery") {

        app.innerHTML = galleryPage();

    } else if (route.type === "detail") {

        app.innerHTML = detailPage(route.item);

    }


    /* Scroll to the top after navigation. */

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    /* Close the mobile menu after navigation. */

    const mainNav = document.getElementById("mainNav");

    const menuToggle = document.getElementById("menuToggle");

    if (mainNav) {
        mainNav.classList.remove("open");
    }

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
    }

}


/* =====================================================
   12. CLIENT-SIDE NAVIGATION
   ===================================================== */

/*
   Intercepts internal navigation links and changes the URL
   without reloading the whole page.
*/

document.addEventListener("click", function (event) {

    const link = event.target.closest("a[data-link]");

    if (!link) {
        return;
    }

    const href = link.getAttribute("href");
    if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
        return;
    }

    event.preventDefault();

    const targetRoute = normalizePath(href);
    if (targetRoute === "/") {
        if (window.location.hash) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
        render();
    } else {
        window.location.hash = targetRoute;
        render();
    }

});


/* Support browser Back and Forward buttons and hash changes. */

window.addEventListener("popstate", function () {
    render();
});

window.addEventListener("hashchange", function () {
    render();
});


/* =====================================================
   13. MOBILE NAVIGATION
   ===================================================== */

const menuToggle = document.getElementById("menuToggle");

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        const mainNav = document.getElementById("mainNav");

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

}


/* =====================================================
   14. TOAST NOTIFICATION
   ===================================================== */

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) {
        alert(message);
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, 3200);

}


/* =====================================================
   15. HOTEL BOOKING FORM VALIDATION
   ===================================================== */

document.addEventListener("submit", function (event) {

    if (event.target.id !== "bookingForm") {
        return;
    }

    event.preventDefault();

    const form = event.target;


    /* Check that the checkout date is after check-in. */

    const checkinDate = new Date(
        form.checkin.value + "T00:00:00"
    );

    const checkoutDate = new Date(
        form.checkout.value + "T00:00:00"
    );


    if (checkoutDate <= checkinDate) {

        showToast(
            "Check-out date must be after the check-in date."
        );

        form.checkout.focus();

        return;
    }


    /* Check guest numbers. */

    const adults = Number(form.adults.value || 0);

    const children = Number(form.children.value || 0);

    const totalGuests = Number(form.guests.value || 0);


    if (totalGuests !== adults + children) {

        showToast(
            "Total guests should equal adults plus children."
        );

        form.guests.focus();

        return;
    }


    /* Successful front-end validation. */

    showToast(
        "Demo enquiry validated. No reservation was sent or stored."
    );

    form.reset();

});


/* =====================================================
   16. CLEAR BOOKING FORM
   ===================================================== */

document.addEventListener("reset", function (event) {

    if (event.target.id === "bookingForm") {

        setTimeout(function () {

            showToast("Form cleared.");

        }, 0);

    }

});


/* =====================================================
   17. INITIALIZE THE WEBSITE
   ===================================================== */

/*
   The website starts by rendering the route that matches
   the current browser URL.
*/

render();
