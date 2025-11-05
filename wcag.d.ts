import { WcagCookies } from './helpers/WcagCookies.ts'

declare global {
    interface Window {
        WcagCookiesController: WcagCookies
    }
}
