/**
 * Class to manage cookies on localStorage agreement
 */

export class WcagCookies {
    cookiesSaved: boolean
    cookies: Map<string, boolean>

    constructor() {
        this.cookiesSaved = false
        this.cookies = new Map()
        this.getCookiesSavedInfo()
    }

    /**
     * Gets saved cookies info from localStorage
     */
    getCookiesSavedInfo(): void {
        const wcagCookies = localStorage.getItem('wcag-cookies')

        if (wcagCookies) {
            const jsonObj = JSON.parse(wcagCookies)

            if (jsonObj) {
                for (const key in jsonObj) {
                    this.cookies.set(key, jsonObj[key])
                }

                this.cookiesSaved = true
            } else {
                this.cookies = new Map()
            }
        } else {
            this.cookies = new Map()
        }
    }

    /**
     * Saves cookies info in sessionsStorage
     */
    saveCookiesInfo(): void {
        const jsonObj: any = {}

        this.cookies.forEach((val, key) => {
            jsonObj[key] = val
        })

        localStorage.setItem('wcag-cookies', JSON.stringify(jsonObj))
        this.cookiesSaved = true
    }

    /**
     * Adds cookie, saves cookies info
     *
     * @param {string} name cookie name
     * @param {any} value value of cookies
     */
    addCookie(name: string, value: any): void {
        this.cookies.set(name, value)
        this.saveCookiesInfo()
    }


    deleteCookie(name: string): void {
        this.cookies.delete(name)
        this.saveCookiesInfo()
    }

    clearCookie(): void {
        this.cookies.clear();
        this.saveCookiesInfo()
    }
}