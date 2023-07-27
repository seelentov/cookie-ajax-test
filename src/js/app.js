import {isWebp} from './modules/isWebp.js'

import {ScrollBlock} from './modules/ScrollBlock.js'
import {ScrollImgs} from './modules/ScrollImgs.js'
import {CatalogButton} from './modules/CatalogButton.js'
import {Appear} from './modules/Appear.js'
import {BannerSwitch} from './modules/BannerSwitch.js'
import {HoverBlocks} from './modules/HoverBlocks.js'
import menuBurger from './modules/menuBurger.js'
import {swipingBlock} from './modules/swipingBlock.js'
import NoEventsOnScroll from './modules/NoEventsOnScrollBanner.js'
import serviceBlockHover from './modules/serviceBlockHover.js'
import withSelectorBlock from './modules/withSelectorBlock.js'

isWebp();

ScrollBlock(document.querySelector('.popular__items'), document.querySelector('.popular__item').clientWidth + 30,document.querySelector('.popular-text__arrs').children)
ScrollBlock(document.querySelector('.popular__items'), document.querySelector('.popular__item').clientWidth + 19,document.querySelector('.popular-text__arrs-mobile').children)

ScrollBlock(document.querySelector('.categories__items'), document.querySelector('.categories__items').querySelector('.categories__category').clientWidth + 30,document.querySelector('.categories-text__arrs').children)
ScrollBlock(document.querySelector('.categories__items'), document.querySelector('.categories__items').querySelector('.categories__category').clientWidth + 19,document.querySelector('.categories-text__arrs-mobile').children)

ScrollBlock(document.querySelector('.articles__items'), document.querySelector('.articles__items').querySelector('.article-item').clientWidth + 30,document.querySelector('.articles-text__arrs').children)
ScrollBlock(document.querySelector('.articles__items'), document.querySelector('.articles__items').querySelector('.article-item').clientWidth + 19,document.querySelector('.articles-text__arrs-mobile').children)

ScrollBlock(document.querySelector('.brands__items'), document.querySelector('.brands__item').clientWidth + 30,document.querySelector('.brands-text__arrs').children)
ScrollBlock(document.querySelector('.brands__items'), document.querySelector('.brands__item').clientWidth + 19,document.querySelector('.brands-text__arrs-mobile').children)

document.querySelectorAll('.product-item').forEach(item => ScrollImgs(item))

CatalogButton(document.querySelector('.header__catalog'), document.querySelector('.header-catalog__items'), [document.querySelector('.header__search')])

Appear(document.querySelector('.phone__number-allnum'),document.querySelector('.phone__number'))

BannerSwitch(document.querySelector('.banner'))
swipingBlock(document.querySelector('.banners__bg'))

HoverBlocks('mouseover', document.querySelectorAll('.promotion__item'), 'promotion-item-big', 'promotion-item-small')

swipingBlock(document.querySelector('.popular__items'))
swipingBlock(document.querySelector('.categories__items'))
swipingBlock(document.querySelector('.articles__items'))
swipingBlock(document.querySelector('.brands__items'))