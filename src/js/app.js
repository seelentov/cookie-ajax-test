import {isWebp} from './modules/isWebp.js'

import {ScrollBlock} from './modules/ScrollBlock.js'
import {ScrollImgs} from './modules/ScrollImgs.js'
import {CatalogButton} from './modules/CatalogButton.js'
import {Appear} from './modules/Appear.js'
import {BannerSwitch} from './modules/BannerSwitch.js'
import {SwipingBlock} from './modules/SwipingBlock.js'

isWebp();

ScrollBlock(document.querySelector('.popular__items'), document.querySelector('.popular__item').clientWidth + 30,document.querySelector('.popular-text__arrs').children)
ScrollBlock(document.querySelector('.popular__items'), document.querySelector('.popular__item').clientWidth + 19,document.querySelector('.popular-text__arrs-mobile').children)

ScrollBlock(document.querySelector('.categories__items'), document.querySelector('.categories__items').querySelector('.categories__category').clientWidth + 30,document.querySelector('.categories-text__arrs').children)
ScrollBlock(document.querySelector('.categories__items'), document.querySelector('.categories__items').querySelector('.categories__category').clientWidth + 19,document.querySelector('.categories-text__arrs-mobile').children)

document.querySelectorAll('.product-item').forEach(item => ScrollImgs(item))

CatalogButton(document.querySelector('.header__catalog'), document.querySelector('.header-catalog__items'), [document.querySelector('.header__search')])

Appear(document.querySelector('.phone__number-allnum'),document.querySelector('.phone__number'))

BannerSwitch(document.querySelector('.banner'))

SwipingBlock(document.querySelector('.banners__bg'))