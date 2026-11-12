/**
 * Fairy Models Agency - 全キャスト統一マスターデータ (assets/js/models_data.js)
 *
 * 【今後の運用ルール】
 * 1. 新人が入ったら、配列の「一番下」に1行追加する（下が最新＝新着順になる）
 * 2. isPickup: true にすると、トップページ（index.html）の「Selected Casts」にも自動表示される
 * 3. isNew: true にすると、カードの右上に「NEW」バッジが自動表示される
 */

const ALL_CASTS_DATA = [
    // ==========================================
    // 1. PICKUP CASTS (トップページ掲載メンバー)
    // ==========================================
    { category: "woman", gender: "woman", name: "TAKAKO", size: "171 / 82 / 64 / 89", img: "./assets/models_image/takako/photo_1.webp", link: "./models/takako.html", isPickup: true, isNew: false },
    { category: "woman", gender: "woman", name: "Yumika", size: "170 / 79 / 67 / 85", img: "./assets/models_image/yumika/photo_1.webp", link: "./models/yumika.html", isPickup: true, isNew: false },
    { category: "woman", gender: "woman", name: "Alina L", size: "164 / 82 / 60 / 86", img: "./assets/models_image/alina/photo_1.webp", link: "./models/alina.html", isPickup: true, isNew: false },
    { category: "woman", gender: "woman", name: "Fadie", size: "160 / 82 / 62 / 90", img: "./assets/models_image/fadile/photo_1.webp", link: "./models/fadile.html", isPickup: true, isNew: false },

    { category: "man", gender: "man", name: "Bhuiyan", size: "180 / 90 / 73 / 88", img: "./assets/models_image/bhuiyan/photo_1.webp", link: "./models/bhuiyan.html", isPickup: true, isNew: false },
    { category: "man", gender: "man", name: "Alex", size: "180 / 96 / 98 / 95", img: "./assets/models_image/alex/photo_1.webp", link: "./models/alex.html", isPickup: true, isNew: false },
    { category: "man", gender: "man", name: "KOU", size: "181 / 101.5 / 78 / 101", img: "./assets/models_image/kou/photo_1.webp", link: "./models/kou.html", isPickup: true, isNew: false },

    // ==========================================
    // 2. ALL CASTS (既存メンバー)
    // ==========================================
    // --- WOMAN ---
    { category: "woman", gender: "woman", name: "Isa", size: "171 / 83 / 60 / 83", img: "./assets/models_all_image/isa/photo_1.webp", link: "./models/models_all/isa.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "ANGELA", size: "172 / 85 / 69 / 95", img: "./assets/models_all_image/0_angela/photo_1.webp", link: "./models/models_all/angela.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "クレア由貴", size: "166 / 80 / 57 / 84", img: "./assets/models_all_image/claire_yuki/photo_1.webp", link: "./models/models_all/claire_yuki.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "Tania Pinkus", size: "163 / 97 / 73 / 98", img: "./assets/models_all_image/tania_pinkus/photo_1.webp", link: "./models/models_all/tania_pinkus.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "KiLi", size: "160 / 86 / 62 / 86", img: "./assets/models_all_image/kili/photo_1.webp", link: "./models/models_all/kili.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "KIARA", size: "175 / 86 / 62 / 92", img: "./assets/models_all_image/kiara/photo_1.webp", link: "./models/models_all/kiara.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "Anni", size: "161 / 78 / 59 / 85", img: "./assets/models_all_image/anni/photo_1.webp", link: "./models/models_all/anni.html", isPickup: false, isNew: false },
    // { category: "woman", gender: "woman", name: "Hinata", size: "167 / 76 / 62 / 81", img: "./assets/models_all_image/hinata/photo_2.jpg", link: "./models/models_all/hinata.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "Kayty", size: "168 / 88 / 64 / 98", img: "./assets/models_all_image/kayty/photo_1.webp", link: "./models/models_all/kayty.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "Natali W", size: "173 / 86 / 67 / 93", img: "./assets/models_all_image/natali_w/photo_1.webp", link: "./models/models_all/natali_w.html", isPickup: false, isNew: false },
    { category: "woman", gender: "woman", name: "Michelle", size: "160 / 82 / 65 / 88", img: "./assets/models_all_image/michelle/photo_1.webp", link: "./models/models_all/michelle.html", isPickup: false, isNew: false },

    // --- MAN ---
    { category: "man", gender: "man", name: "Jojo", size: "183 / 97 / 79 / 95", img: "./assets/models_all_image/jojo/photo_1.webp", link: "./models/models_all/jojo.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Ivan R", size: "168 / 87 / 72 / 84", img: "./assets/models_all_image/ivan_r/photo_1.webp", link: "./models/models_all/ivan_r.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Tom Constantine", size: "175 / 100 / 80 / 94", img: "./assets/models_all_image/tom_constantine/photo_1.webp", link: "./models/models_all/tom_constantine.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Taiyo", size: "169 / 81 / 66 / 87", img: "./assets/models_all_image/taiyo/photo_1.webp", link: "./models/models_all/taiyo.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Aurelien", size: "177 / 100 / 76 / 88", img: "./assets/models_all_image/aurelien/photo_1.webp", link: "./models/models_all/aurelien.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Richard Wilson", size: "183 / 96 / 95 / 101", img: "./assets/models_all_image/richard_wilson/photo_1.webp", link: "./models/models_all/richard_wilson.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Dennis", size: "176 / 96 / 90 / 93", img: "./assets/models_all_image/dennis/photo_1.webp", link: "./models/models_all/dennis.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Alfred", size: "179 / 99 / 82 / 92", img: "./assets/models_all_image/alfred/photo_1.webp", link: "./models/models_all/alfred.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Akira", size: "173 / 94 / 82 / 100", img: "./assets/models_all_image/akira/photo_1.webp", link: "./models/models_all/akira.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Gaz", size: "184 / 94 / 80 / 94", img: "./assets/models_all_image/gaz/photo_1.webp", link: "./models/models_all/gaz.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "HD", size: "180 / 95 / 79 / 107", img: "./assets/models_all_image/hd/photo_1.webp", link: "./models/models_all/hd.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Jordy", size: "180 / 88 / 75 / 88", img: "./assets/models_all_image/jordy/photo_1.webp", link: "./models/models_all/jordy.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Regan W", size: "179 / 98 / 92 / 94", img: "./assets/models_all_image/regan_w/photo_1.webp", link: "./models/models_all/regan_w.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Niclas E", size: "171 / 96 / 86 / 99", img: "./assets/models_all_image/niclas_e/photo_1.webp", link: "./models/models_all/niclas_e.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Paolo Andrea Pietro", size: "188 / 120 / 96 / 112", img: "./assets/models_all_image/paolo/photo_1.webp", link: "./models/models_all/paolo.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Leigh", size: "178 / 112 / 88 / 110", img: "./assets/models_all_image/leigh/photo_1.webp", link: "./models/models_all/leigh.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Julien J", size: "177 / 98 / 75 / 95", img: "./assets/models_all_image/julien_j/photo_1.webp", link: "./models/models_all/julien_j.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "航波", size: "182 / 99 / 78 / 100", img: "./assets/models_all_image/koha/photo_1.webp", link: "./models/models_all/koha.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Ryo", size: "182 / 96 / 80 / 97", img: "./assets/models_all_image/ryo/photo_1.webp", link: "./models/models_all/ryo.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "So", size: "182 / 83 / 67 / 84", img: "./assets/models_all_image/so/photo_1.webp", link: "./models/models_all/so.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Tyler T", size: "186 / 99 / 80 / 98", img: "./assets/models_all_image/tyler_t/photo_1.webp", link: "./models/models_all/tyler_t.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "JEREMY FONDA", size: "181 / 101 / 82 / 95", img: "./assets/models_all_image/jeremy_fonda/photo_1.webp", link: "./models/models_all/jeremy_fonda.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "RAFAEL", size: "174 / 88 / 72 / 90", img: "./assets/models_all_image/rafael/photo_1.webp", link: "./models/models_all/rafael.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Amir", size: "181 / 96 / 76 / 96", img: "./assets/models_all_image/amir/photo_1.webp", link: "./models/models_all/amir.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "Ash", size: "180 / 93 / 76 / 86", img: "./assets/models_all_image/ash/photo_1.webp", link: "./models/models_all/ash.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "BEN", size: "180 / 91 / 71 / 91", img: "./assets/models_all_image/ben/photo_1.webp", link: "./models/models_all/ben.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "CHRISTOPHE", size: "183 / 109 / 86 / 106", img: "./assets/models_all_image/christophe/photo_1.webp", link: "./models/models_all/christophe.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "STEVE WILEY", size: "181 / 104 / 90 / 102", img: "./assets/models_all_image/steve_wiley/photo_1.webp", link: "./models/models_all/steve_wiley.html", isPickup: false, isNew: false },
    { category: "man", gender: "man", name: "JOHANNES", size: "185 / 95 / 81 / 93", img: "./assets/models_all_image/johannes/photo_1.webp", link: "./models/models_all/johannes.html", isPickup: false, isNew: false },

    // --- DIRECT BOOKING ---
    { category: "direct_booking", gender: "woman", name: "SAYURI", size: "160 / 76 / 58 / 81 / 23.5", img: "./assets/direct_booking_image/sayuri/photo_1.webp", link: "./direct_booking/sayuri.html", isPickup: false, isNew: false },

    // ==========================================
    // 3. RECENT NEWCOMERS (直近の新規参加・下が最新)
    // ==========================================
    { category: "artist", gender: "woman", name: "Eri Saito", size: "160 / 76 / 58 / 81", img: "./assets/artists_image/eri_saito/photo_1.webp", link: "./artists/eri_saito.html", isPickup: false, isNew: true },
    { category: "artist", gender: "woman", name: "VIVIAN", size: "173 / 94 / 74 / 95", img: "./assets/artists_image/vivian/photo_1.webp", link: "./artists/vivian.html", isPickup: false, isNew: true },
    { category: "artist", gender: "woman", name: "KEIKO", size: "180 / 81 / 66 / 91", img: "./assets/artists_image/keiko/photo_1.webp", link: "./artists/keiko.html", isPickup: false, isNew: true },
    { category: "woman", gender: "woman", name: "Aga", size: "161 / 75 / 59 / 85", img: "./assets/models_all_image/aga/photo_1.webp", link: "./models/models_all/aga.html", isPickup: false, isNew: true },
    { category: "woman", gender: "woman", name: "MARITZA", size: "160 / 82 / 63 / 86", img: "./assets/models_all_image/maritza/photo_1.webp", link: "./models/models_all/maritza.html", isPickup: false, isNew: true }
];