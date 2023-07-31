import {popularXhr} from './popularXhr.js'
import {bannerXhr} from './bannerXhr.js'
import {brandsXhr} from './brandsXhr.js'
import {promotionXhr} from './promotionXhr.js'

export const xhr = () =>{
  popularXhr()
  bannerXhr()
  brandsXhr()
  promotionXhr()
}
