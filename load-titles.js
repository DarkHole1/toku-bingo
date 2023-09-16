const titles = [{ "id": 37999, "image": "https://shikimori.me/system/animes/preview/37999.jpg?1690871382", "url": "https://shikimori.me/animes/37999-kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen" }, { "id": 9756, "image": "https://shikimori.me/system/animes/preview/9756.jpg?1690875708", "url": "https://shikimori.me/animes/9756-mahou-shoujo-madoka-magica" }, { "id": 5081, "image": "https://shikimori.me/system/animes/preview/5081.jpg?1690858539", "url": "https://shikimori.me/animes/y5081-bakemonogatari" }, { "id": 28735, "image": "https://shikimori.me/system/animes/preview/28735.jpg?1690888230", "url": "https://shikimori.me/animes/28735-shouwa-genroku-rakugo-shinjuu" }, { "id": 21, "image": "https://shikimori.me/system/animes/preview/21.jpg?1693934323", "url": "https://shikimori.me/animes/21-one-piece" }, { "id": 10800, "image": "https://shikimori.me/system/animes/preview/10800.jpg?1690860702", "url": "https://shikimori.me/animes/z10800-chihayafuru" }, { "id": 35180, "image": "https://shikimori.me/system/animes/preview/35180.jpg?1682877433", "url": "https://shikimori.me/animes/35180-3-gatsu-no-lion-2nd-season" }, { "id": 235, "image": "https://shikimori.me/system/animes/preview/235.jpg?1694479627", "url": "https://shikimori.me/animes/z235-detective-conan" }, { "id": 918, "image": "https://shikimori.me/system/animes/preview/918.jpg?1690866290", "url": "https://shikimori.me/animes/z918-gintama" }, { "id": 25835, "image": "https://shikimori.me/system/animes/preview/25835.jpg?1690887947", "url": "https://shikimori.me/animes/z25835-shirobako" }, { "id": 47917, "image": "https://shikimori.me/system/animes/preview/47917.jpg?1690859467", "url": "https://shikimori.me/animes/47917-bocchi-the-rock" }, { "id": 52034, "image": "https://shikimori.me/system/animes/preview/52034.jpg?1687137061", "url": "https://shikimori.me/animes/52034-oshi-no-ko" }, { "id": 5114, "image": "https://shikimori.me/system/animes/preview/5114.jpg?1690865409", "url": "https://shikimori.me/animes/z5114-fullmetal-alchemist-brotherhood" }, { "id": 820, "image": "https://shikimori.me/system/animes/preview/820.jpg?1690866229", "url": "https://shikimori.me/animes/820-ginga-eiyuu-densetsu" }, { "id": 24833, "image": "https://shikimori.me/system/animes/preview/24833.jpg?1690857223", "url": "https://shikimori.me/animes/z24833-ansatsu-kyoushitsu" }, { "id": 11061, "image": "https://shikimori.me/system/animes/preview/11061.jpg?1690869546", "url": "https://shikimori.me/animes/z11061-hunter-x-hunter-2011" }, { "id": 6594, "image": "https://shikimori.me/system/animes/preview/6594.jpg?1690872085", "url": "https://shikimori.me/animes/6594-katanagatari" }, { "id": 34599, "image": "https://shikimori.me/system/animes/preview/34599.jpg?1690875536", "url": "https://shikimori.me/animes/z34599-made-in-abyss" }, { "id": 10087, "image": "https://shikimori.me/system/animes/preview/10087.jpg?1690864866", "url": "https://shikimori.me/animes/z10087-fate-zero" }, { "id": 31478, "image": "https://shikimori.me/system/animes/preview/31478.jpg?1690859993", "url": "https://shikimori.me/animes/31478-bungou-stray-dogs" }, { "id": 44511, "image": "https://shikimori.me/system/animes/preview/44511.jpg?1690860455", "url": "https://shikimori.me/animes/44511-chainsaw-man" }, { "id": 23289, "image": "https://shikimori.me/system/animes/preview/23289.jpg?1690866037", "url": "https://shikimori.me/animes/23289-gekkan-shoujo-nozaki-kun" }, { "id": 19, "image": "https://shikimori.me/system/animes/preview/19.jpg?1690877661", "url": "https://shikimori.me/animes/19-monster" }, { "id": 16918, "image": "https://shikimori.me/system/animes/preview/16918.jpg?1690866194", "url": "https://shikimori.me/animes/y16918-gin-no-saji" }, { "id": 37141, "image": "https://shikimori.me/system/animes/preview/37141.jpg?1690868174", "url": "https://shikimori.me/animes/z37141-hataraku-saibou" }, { "id": 19815, "image": "https://shikimori.me/system/animes/preview/19815.jpg?1690879526", "url": "https://shikimori.me/animes/z19815-no-game-no-life" }, { "id": 6213, "image": "https://shikimori.me/system/animes/preview/6213.jpg?1690891540", "url": "https://shikimori.me/animes/6213-toaru-kagaku-no-railgun" }, { "id": 38680, "image": "https://shikimori.me/system/animes/preview/38680.jpg?1690865264", "url": "https://shikimori.me/animes/38680-fruits-basket-1st-season" }, { "id": 30296, "image": "https://shikimori.me/system/animes/preview/30296.jpg?1690884199", "url": "https://shikimori.me/animes/z30296-rakudai-kishi-no-cavalry" }, { "id": 32182, "image": "https://shikimori.me/system/animes/preview/32182.jpg?1690877464", "url": "https://shikimori.me/animes/z32182-mob-psycho-100" }, { "id": 853, "image": "https://shikimori.me/system/animes/preview/853.jpg?1690882434", "url": "https://shikimori.me/animes/853-ouran-koukou-host-club" }, { "id": 37521, "image": "https://shikimori.me/system/animes/preview/37521.jpg?1690893667", "url": "https://shikimori.me/animes/37521-vinland-saga" }, { "id": 30015, "image": "https://shikimori.me/system/animes/preview/30015.jpg?1690884421", "url": "https://shikimori.me/animes/z30015-relife" }, { "id": 44074, "image": "https://shikimori.me/system/animes/preview/44074.jpg?1690886736", "url": "https://shikimori.me/animes/44074-shiguang-dailiren" }, { "id": 34798, "image": "https://shikimori.me/system/animes/preview/34798.jpg?1690897065", "url": "https://shikimori.me/animes/34798-yuru-camp" }, { "id": 39196, "image": "https://shikimori.me/system/animes/preview/39196.jpg?1690875922", "url": "https://shikimori.me/animes/39196-mairimashita-iruma-kun" }, { "id": 35839, "image": "https://shikimori.me/system/animes/preview/35839.jpg?1690889030", "url": "https://shikimori.me/animes/35839-sora-yori-mo-tooi-basho" }, { "id": 33255, "image": "https://shikimori.me/system/animes/preview/33255.jpg?1690885169", "url": "https://shikimori.me/animes/33255-saiki-kusuo-no-nan" }, { "id": 11757, "image": "https://shikimori.me/system/animes/preview/11757.jpg?1690890056", "url": "https://shikimori.me/animes/z11757-sword-art-online" }, { "id": 30727, "image": "https://shikimori.me/system/animes/preview/30727.jpg?1690885148", "url": "https://shikimori.me/animes/30727-saenai-heroine-no-sodatekata" }, { "id": 41389, "image": "https://shikimori.me/system/animes/preview/41389.jpg?1690891843", "url": "https://shikimori.me/animes/41389-tonikaku-kawaii" }, { "id": 37779, "image": "https://shikimori.me/system/animes/preview/37779.jpg?1690895541", "url": "https://shikimori.me/animes/z37779-yakusoku-no-neverland" }, { "id": 46102, "image": "https://shikimori.me/system/animes/preview/46102.jpg?1690879931", "url": "https://shikimori.me/animes/46102-odd-taxi" }, { "id": 28013, "image": "https://shikimori.me/system/animes/preview/28013.jpg?1690875492", "url": "https://shikimori.me/animes/28013-macross" }, { "id": 10357, "image": "https://shikimori.me/system/animes/preview/10357.jpg?1690870786", "url": "https://shikimori.me/animes/y10357-jinrui-wa-suitai-shimashita" }, { "id": 36296, "image": "https://shikimori.me/system/animes/preview/36296.jpg?1690868916", "url": "https://shikimori.me/animes/z36296-hinamatsuri-tv" }, { "id": 20583, "image": "https://shikimori.me/system/animes/preview/20583.jpg?1690867410", "url": "https://shikimori.me/animes/z20583-haikyuu" }, { "id": 28851, "image": "https://shikimori.me/system/animes/preview/28851.jpg?1690873645", "url": "https://shikimori.me/animes/y28851-koe-no-katachi" }, { "id": 39468, "image": "https://shikimori.me/system/animes/preview/39468.jpg?1690869181", "url": "https://shikimori.me/animes/39468-honzuki-no-gekokujou-shisho-ni-naru-tame-ni-wa-shudan-wo-erandeiraremasen" }, { "id": 31251, "image": "https://shikimori.me/system/animes/preview/31251.jpg?1690872900", "url": "https://shikimori.me/animes/z31251-kidou-senshi-gundam-tekketsu-no-orphans" }, { "id": 2076, "image": "https://shikimori.me/system/animes/preview/2076.jpg?1690873257", "url": "https://shikimori.me/animes/2076-kindaichi-shounen-no-jikenbo" }, { "id": 41762, "image": "https://shikimori.me/system/animes/preview/41762.jpg?1690890861", "url": "https://shikimori.me/animes/41762-tenchi-souzou-design-bu" }, { "id": 10278, "image": "https://shikimori.me/system/animes/preview/10278.jpg?1690891160", "url": "https://shikimori.me/animes/10278-the-idolm-ster" }, { "id": 37786, "image": "https://shikimori.me/system/animes/preview/37786.jpg?1690895463", "url": "https://shikimori.me/animes/z37786-yagate-kimi-ni-naru" }, { "id": 9253, "image": "https://shikimori.me/system/animes/preview/9253.jpg?1690889627", "url": "https://shikimori.me/animes/z9253-steins-gate" }, { "id": 12189, "image": "https://shikimori.me/system/animes/preview/12189.jpg?1690869667", "url": "https://shikimori.me/animes/12189-hyouka" }, { "id": 31240, "image": "https://shikimori.me/system/animes/preview/31240.jpg?1690884313", "url": "https://shikimori.me/animes/z31240-re-zero-kara-hajimeru-isekai-seikatsu" }, { "id": 34933, "image": "https://shikimori.me/system/animes/preview/34933.jpg?1690871604", "url": "https://shikimori.me/animes/34933-kakegurui" }, { "id": 52991, "image": "https://shikimori.me/system/animes/preview/52991.jpg?1690856297", "url": "https://shikimori.me/animes/52991-sousou-no-frieren" }, { "id": 54492, "image": "https://shikimori.me/system/animes/preview/54492.jpg?1692215351", "url": "https://shikimori.me/animes/54492-kusuriya-no-hitorigoto" }]

let countMode = false
let count = 0

window.addEventListener('load', () => {
    const main = document.getElementById('main')
    const result = document.getElementById('result')
    const toggler = document.getElementById('toggler')
    const bingo = document.getElementById('bingo')
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)

    const fragment = document.createDocumentFragment()
    for (const title of titles) {
        const a = document.createElement('a')
        a.href = title.url
        a.style.backgroundImage = `url("${title.image}")`
        const input = document.createElement('input')
        input.type = 'checkbox'
        a.appendChild(input)

        a.addEventListener('click', e => {
            if (!countMode) return
            e.stopPropagation()
            e.preventDefault()
            input.checked = !input.checked
            if (input.checked) {
                count += 1
            } else {
                count -= 1
            }
            updateCount()
        })

        fragment.appendChild(a)
    }
    main.appendChild(fragment)

    function updateCount() {
        updateBingo()
        if (count == 0) {
            result.innerText = 'Результат: Абсолютный ноль'
            return
        }
        if (count < 60) {
            result.innerText = `Результат: ${count}/60`
            return
        }
        result.innerText = 'Результат: Никто не обнимет необъятного'
    }

    window.addEventListener('resize', () => {
        updateBingo()
    })

    function updateBingo() {
        bingo.classList.toggle('hidden', !hasBingo())
    }

    toggler.addEventListener('click', () => {
        countMode = document.body.classList.toggle('count')
        if (countMode) {
            toggler.children[0].innerText = 'Теперь нажимай на картинки. Результат будет в самом низу.'
        } else {
            toggler.children[0].innerText = 'Нажми сюда чтобы начать считать'
        }
    })

    function hasBingo() {
        const { width } = document.body.getBoundingClientRect()
        const cols = Math.floor((width - rem) / (160 + rem))
        const rows = Math.ceil(60 / cols)
        const els = main.querySelectorAll('a > input')
        
        const vertical = new Array(cols).fill(0)
        for (let i = 0; i < 60; i += cols) {
            for(let j = 0; j < cols; j++) {
                if(els[i + j] && els[i + j].checked) {
                    vertical[j]++
                    if(vertical[j] >= 5) {
                        return true
                    }
                } else {
                    vertical[j] = 0
                }
            }
        }

        const horizontal = new Array(rows).fill(0)
        for(let i = 0; i < cols; i++) {
            for(let j = 0; j < rows; j++) {
                if(els[i + j] && els[i + j].checked) {
                    horizontal[j]++
                    if(horizontal[j] >= 5) {
                        return true
                    }
                } else {
                    horizontal[j] = 0
                }
            }
        }
        return false
    }
})
