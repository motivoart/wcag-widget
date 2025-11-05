export type WcagOptions = {
    plan?: number,
    headerText?: string,
    headerLink?: boolean,
    bgColor?: string,
    triggerOptions?: {
        icon?: string,
        position: string,
    }
    resetButton?: boolean,
    resetOptions?: {
        text: string,
        color: string,
    },
    declaration?: string,
    accessibilityOptions?: any[]
    // fontSize?: boolean,
    // lineHeight?: boolean,
    // linksHighlight?: boolean,
    // titleHighlight?: boolean,
    // contrast?: boolean,
    // DarkContrast?: boolean,
    // strongContrast?: boolean,
}