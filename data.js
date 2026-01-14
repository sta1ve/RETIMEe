console.log("✅ data.js loaded");

// Community Art настройки
const COMMUNITY_ART_MEDIA = "https://i.postimg.cc/P59r1zKg/G-j-Ly4WXs-AE9u-Lp.jpg";
const COMMUNITY_ARTIST_LINK = "https://x.com/syowro";

// Community Handmade настройки
const COMMUNITY_HANDMADE_MEDIA = "https://i.postimg.cc/8PxmfLRx/G-e-HC0Wag-AA9S20.jpg";
const COMMUNITY_HANDMADE_ARTIST_LINK = "https://x.com/0xpinkrabbits";

// Community Video настройки - ИСПРАВЛЕНО
// Вариант 1: Прямая ссылка на GIF (используйте ТОЛЬКО URL изображения)
const COMMUNITY_VIDEO_MEDIA = "https://i.postimg.cc/zGX0TT3P/G-c2XEFWYAAcf9N.gif";
const COMMUNITY_VIDEO_ARTIST_LINK = "https://x.com/22hizzzaaa";

// Логотип RE
const FOOTER_LOGO = "https://m4lka.notion.site/image/attachment%3A2be03fbf-dae3-40f3-b484-69381a78e79a%3Areusde.webp?table=block&id=2c9172ac-99a3-80a2-85a6-e03de84da728&spaceId=09b5d55b-2dbd-409f-a198-a7e599deb266&width=2000&userId=&cache=v2";

// Изображение для Issue #1 
const ISSUE_1_IMAGE = "https://i.postimg.cc/1tsFctTK/1.png"; 

// Изображение для даты Issue #1
const ISSUE_1_DATE_IMAGE = "https://i.postimg.cc/wMxbP9t0/2.png"; 

const issues = [
  {
    number: 1,
    date: "September 18, 2026",
    dateRu: "18 сентября 2026",
    dateUk: "18 вересня 2026",
    dateVi: "18 tháng 9, 2026",
    dateId: "18 September 2026",
    articles: [
      {
        title: {
          en: "Protocol Update",
          ru: "Обновление протокола",
          uk: "Оновлення протоколу",
          vi: "Cập nhật giao thức",
          id: "Pembaruan Protokol"
        },
        text: {
          en: "By the end of 2025, the reinsurance market reached record scale as capital flowed into standardized instruments like public catastrophe bonds, driving issuance higher but compressing spreads and returns. This reflects market maturity: where capital is abundant, excess returns fade. Re operates in the underserved segment of smaller, bespoke risks. At year-end, Re reached nearly $400M in total value locked, driven by disciplined underwriting and selective capital deployment rather than crowded public markets.",
          ru: "К концу 2025 года рынок перестрахования достиг рекордных масштабов на фоне притока капитала в стандартизированные инструменты, включая публичные catastrophe bonds, что привело к росту размещений и снижению доходностей. Это признак зрелости рынка. Re работает в сегменте небольших и нестандартных рисков. На конец года TVL протокола приблизился к $400 млн, рост обеспечен дисциплинированным андеррайтингом и выборочным размещением капитала.",
          uk: "Наприкінці 2025 року ринок перестрахування досяг рекордних обсягів через приплив капіталу в стандартизовані інструменти, що спричинило зростання випусків і зниження дохідності. Це ознака зрілості ринку. Re працює з невеликими та нестандартними ризиками. Станом на кінець року TVL протоколу наблизився до $400 млн, завдяки дисциплінованому андеррайтингу та вибірковому розміщенню капіталу.",
          vi: "Đến cuối năm 2025, thị trường tái bảo hiểm đạt quy mô kỷ lục do dòng vốn đổ vào các công cụ tiêu chuẩn hóa, làm tăng phát hành nhưng giảm lợi suất. Đây là dấu hiệu của sự trưởng thành thị trường. Re tập trung vào các rủi ro nhỏ và tùy chỉnh. Cuối năm, TVL của Re đạt gần 400 triệu USD, nhờ kỷ luật underwriting và phân bổ vốn có chọn lọc.",
          id: "Pada akhir 2025, pasar reasuransi mencapai skala tertinggi seiring masuknya modal ke instrumen terstandarisasi, mendorong penerbitan namun menekan imbal hasil. Ini menandakan kedewasaan pasar. Re berfokus pada risiko kecil dan khusus. Hingga akhir tahun, TVL Re mendekati $400 juta, didorong oleh underwriting yang disiplin dan penempatan modal yang selektif."
        }
      },
      {
        title: {
          en: "Discord Updates",
          ru: "Обновления в Дискорде",
          uk: "Оновлення в Discord",
          vi: "Cập nhật trên Discord",
          id: "Pembaruan di Discord"
        },
        text: {
          en: "We’re happy to welcome Not Emperor Osmo to the Re team, supporting the project with marketing. As Re continues to grow, we’re also updating how the #re-community channel is used to keep discussions focused and welcoming. Low-effort messages, spam, mass tagging, and links are now restricted. These changes help make Re easier to understand and engage with for everyone.<br>Also, a new role was added!!! It’s called MEGA Legend.",
          ru: "Мы рады приветствовать Not Emperor Osmo в команде Re — он будет поддерживать проект в направлении маркетинга. По мере роста Re мы также обновили правила использования канала #re-community, чтобы обсуждения оставались полезными и комфортными. Спам, сообщения без ценности, массовые теги и ссылки теперь ограничены. Это делает сообщество более понятным и открытым для всех.<br>Также была добавлена новая роль!!! Она называется MEGA Legend.",
          uk: "Раді вітати Not Emperor Osmo у команді Re — він підтримуватиме проєкт у напрямку маркетингу. У міру зростання Re ми також оновили правила каналу #re-community, щоб обговорення залишалися змістовними та дружніми. Спам, низькоякісні повідомлення, масові теги та посилання тепер обмежені.<br>Також була додана нова роль!!! Вона називається MEGA Legend.",
          vi: "Chúng tôi vui mừng chào đón Not Emperor Osmo gia nhập đội ngũ Re, hỗ trợ dự án về marketing. Cùng với sự phát triển của Re, kênh #re-community đã được cập nhật để giữ thảo luận tập trung và thân thiện. Spam, tin nhắn kém chất lượng, gắn thẻ hàng loạt và liên kết hiện đã bị hạn chế.<br>Ngoài ra, một vai trò mới đã được thêm vào!!! Nó có tên là MEGA Legend.",
          id: "Kami dengan senang hati menyambut Not Emperor Osmo bergabung dengan tim Re, mendukung proyek di bidang pemasaran. Seiring pertumbuhan Re, kami juga memperbarui aturan di kanal #re-community agar diskusi tetap fokus dan ramah. Spam, pesan bernilai rendah, tag massal, dan tautan kini dibatasi.<br>Selain itu, sebuah role baru telah ditambahkan!!! Namanya MEGA Legend."
        }
      },
      {
        title: {
          en: "RE-EVENTS",
          ru: "RE-события",
          uk: "RE-події",
          vi: "RE-sự kiện",
          id: "RE-acara"
        },
        text: {
          en: "Ka(re)oke - Wednesday, January 14, 2026, 18:00<br><br>Clash (re)yale - Thursday, January 15, 2026, 18:00<br><br>Year-end recap - Friday, January 16, 2026, 18:00<br><br>Gartic Phone - Saturday, January 17, 2026, 18:00<br><br>jklm game event - Sunday, January 18, 2026, 18:00<br><br>For details, check RE-announcements or ask the helpers.",
          ru: "Ka(re)oke - среда, 14 января 2026 г. 18:00<br><br>Clash (re)yale - четверг, 15 января 2026 г. 18:00<br><br>Year-end recap - пятница, 16 января 2026 г. 18:00<br><br>Gartic Phone - суббота, 17 января 2026 г. 18:00<br><br>jklm game event - воскресенье, 18 января 2026 г. 18:00<br><br>За деталями зайдите в RE-announcements или спросите у хелперов.",
          uk: "Ka(re)oke - середа, 14 січня 2026 р. 18:00<br><br>Clash (re)yale - четвер, 15 січня 2026 р. 18:00<br><br>Year-end recap - п'ятниця, 16 січня 2026 р. 18:00<br><br>Gartic Phone - субота, 17 січня 2026 р. 18:00<br><br>jklm game event - неділя, 18 січня 2026 р. 18:00<br><br>За деталями зайдіть у RE-announcements або запитайте хелперів.",
          vi: "Ka(re)oke - Thứ Tư, 14 tháng 1 năm 2026, 18:00<br><br>Clash (re)yale - Thứ Năm, 15 tháng 1 năm 2026, 18:00<br><br>Year-end recap - Thứ Sáu, 16 tháng 1 năm 2026, 18:00<br><br>Gartic Phone - Thứ Bảy, 17 tháng 1 năm 2026, 18:00<br><br>jklm game event - Chủ Nhật, 18 tháng 1 năm 2026, 18:00<br><br>Để biết thêm chi tiết, hãy vào RE-announcements hoặc hỏi các helper.",
          id: "Ka(re)oke - Rabu, 14 Januari 2026, 18:00<br><br>Clash (re)yale - Kamis, 15 Januari 2026, 18:00<br><br>Year-end recap - Jumat, 16 Januari 2026, 18:00<br><br>Gartic Phone - Sabtu, 17 Januari 2026, 18:00<br><br>jklm game event - Minggu, 18 Januari 2026, 18:00<br><br>Untuk detail lebih lanjut, silakan kunjungi RE-announcements atau tanyakan kepada para helper."
        }
      },
    ],
    metrics: {
      TVL: "$395,385,709",
      "Onchain Capital": "$115,965,574",
      "Offchain Capital": "$64,278,960",
      "Premium Receivable": "$215,141,174"
    },
    social: [
      {
        author: "RE Protocol",
        link: "https://x.com/re",
        icon: "https://pbs.twimg.com/profile_images/1999166607638265856/-2lfeHam_400x400.jpg",
        text: {
          en: "Re Protocol is a blockchain-based system that connects traditional insurance markets with decentralized finance (DeFi).",
          ru: "Re Protocol - это блокчейн-система, которая соединяет традиционные страховые рынки с децентрализованными финансами (DeFi).",
          uk: "Re Protocol - це блокчейн-система, яка поєднує традиційні страхові ринки з децентралізованими фінансами (DeFi).",
          vi: "Re Protocol là một hệ thống dựa trên blockchain, kết nối thị trường bảo hiểm truyền thống với tài chính phi tập trung (DeFi).",
          id: "Re Protocol adalah sistem berbasis blockchain yang menghubungkan pasar asuransi tradisional dengan keuangan terdesentralisasi (DeFi)."
        },
        tweet: {
          en: "The State of the Reinsurance Market at Year-End 2025. And How Re Is Navigating It. (See the full version on X.)",
          ru: "Состояние рынка перестрахования на конец 2025 года и то, как Re ориентируется в текущих условиях. (Полную версию смотрите в X.)",
          uk: "Стан ринку перестрахування на кінець 2025 року та те, як Re орієнтується в цих умовах. (Повну версію дивіться на X.)",
          vi: "Tình hình thị trường tái bảo hiểm vào cuối năm 2025 và cách Re đang thích ứng. (Xem phiên bản đầy đủ trên X.)",
          id: "Kondisi pasar reasuransi pada akhir tahun 2025 dan bagaimana Re menavigasinya. (Lihat versi lengkap di X.)"
        }
      },
      {
        author: "Karn Saroya",
        link: "https://x.com/karnsaroya",
        icon: "https://pbs.twimg.com/profile_images/1757146411962146816/YjmvhwIZ_400x400.jpg",
        text: {
          en: "Co-founder & CEO, RE",
          ru: "Сооснователь и CEO, RE",
          uk: "Співзасновник та CEO, RE",
          vi: "Đồng sáng lập & CEO, RE",
          id: "Co-founder & CEO, RE"
        },
        tweet: {
          en: "Listen in, get updates on Re and the evolution of the risk substrate that backs all economic activity n chill (See the full version on X.)",
          ru: "Слушайте, получайте обновления о Re и развитии рискованной основы, которая поддерживает всю экономическую активность, и расслабляйтесь (Смотрите полную версию на X).",
          uk: "Слухайте, отримуйте оновлення про Re та еволюцію ризикової основи, яка підтримує всю економічну діяльність, і розслабляйтеся (Дивіться повну версію на X).",
          vi: "Hãy lắng nghe, cập nhật về Re và sự phát triển của cơ sở rủi ro hỗ trợ tất cả hoạt động kinh tế và thư giãn (Xem phiên bản đầy đủ trên X).",
          id: "Dengarkan, dapatkan pembaruan tentang Re dan evolusi substrat risiko yang mendukung semua aktivitas ekonomi dan santai saja (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Natalie Gray",
        link: "https://x.com/natalieevagray",
        icon: "https://pbs.twimg.com/profile_images/1919825728318930947/a-Z1wC2N_400x400.jpg",
        text: {
          en: "Co-founder & Mommy, RE — designing (re)al experiences and narratives to reinsure trillions on-chain",
          ru: "Сооснователь и Мамочка, RE — создание (ре)альных опытов и нарративов для перестрахования",
          uk: "Співзасновниця та Мамочка, RE — створення (ре)альних досвідів і наративів для перестрахування трильйонів в ончейні",
          vi: "Đồng sáng lập & Mommy, RE — thiết kế trải nghiệm và câu chuyện (re)al để tái bảo hiểm hàng nghìn tỷ đô trên blockchain",
          id: "Co-founder & Mommy, RE — merancang pengalaman dan narasi (re)al untuk mereasuransikan triliunan secara on-chain"
        },
        tweet: {
          en: "Done with hype (See the full version on X.)",
          ru: "Хватит шумихи (Смотрите полную версию на X).",
          uk: "Досить ажіотажу (Дивіться повну версію на X).",
          vi: "Chán sự thổi phồng rồi (Xem phiên bản đầy đủ trên X).",
          id: "Sudah cukup hype (Lihat versi lengkap di X)."
        }
      },
      {
        author: "ChazEevee",
        link: "https://x.com/ChazEevee",
        icon: "https://pbs.twimg.com/profile_images/2007836099943563264/pggTViTw_400x400.jpg",
        text: {
          en: "Community Manager, RE",
          ru: "Коммьюнити-менеджер, RE",
          uk: "Ком'юніті-менеджер, RE",
          vi: "Quản lý cộng đồng, RE",
          id: "Manajer Komunitas, RE"
        },
        tweet: {
          en: "one of my goals this year is to let myself be bored more (See the full version on X.)",
          ru: "Одна из моих целей в этом году — позволять себе чаще скучать (Смотрите полную версию на X).",
          uk: "Одна з моїх цілей цього року — дозволяти собі нудьгувати більше (Дивіться повну версію на X).",
          vi: "Một trong những mục tiêu của tôi trong năm nay là để bản thân cảm thấy chán nhiều hơn (Xem phiên bản đầy đủ trên X).",
          id: "Salah satu tujuan saya tahun ini adalah membiarkan diri saya bosan lebih sering (Lihat versi lengkap di X)."
        }
      },
      {
        author: "j.mike ./",
        link: "https://x.com/miketwinks",
        icon: "https://pbs.twimg.com/profile_images/1972363197458866176/PAbBCZTs_400x400.jpg",
        text: {
          en: "Vibe Community Curator of the RE Community",
          ru: "Вайбовый коммьюнити-куратор сообщества RE",
          uk: "Вайбовий ком'юніті-куратор спільноти RE",
          vi: "Người quản lý vibe của cộng đồng RE",
          id: "Vibe Community Curator komunitas RE"
        },
        tweet: {
          en: "upd: privacy just took the top narrative in crypto twitter +8.43% in 7d (See the full version on X.)",
          ru: "Обновление: приватность только что стала главной темой в крипто-твиттере, +8,43% за 7 дней (Смотрите полную версию на X).",
          uk: "Оновлення: приватність щойно стала головною темою у крипто-твіттері, +8,43% за 7 днів (Дивіться повну версію на X).",
          vi: "Cập nhật: quyền riêng tư vừa trở thành chủ đề hàng đầu trên crypto Twitter, +8,43% trong 7 ngày (Xem phiên bản đầy đủ trên X).",
          id: "Pembaruan: privasi baru saja menjadi narasi utama di crypto Twitter, +8,43% dalam 7 hari (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Cliff White",
        link: "https://x.com/thecliffwhite",
        icon: "https://pbs.twimg.com/profile_images/2002818403602714624/tM6qyVFa_400x400.jpg",
        text: {
          en: "Co-founder, RE Labs",
          ru: "Сооснователь, RE Labs",
          uk: "Співзасновник, RE Labs",
          vi: "Đồng sáng lập, RE Labs",
          id: "Co-founder, RE Labs"
        },
        tweet: {
          en: "Great to see new markets embracing the predictability of a reinsurance product like this. (See the full version on X.)",
          ru: "Здорово видеть, что новые рынки принимают предсказуемость такого перестраховочного продукта (Смотрите полную версию на X).",
          uk: "Чудово бачити, що нові ринки приймають передбачуваність такого перестрахового продукту (Дивіться повну версію на X).",
          vi: "Thật tuyệt khi thấy các thị trường mới chấp nhận tính dự đoán của một sản phẩm tái bảo hiểm như thế này (Xem phiên bản đầy đủ trên X).",
          id: "Senang melihat pasar baru menerima prediktabilitas produk reasuransi seperti ini (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Ben Aneesh",
        link: "https://x.com/benaneesh",
        icon: "https://pbs.twimg.com/profile_images/1985752135888203776/r5zxeVS8_400x400.jpg",
        text: {
          en: "Co-founder & Engineer, RE — bringing (re)insurance on-chain",
          ru: "Сооснователь и инженер, RE — вывод (ре)страхования в ончейн",
          uk: "Співзасновник та інженер, RE — виведення (ре)страхування в ончейн",
          vi: "Đồng sáng lập & Kỹ sư, RE — đưa (tái) bảo hiểm lên on-chain",
          id: "Co-founder & Engineer, RE — membawa (re)asuransi ke on-chain"
        },
        tweet: {
          en: "most yield is either hard to understand or hard to trust. (See the full version on X.)",
          ru: "Большинство доходностей либо трудно понять, либо трудно доверять (Смотрите полную версию на X).",
          uk: "Більшість прибутковості або важко зрозуміти, або важко довіряти (Дивіться повну версію на X).",
          vi: "Hầu hết lợi suất hoặc khó hiểu, hoặc khó tin cậy (Xem phiên bản đầy đủ trên X).",
          id: "Sebagian besar hasil sulit dipahami atau sulit dipercaya (Lihat versi lengkap di X)."
        }
      },
      {
        author: "ItsMeJon",
        link: "https://x.com/ContraryActuary",
        icon: "https://pbs.twimg.com/profile_images/2004218491876909056/-q17SRwH_400x400.jpg",
        text: {
          en: "@RE New features are coming! Stay tuned for exciting updates.",
          ru: "@RE Новые функции в разработке! Следите за захватывающими обновлениями.",
          uk: "@RE Нові функції в розробці! Слідкуйте за захоплюючими оновленнями.",
          vi: "@RE Các tính năng mới sắp ra mắt! Hãy theo dõi để cập nhật thú vị.",
          id: "@RE Fitur baru akan datang! Tetap ikuti untuk pembaruan menarik."
        },
        tweet: {
          en: "Re spent 2025 proving that reinsurance can operate transparently onchain, with real counterparties, real premiums, and disciplined underwriting. 2026 is about scaling that foundation responsibly. Onchain finance only works long-term when trust and verification come first. (See the full version on X.)",
          ru: "Re провела 2025 год, доказывая, что перестрахование может работать прозрачно на блокчейне, с реальными контрагентами, реальными премиями и дисциплинированным андеррайтингом. 2026 год посвящен масштабированию этой базы с ответственностью. Финансы на блокчейне работают долгосрочно только тогда, когда доверие и проверка стоят на первом месте (Смотрите полную версию на X).",
          uk: "Re провела 2025 рік, доводячи, що перестрахування може працювати прозоро на блокчейні, з реальними контрагентами, реальними преміями та дисциплінованим андеррайтингом. 2026 рік присвячений масштабуванню цієї основи відповідально. Фінанси на блокчейні працюють довгостроково лише тоді, коли довіра та перевірка стоять на першому місці (Дивіться повну версію на X).",
          vi: "Re đã dành năm 2025 để chứng minh rằng tái bảo hiểm có thể hoạt động minh bạch trên chuỗi, với các đối tác thực sự, phí bảo hiểm thực sự và đánh giá rủi ro kỷ luật. Năm 2026 là về việc mở rộng nền tảng đó một cách có trách nhiệm. Tài chính trên chuỗi chỉ hoạt động lâu dài khi niềm tin và xác minh được đặt lên hàng đầu (Xem phiên bản đầy đủ trên X).",
          id: "Re menghabiskan tahun 2025 untuk membuktikan bahwa reasuransi dapat beroperasi secara transparan di onchain, dengan pihak lawan nyata, premi nyata, dan underwriting yang disiplin. Tahun 2026 adalah tentang memperluas fondasi itu secara bertanggung jawab. Keuangan onchain hanya bekerja jangka panjang ketika kepercayaan dan verifikasi diutamakan (Lihat versi lengkap di X)."
        }
      },
      {
        author: "Saul",
        link: "https://x.com/SaulCapital",
        icon: "https://pbs.twimg.com/profile_images/1676182300789293057/hlyGdn1i_400x400.jpg",
        text: {
          en: "Growth, RE",
          ru: "Рост, RE",
          uk: "Зростання, RE",
          vi: "Tăng trưởng, RE",
          id: "Growth, RE"
        },
        tweet: {
          en: "great tool for observing hyperliquid traders, check them out (See the full version on X.)",
          ru: "Отличный инструмент для наблюдения за гиперликвидными трейдерами, посмотрите (Смотрите полную версию на X).",
          uk: "Чудовий інструмент для спостереження за гіперліквідними трейдерами, подивіться (Дивіться повну версію на X).",
          vi: "Công cụ tuyệt vời để quan sát các trader siêu thanh khoản, hãy xem thử (Xem phiên bản đầy đủ trên X).",
          id: "Alat yang bagus untuk mengamati trader yang sangat likuid, periksa mereka (Lihat versi lengkap di X)."
        }
      },
      {
        author: "@st3phdoteth",
        link: "https://x.com/st3phdoteth",
        icon: "https://pbs.twimg.com/profile_images/2000640002490015744/tx7gjBch_400x400.jpg",
        text: {
          en: "Marketing Chad, RE — serving up insights",
          ru: "Маркетинг-чад, RE — делимся инсайдами",
          uk: "Маркетинг-чад, RE — ділимося інсайдами",
          vi: "Marketing Chad, RE — chia sẻ những góc nhìn chuyên sâu",
          id: "Marketing Chad, RE — menyajikan insight"
        },
        tweet: {
          en: "getting ready to listen to @karnsaroya talk about @re on @therollupco (See the full version on X.)",
          ru: "Готовлюсь послушать @karnsaroya о @re на @therollupco (Смотрите полную версию на X).",
          uk: "Готуюся послухати @karnsaroya про @re на @therollupco (Дивіться повну версію на X).",
          vi: "Chuẩn bị nghe @karnsaroya nói về @re trên @therollupco (Xem phiên bản đầy đủ trên X).",
          id: "Bersiap-siap mendengarkan @karnsaroya berbicara tentang @re di @therollupco (Lihat versi lengkap di X)."
        }
      }
    ],
    art: {
      media: COMMUNITY_ART_MEDIA,
      author: "@syowro",
      link: COMMUNITY_ARTIST_LINK
    },
    handmade: {
      media: COMMUNITY_HANDMADE_MEDIA,
      author: "@0xpinkrabbits",
      link: COMMUNITY_HANDMADE_ARTIST_LINK
    },
    video: {
      media: COMMUNITY_VIDEO_MEDIA,
      author: "@22hizzzaaa",
      link: COMMUNITY_VIDEO_ARTIST_LINK
    }
  }
];

const translations = {
  en: {
    metricsTitle: "Key Metrics",
    archiveTitle: "Archive",
    socialTitle: "RE TEAM",
    artTitle: "↓Best art of the last 2 days↓",
    handmadeTitle: "↓Best handmade work of the last 2 days↓",
    videoTitle: "↓Best video of the last 2 days↓",
    footerText: "Published every two days",
    by: "Artwork by",
    noActivity: "No recent activity",
    issue: "Issue №",
    createdBy: "Created by",
    linksTo: "Links to",
    madeFor: "Made for RE community and its promotion",
    galleryButton: "GALLERY",
    galleryTitle: "Art Gallery",
    twitter: "Twitter",
    viewTweet: "View latest tweet",
    goToX: "Go to X profile",
    viewNewTweet: "Click to view the new tweet"
  },
  ru: {
    metricsTitle: "Ключевые метрики",
    archiveTitle: "Архив",
    socialTitle: "RE TEAM",
    artTitle: "↓Лучший арт за последние 2 дня↓",
    handmadeTitle: "↓Лучшая ручная работа за последние 2 дня↓",
    videoTitle: "↓Лучшее видео за последние 2 дня↓",
    footerText: "Выходит каждые два дня",
    by: "Работа автора",
    noActivity: "Нет недавней активности",
    issue: "Выпуск №",
    createdBy: "Создано",
    linksTo: "Ссылки на",
    madeFor: "Сделано для RE коммьюнити и его продвижения",
    galleryButton: "ГАЛЕРЕЯ",
    galleryTitle: "Галерея артов",
    twitter: "Twitter",
    viewTweet: "Посмотреть последний твит",
    goToX: "Перейти в X профиль",
    viewNewTweet: "Нажми чтобы посмотреть новый твит"
  },
  uk: {
    metricsTitle: "Ключові метрики",
    archiveTitle: "Архів",
    socialTitle: "RE TEAM",
    artTitle: "↓Найкращий арт за останні 2 дні↓",
    handmadeTitle: "↓Найкраща ручна робота за останні 2 дні↓",
    videoTitle: "↓Найкраще відео за останні 2 дні↓",
    footerText: "Виходить кожні два дні",
    by: "Робота автора",
    noActivity: "Немає недавньої активності",
    issue: "Випуск №",
    createdBy: "Створено",
    linksTo: "Посилання на",
    madeFor: "Зроблено для RE спільноти та її просування",
    galleryButton: "ГАЛЕРЕЯ",
    galleryTitle: "Галерея артів",
    twitter: "Twitter",
    viewTweet: "Переглянути останній твіт",
    goToX: "Перейти в X профіль",
    viewNewTweet: "Натисни, щоб переглянути новий твіт"
  },
  vi: {
    metricsTitle: "Chỉ số chính",
    archiveTitle: "Lưu trữ",
    socialTitle: "RE TEAM",
    artTitle: "Tác phẩm nghệ thuật hay nhất trong 2 ngày qua↓",
    handmadeTitle: "Tác phẩm thủ công hay nhất trong 2 ngày qua↓",
    videoTitle: "Video hay nhất trong 2 ngày qua↓",
    footerText: "Xuất bản mỗi hai ngày",
    by: "Tác phẩm của",
    noActivity: "Không có hoạt động gần đây",
    issue: "Số phát hành №",
    createdBy: "Được tạo bởi",
    linksTo: "Liên kết đến",
    madeFor: "Được tạo cho cộng đồng RE và quảng bá của nó",
    galleryButton: "THƯ VIỆN",
    galleryTitle: "Thư viện nghệ thuật",
    twitter: "Twitter",
    viewTweet: "Xem tweet mới nhất",
    goToX: "Đi tới hồ sơ X",
    viewNewTweet: "Nhấn để xem tweet mới"
  },
  id: {
    metricsTitle: "Metrik Utama",
    archiveTitle: "Arsip",
    socialTitle: "RE TEAM",
    artTitle: "↓Karya seni terbaik dalam 2 hari terakhir↓",
    handmadeTitle: "↓Karya tangan terbaik dalam 2 hari terakhir↓",
    videoTitle: "↓Video terbaik dalam 2 hari terakhir↓",
    footerText: "Diterbitkan setiap dua hari",
    by: "Karya oleh",
    noActivity: "Tidak ada aktivitas terkini",
    issue: "Edisi №",
    createdBy: "Dibuat oleh",
    linksTo: "Tautan ke",
    madeFor: "Dibuat untuk komunitas RE dan promosinya",
    galleryButton: "GALERI",
    galleryTitle: "Galeri Seni",
    twitter: "Twitter",
    viewTweet: "Lihat tweet terbaru",
    goToX: "Pergi ke profil X",
    viewNewTweet: "Klik untuk melihat tweet terbaru"
  }
};

let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
let currentIssueIndex = 0;

// Маппинг имен к их X профилям
const userXProfiles = {
  'Not Emperor Osmo': 'https://x.com/Flowslikeosmo',
  '@delay': 'https://x.com/nevergiveduck',
  'delay': 'https://x.com/nevergiveduck',
  '@dreshik': 'https://x.com/dreshik_',
  'dreshik': 'https://x.com/dreshik_'
};

function replaceNamesWithLinks(text) {
  if (!text) return text;
  

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;
  
 
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      let result = text;
      let wasChanged = false;
      
     
      const sortedNames = Object.keys(userXProfiles).sort((a, b) => b.length - a.length);
      
      sortedNames.forEach(name => {
        const profileUrl = userXProfiles[name];
        
        const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
       
        const regex = new RegExp(`(^|[^\\w@])${escapedName}(?![\\w@])`, 'gi');
        
        const newResult = result.replace(regex, (match, prefix) => {
          
          const foundName = match.substring(prefix ? prefix.length : 0);
          wasChanged = true;
          return prefix + `<a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="user-link">${foundName}</a>`;
        });
        
        result = newResult;
      });
      
      if (wasChanged && result !== text) {
        
        const temp = document.createElement('div');
        temp.innerHTML = result;
        
        const parent = node.parentNode;
        while (temp.firstChild) {
          parent.insertBefore(temp.firstChild, node);
        }
        parent.removeChild(node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      
      if (node.tagName && node.tagName.toLowerCase() === 'a' && node.classList && node.classList.contains('user-link')) {
        return;
      }
      
      const children = Array.from(node.childNodes);
      children.forEach(processNode);
    }
  }
  
  
  const children = Array.from(tempDiv.childNodes);
  children.forEach(processNode);
  
  return tempDiv.innerHTML;
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  renderIssue();
  updateTranslations();
}

function updateTranslations() {
  const t = translations[currentLanguage];
  
  const archiveTitleEl = document.getElementById('archiveTitle');
  if (archiveTitleEl) archiveTitleEl.textContent = t.archiveTitle;
  
  const socialTitleEl = document.getElementById('socialTitle');
  if (socialTitleEl) socialTitleEl.textContent = t.socialTitle;
  
  const artTitleEl = document.getElementById('artTitle');
  if (artTitleEl) {
    artTitleEl.textContent = t.artTitle;
  }
  
  const footerTextEl = document.getElementById('footerText');
  if (footerTextEl) footerTextEl.textContent = t.footerText;
  
  const galleryButton = document.getElementById('galleryButton');
  if (galleryButton) {
    galleryButton.textContent = t.galleryButton;
  }
  
  const footerLogoEl = document.getElementById('footerLogo');
  if (footerLogoEl) {
    footerLogoEl.textContent = "re";
  }
  
  const creditsEl = document.getElementById('footerCredits');
  if (creditsEl) {
    creditsEl.innerHTML = `${t.createdBy} <a href="https://x.com/sta1ve69" target="_blank" rel="noopener noreferrer" class="footer-link">sta1ve</a> and <a href="https://x.com/gotfc_" target="_blank" rel="noopener noreferrer" class="footer-link">qos1mo</a>`;
  }
  
  const communityEl = document.getElementById('footerCommunity');
  if (communityEl) {
    communityEl.innerHTML = `${t.linksTo} <a href="https://www.notion.so/279e46cc240580fbb337c366b9e58e9b?v=284e46cc240580308955000c5400d304" target="_blank" rel="noopener noreferrer" class="footer-link footer-link-re">re</a><br>${t.madeFor}`;
  }
}

function loadIssue(index) {
  if (index >= 0 && index < issues.length) {
    currentIssueIndex = index;
    renderIssue();
  }
}

function showTweetModal(post) {
  const t = translations[currentLanguage];
  const tweet = typeof post.tweet === 'object' ? post.tweet[currentLanguage] : post.tweet;
  
 
  const handle = post.author
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '')
    .toLowerCase();
  
  
  const modal = document.createElement('div');
  modal.className = 'tweet-modal';
  modal.innerHTML = `
    <button class="tweet-modal-close" aria-label="Close">×</button>
    <div class="tweet-modal-content">
      <div class="tweet-card">
        <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="tweet-card-header">
          <img src="${post.icon}" alt="${post.author}" class="tweet-card-avatar" />
          <div class="tweet-card-author">
            <div class="tweet-card-name">${post.author}</div>
            <div class="tweet-card-handle">@${handle}</div>
          </div>
        </a>
        <div class="tweet-card-text">${tweet || t.noActivity}</div>
        <div class="tweet-card-footer">
          <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="tweet-card-link">
            <span class="tweet-x-icon">𝕏</span>
            <span>${t.goToX}</span>
          </a>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  
  setTimeout(() => modal.classList.add('active'), 10);
  
  
  const closeBtn = modal.querySelector('.tweet-modal-close');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
  
  
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

function renderIssue() {
  const current = issues[currentIssueIndex];
  const t = translations[currentLanguage];
  
  const issueNumberEl = document.getElementById("issueNumber");
  const issueDateEl = document.getElementById("issueDate");

  if (issueNumberEl) {
    
    const oldTextEl = issueNumberEl.parentNode.querySelector("#issueNumberText");
    if (oldTextEl) {
      oldTextEl.remove();
    }

    
    if (current.number === 1 && ISSUE_1_IMAGE) {
      issueNumberEl.src = ISSUE_1_IMAGE;
      issueNumberEl.alt = `${t.issue}${current.number}`;
      issueNumberEl.style.display = "block";
    } else {
      
      issueNumberEl.style.display = "none";
      const textEl = document.createElement("span");
      textEl.id = "issueNumberText";
      textEl.textContent = `${t.issue}${current.number}`;
      issueNumberEl.parentNode.insertBefore(textEl, issueNumberEl);
    }
  }

  if (issueDateEl) {
    
    const oldDateTextEl = issueDateEl.parentNode.querySelector("#issueDateText");
    if (oldDateTextEl) {
      oldDateTextEl.remove();
    }

    
    if (current.number === 1 && ISSUE_1_DATE_IMAGE) {
      issueDateEl.src = ISSUE_1_DATE_IMAGE;
      let dateText = current.date;
      if (currentLanguage === 'ru' && current.dateRu) dateText = current.dateRu;
      else if (currentLanguage === 'uk' && current.dateUk) dateText = current.dateUk;
      else if (currentLanguage === 'vi' && current.dateVi) dateText = current.dateVi;
      else if (currentLanguage === 'id' && current.dateId) dateText = current.dateId;
      issueDateEl.alt = dateText;
      issueDateEl.style.display = "block";
    } else {
      
      issueDateEl.style.display = "none";
      let dateText = current.date;
      if (currentLanguage === 'ru' && current.dateRu) dateText = current.dateRu;
      else if (currentLanguage === 'uk' && current.dateUk) dateText = current.dateUk;
      else if (currentLanguage === 'vi' && current.dateVi) dateText = current.dateVi;
      else if (currentLanguage === 'id' && current.dateId) dateText = current.dateId;
      const textEl = document.createElement("span");
      textEl.id = "issueDateText";
      textEl.textContent = dateText;
      issueDateEl.parentNode.insertBefore(textEl, issueDateEl);
    }
  }

  const articlesEl = document.getElementById("articles");
  if (articlesEl) {
    articlesEl.innerHTML = '';
    if (current.articles && current.articles.length > 0) {
      current.articles.forEach(a => {
        const el = document.createElement("article");
        const title = typeof a.title === 'object' ? a.title[currentLanguage] : a.title;
        let text = typeof a.text === 'object' ? a.text[currentLanguage] : a.text;
        
        text = replaceNamesWithLinks(text);
        el.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        articlesEl.appendChild(el);
      });
    }
  }

  const archiveEl = document.getElementById("archive");
  if (archiveEl) {
    archiveEl.innerHTML = '';
    issues.forEach((issue, index) => {
      if (index !== currentIssueIndex) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#";
        let issueDate = issue.date;
        if (currentLanguage === 'ru' && issue.dateRu) issueDate = issue.dateRu;
        else if (currentLanguage === 'uk' && issue.dateUk) issueDate = issue.dateUk;
        else if (currentLanguage === 'vi' && issue.dateVi) issueDate = issue.dateVi;
        else if (currentLanguage === 'id' && issue.dateId) issueDate = issue.dateId;
        link.textContent = `${t.issue}${issue.number} — ${issueDate}`;
        link.onclick = (e) => {
          e.preventDefault();
          loadIssue(index);
        };
        li.appendChild(link);
        archiveEl.appendChild(li);
      }
    });
  }

  const socialEl = document.getElementById("socialContent");
  if (socialEl) {
    socialEl.innerHTML = '';
    if (current.social && current.social.length > 0) {
      current.social.forEach(post => {
        const div = document.createElement("div");
        div.className = "social-post";
        
        const authorText = post.author;
        const postIcon = post.icon || "";
        const postText = typeof post.text === 'object' ? post.text[currentLanguage] : post.text;
        
        const iconEl = postIcon && postIcon.trim() !== ""
          ? `<img src="${postIcon}" class="social-author-icon" />`
          : "";
        
       
        div.style.cursor = "pointer";
        div.onclick = function() {
          showTweetModal(post);
        };
        
        div.innerHTML = `
        <div class="social-author">${iconEl}${authorText}</div>
      
        <div class="social-text">${postText}</div>
      
        <div class="social-view-tweet">
          ${t.viewNewTweet}
        </div>
      `;           
        socialEl.appendChild(div);
      });
    } else {
      socialEl.innerHTML = `<p class="muted">${t.noActivity}</p>`;
    }
  }

  const artEl = document.getElementById("communityArt");
  if (artEl) {
    let artHTML = '';
    
    
    function getMediaElement(mediaUrl) {
      let mediaElement = "";
      
      if (mediaUrl.includes("youtube.com") || mediaUrl.includes("youtu.be")) {
        let videoId = "";
        
        try {
          if (mediaUrl.includes("youtube.com/embed/")) {
            videoId = mediaUrl.split("youtube.com/embed/")[1].split("?")[0].split("&")[0];
          } else if (mediaUrl.includes("youtube.com/shorts/")) {
            videoId = mediaUrl.split("youtube.com/shorts/")[1].split("?")[0].split("&")[0];
          } else if (mediaUrl.includes("youtu.be/")) {
            const parts = mediaUrl.split("youtu.be/")[1];
            videoId = parts ? parts.split("?")[0].split("&")[0] : "";
          } else if (mediaUrl.includes("youtube.com/watch")) {
            try {
              const url = new URL(mediaUrl);
              videoId = url.searchParams.get("v") || "";
            } catch (e) {
              const match = mediaUrl.match(/[?&]v=([^&]+)/);
              if (match) videoId = match[1];
            }
          }
          
          if (videoId) {
            videoId = videoId.trim().split("&")[0].split("?")[0].split("#")[0];
            if (videoId.length > 0) {
              mediaElement = `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="community-media"></iframe>`;
            }
          }
        } catch (error) {
          console.error("Ошибка обработки YouTube ссылки:", error);
        }
      } else if (mediaUrl.includes("vimeo.com")) {
        let videoId = "";
        if (mediaUrl.includes("vimeo.com/")) {
          videoId = mediaUrl.split("vimeo.com/")[1].split("?")[0];
        }
        if (videoId) {
          mediaElement = `<iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="community-media"></iframe>`;
        }
      } else if (mediaUrl.match(/\.(mp4|webm|ogg|mov)$/i)) {
        mediaElement = `<video controls class="community-media"><source src="${mediaUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
      } else {
        mediaElement = `<img src="${mediaUrl}" alt="Community Art" class="community-media">`;
      }
      
      return mediaElement;
    }
    
    // Best art
    if (current.art) {
      const authorText = current.art.author;
      const authorLink = current.art.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel="noopener noreferrer" class="author-link">${authorText}</a>`
        : `<span>${authorText}</span>`;
      
      const mediaUrl = current.art.media || current.art.image || "";
      let mediaElement = getMediaElement(mediaUrl);
      
      artHTML += `
        <div class="art-section">
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    // Best handmade
    if (current.handmade) {
      const authorText = current.handmade.author;
      const authorLink = current.handmade.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel="noopener noreferrer" class="author-link">${authorText}</a>`
        : `<span>${authorText}</span>`;
      
      const mediaUrl = current.handmade.media || current.handmade.image || "";
      let mediaElement = getMediaElement(mediaUrl);
      
      artHTML += `
        <div class="art-section">
          <h3 class="art-subsection-title">${t.handmadeTitle}</h3>
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    // Best video
    if (current.video) {
      const authorText = current.video.author;
      const authorLink = current.video.link;
      const authorEl = (authorLink && authorLink.trim() !== "" && authorLink !== "#")
        ? `<a href="${authorLink}" target="_blank" rel="noopener noreferrer" class="author-link">${authorText}</a>`
        : `<span>${authorText}</span>`;
      
      const mediaUrl = current.video.media || current.video.image || "";
      let mediaElement = getMediaElement(mediaUrl);
      
      artHTML += `
        <div class="art-section">
          <h3 class="art-subsection-title">${t.videoTitle}</h3>
          ${mediaElement}
          <p class="author">${t.by} ${authorEl}</p>
        </div>`;
    }
    
    artEl.innerHTML = artHTML;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderIssue();
  updateTranslations();

 
  (function () {
    const langToggle = document.getElementById("langToggle");
    const langDropdown = document.getElementById("langDropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    if (!langToggle || !langDropdown) {
      console.error("Language elements not found!");
      return;
    }

    langToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      langDropdown.classList.toggle("active");
    });

    langOptions.forEach(function (option) {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const selectedLang = this.getAttribute("data-lang");
        
        if (!selectedLang || !translations[selectedLang]) return;

        const mainContent = document.querySelector(".grid") || document.body;
        mainContent.style.transition = "opacity 0.2s ease";
        mainContent.style.opacity = "0.5";

        setTimeout(function () {
          currentLanguage = selectedLang;
          setLanguage(currentLanguage);
          langDropdown.classList.remove("active");

          setTimeout(function () {
            mainContent.style.opacity = "1";
          }, 100);
        }, 200);
      });
    });

    document.addEventListener("click", function (e) {
      if (!langDropdown.classList.contains("active")) return;
      if (!e.target.closest(".lang-selector")) {
        langDropdown.classList.remove("active");
      }
    });
  })();

  
  const current = issues[currentIssueIndex];
  const headerMetrics = current.metrics ? [
    `TVL: ${current.metrics.TVL || 'N/A'}`,
    `Onchain: ${current.metrics["Onchain Capital"] || 'N/A'}`,
    `Offchain: ${current.metrics["Offchain Capital"] || 'N/A'}`,
    `Premium: ${current.metrics["Premium Receivable"] || 'N/A'}`
  ] : [
    "TVL: $397M",
    "Onchain: $114M",
    "Offchain: $67M",
    "Premium: $215M"
  ];

  let metricIndex = 0;
  const metricEl = document.getElementById("metricValue");

  if (metricEl) {
    metricEl.textContent = headerMetrics[0];

    setInterval(function () {
      metricEl.style.opacity = "0";
      metricEl.style.transform = "translateY(-8px)";

      setTimeout(function () {
        metricIndex = (metricIndex + 1) % headerMetrics.length;
        metricEl.textContent = headerMetrics[metricIndex];

        metricEl.offsetHeight;

        metricEl.style.opacity = "1";
        metricEl.style.transform = "translateY(0)";
      }, 450);
    }, 3000);
  }
});