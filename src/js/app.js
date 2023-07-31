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
import PromotionSwitch from './modules/PromotionSwitch.js'

import callbackForm from './modules/callbackForm.js'
import callbackAjax from './modules/callbackAjax.js'

import { xhr } from './xhr/xhr.js'

let scrollWidth = window.innerWidth / 5
let scrollWidthMobile = window.innerWidth


xhr()
setTimeout(()=>{
  ScrollBlock(document.querySelector('.popular__items'), scrollWidth, document.querySelector('.popular-text__arrs').children)
  ScrollBlock(document.querySelector('.popular__items'), scrollWidthMobile, document.querySelector('.popular-text__arrs-mobile').children)
  
  ScrollBlock(document.querySelector('.categories__items'), scrollWidth, document.querySelector('.categories-text__arrs').children)
  ScrollBlock(document.querySelector('.categories__items'), scrollWidthMobile, document.querySelector('.categories-text__arrs-mobile').children)
  
  ScrollBlock(document.querySelector('.articles__items'), scrollWidth, document.querySelector('.articles-text__arrs').children)
  ScrollBlock(document.querySelector('.articles__items'), scrollWidthMobile, document.querySelector('.articles-text__arrs-mobile').children)
  
  ScrollBlock(document.querySelector('.brands__items'), scrollWidth, document.querySelector('.brands-text__arrs').children)
  ScrollBlock(document.querySelector('.brands__items'), scrollWidthMobile, document.querySelector('.brands-text__arrs-mobile').children)
  
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
  
  Appear(document.querySelector('.footer-logo__time-allnum'),document.querySelector('.phone-block__phone'))
}, 500)
  