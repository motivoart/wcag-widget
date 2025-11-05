import { WcagOptions } from './helpers/WcagOptions';
import WcagStyles from './helpers/WcagStyles'
import { WcagCookies } from './helpers/WcagCookies'

class Wcag {
    wrapper: HTMLElement;

    constructor(private options: WcagOptions) {

        // Default options 
        const defaultsOptions: WcagOptions = {
            plan: 1,
            headerText: 'WCAG Widget',
            headerLink: true,
            bgColor: '#69B764', // color
            triggerOptions: {
                icon: '/img/accessibility-widget.svg', // path to image
                position: 'bottom-right', // top-right, middle-right, bottom-right, top-left, middle-left, bottom-left 
            },
            resetButton: true, // true/false,
            resetOptions: {
                text: 'Clear settings', // path to image
                color: '#ffffff', // color
            },
            declaration: "",
            accessibilityOptions: [
                {
                    name: 'fontSize',
                    active: true,
                    plan: 0,
                    icon: '/img/icons/text-height.svg',
                    options:
                    {
                        name: 'fontSize',
                        title: 'Font size',
                        type: 'levels', // levels, boolean, browsing
                        category: 'content',
                        levels: [1.1, 1.2],
                        action: 'changeFontSize',
                        property: 'font-size',
                        defaultValue: '16px'
                    }
                },
                {
                    name: 'lineHeight',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/line-height.svg',
                    options:
                    {
                        name: 'lineHeight',
                        title: 'Line height',
                        type: 'levels', // levels, boolean, browsing
                        category: 'content',
                        levels: [1.1, 1.2],
                        action: 'changeLineHeight',
                        property: 'line-height',
                        defaultValue: '16px'
                    }
                },
                {
                    name: 'letterSpacing',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/text-width.svg',
                    options:
                    {
                        name: 'letterSpacing',
                        title: 'Letter spacing',
                        type: 'levels', // levels, boolean, browsing
                        category: 'content',
                        levels: [1, 1.8],
                        action: 'changeLetterSpacing',
                        property: 'letter-spacing',
                        defaultValue: '1px'
                    }
                },
                {
                    name: 'textAlign',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/align-justify.svg',
                    options:
                    {
                        name: 'textAlign',
                        title: 'Text alignment',
                        type: 'levels', // levels, boolean, browsing
                        category: 'content',
                        levels: ['left', 'center', 'right'],
                        action: 'changeTextAlign',
                        property: 'text-align',
                        defaultValue: 'left'
                    }
                },
                {
                    name: 'grayscale',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/contrast.svg',
                    options:
                    {
                        name: 'grayscale',
                        title: 'Grey scale',
                        type: 'boolean', // levels, boolean, browsing
                        category: 'color',
                        levels: [],
                        action: 'changeGrayscale',
                        property: 'grayscale',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'invert',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/invert.svg',
                    options:
                    {
                        name: 'invert',
                        title: 'Colour inversion',
                        type: 'boolean', // levels, boolean, browsing
                        category: 'color',
                        levels: [],
                        action: 'changeInvert',
                        property: 'invert',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'whiteBlack',
                    active: true,
                    plan: 0,
                    icon: '/img/icons/white-black.svg',
                    options:
                    {
                        name: 'whiteBlack',
                        title: 'White and black contrast',
                        type: 'boolean', // levels, boolean, browsing
                        category: 'color',
                        levels: [],
                        action: 'changeContrastWhiteBlack',
                        property: 'white-black',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'blackYellow',
                    active: true,
                    plan: 0,
                    icon: '/img/icons/black-yellow.svg',
                    options:
                    {
                        name: 'blackYellow',
                        title: 'Black and yellow contrast',
                        type: 'boolean', // levels, boolean, browsing
                        category: 'color',
                        levels: [],
                        action: 'changeContrastBlackYellow',
                        property: 'black-yellow',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'yellowBlack',
                    active: true,
                    plan: 0,
                    icon: '/img/icons/yellow-black.svg',
                    options:
                    {
                        name: 'yellowBlack',
                        title: 'Yellow and black contrast',
                        type: 'boolean', // levels, boolean, browsing
                        category: 'color',
                        levels: [],
                        action: 'changeContrastYellowBlack',
                        property: 'yellow-black',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'highlightTitles',
                    active: true,
                    plan: 0,
                    icon: '/img/icons/heading.svg',
                    options:
                    {
                        name: 'highlightTitles',
                        title: 'Highlight titles',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeHighlightTitles',
                        property: 'highlight-titles',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'highlightLinks',
                    active: true,
                    plan: 0,
                    icon: '/img/icons/link-alt.svg',
                    options:
                    {
                        name: 'highlightLinks',
                        title: 'Highlight links',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeHighlightLinks',
                        property: 'highlight-links',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'hideImages',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/image-picture.svg',
                    options:
                    {
                        name: 'hideImages',
                        title: 'Hide images',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeHideImages',
                        property: 'hide-images',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'readableFont',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/letter-a.svg',
                    options:
                    {
                        name: 'readableFont',
                        title: 'Clear font',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeReadableFont',
                        property: 'readable-font',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'offTransition',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/pause.svg',
                    options:
                    {
                        name: 'offTransition',
                        title: 'Disable animations',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeOffTransition',
                        property: 'off-transition',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'bigWhiteCursor',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/cursor-arrow-white.svg',
                    options:
                    {
                        name: 'bigWhiteCursor',
                        title: 'Large white cursor',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeBigWhiteCursor',
                        property: 'big-white-cursor',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'bigBlackCursor',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/cursor-arrow-black.svg',
                    options:
                    {
                        name: 'bigBlackCursor',
                        title: 'Large black cursor',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeBigBlackCursor',
                        property: 'big-black-cursor',
                        defaultValue: 'false'
                    }
                },
                {
                    name: 'readingFocus',
                    active: true,
                    plan: 1,
                    icon: '/img/icons/focus-horizontal-round.svg',
                    options:
                    {
                        name: 'readingFocus',
                        title: 'Reading focus',
                        type: 'browsing', // levels, boolean, browsing
                        category: 'browsing',
                        levels: [],
                        action: 'changeReadingFocus',
                        property: 'reading-focus',
                        defaultValue: 'false'
                    }
                }
            ]
        }
        // Create CookiesController instance
        window.WcagCookiesController = new WcagCookies()

        this.wrapper = document.querySelector<HTMLElement>('[wcag-widget="true"]') as HTMLElement;

        this.options = defaultsOptions;

        // init
        if (this.wrapper) {
            this.init();

        } else {
            console.error('WCAG Widget Error: widget container not found');
        }
    }

    /**
     * init
     */
    init() {
        // add tag style 
        this.stylesHander();

        // Create widget content
        this.widgetHandler();

        // create trigger
        this.triggerHandler();

        // init options from localStorage
        if (window.WcagCookiesController.cookies.size > 0) {
            this.initOptionsFromCookies();
        }
    }

    initOptionsFromUser(userOptions: object) {
        for (const [optionKey, optionValue] of Object.entries(userOptions)) {

            let newValue: any;

            if (optionKey !== 'accessibilityOptions' && optionKey !== 'triggerOptions') {

                if (optionKey === 'headerLink' && optionValue === '0') {
                    newValue = false
                } else {
                    newValue = optionValue
                }

                this.options = { ...this.options, [optionKey]: newValue };

            }

            if (optionKey === 'triggerOptions') {

                for (const [optionTKey, optionTValue] of Object.entries(optionValue)) {
                    if (this.options.triggerOptions) {
                        this.options.triggerOptions = { ...this.options.triggerOptions, [optionTKey]: optionTValue };
                    }
                }

            }

            if (optionKey === 'accessibilityOptions') {

                if (this.options.accessibilityOptions) {
                    this.options.accessibilityOptions.forEach((accessibilityOption) => {

                        accessibilityOption.active = false

                        for (const [optionAKey, optionAValue] of Object.entries(optionValue)) {
                            if (accessibilityOption.name === optionAKey) {
                                accessibilityOption.active = true
                            }
                        }
                    })
                }

            }

        }
    }

    /**
     *  init WCAG Widget options based on localStorage 
     */
    initOptionsFromCookies() {
        for (const [optionKey, optionValue] of window.WcagCookiesController.cookies.entries()) {
            // console.log(`${optionKey} = ${optionValue}`);

            // Find optionKey in options
            if (this.options.accessibilityOptions) {
                const option = this.options.accessibilityOptions.find(({ name }) => name === optionKey);

                if (option) {
                    const optionWrapper = this.wrapper.querySelector(`[wcag-widget-action="option-${option.options.property}"]`);
                    // Initialize this option changer
                    if (optionWrapper) {
                        this.optionsChanger(optionWrapper, option.options, optionValue)
                    }
                }
            }

        }
    }

    /**
     *  Function to add styles for WCAG Widget 
     */
    stylesHander() {

        const styles = new WcagStyles(this.options)
        styles.createStyles();
    }

    /**
     *  Function to add trigger button 
     */
    triggerHandler() {

        // Create trigger button
        const triggerBtn = document.createElement('button');
        triggerBtn.classList.add('wcag-widget__trigger');
        this.options.triggerOptions && triggerBtn.classList.add(this.options.triggerOptions.position);
        triggerBtn.setAttribute('wcag-widget', 'trigger');
        triggerBtn.setAttribute('type', 'button');
        triggerBtn.setAttribute('aria-label', 'Widget WCAG. Kliknij aby otworzyć');
        document.body.appendChild(triggerBtn);

        // add open widget event
        if (triggerBtn) {
            this.open(triggerBtn);
        }
    }

    /**
     *  Function to add content in WCAG Widget 
     */
    widgetHandler() {

        // Create widget content
        this.wrapper.classList.add('wcag-widget');

        if (this.options.plan === 0) {
            this.wrapper.classList.add('free-plan');
        }

        let headerLink = '';
        let declarationLink = '';
        let freePlanClass = '';

        if (this.options.declaration) {
            declarationLink = `<div class="wcag-widget__content-declaration"><a href="${this.options.declaration}" target="_bank" title="Deklaracja dostępności">Deklaracja dostępności</a></div>`
        }

        if (this.options.headerLink) {
            headerLink = ``
        }

        const body = `
        <div class="wcag-widget__content" wcag-widget="content"> <header class="wcag-widget__content-header" wcag-widget="header"> <h2>${this.options.headerText} ${headerLink}</h2> </header> ${declarationLink} <div class="wcag-widget__content-options" wcag-widget="options"> <div class="options__content options__category"> <header class="category-header"> <h2>Content</h2> </header> <div class="category-items" wcag-widget="options-content"></div></div><div class="options__color options__category"> <header class="category-header"> <h2>Colours</h2> </header> <div class="category-items" wcag-widget="options-color"></div></div><div class="options__browsing options__category"> <header class="category-header"> <h2>Browsing options</h2> </header> <div class="category-items" wcag-widget="options-browsing"></div></div></div><footer class="wcag-widget__content-footer" wcag-widget="footer"></footer> </div>`;

        this.wrapper.innerHTML = body;

        const header = this.wrapper.querySelector(`[wcag-widget="header"]`);
        const footer = this.wrapper.querySelector(`[wcag-widget="footer"]`);
        const options = this.wrapper.querySelector(`[wcag-widget="options"]`);

        // Create close button
        if (header) {
            this.closeHandler(header);
        }

        // Create reset button
        if (footer) {
            this.resetHandler(footer);
        }

        // Create accessibility Options
        if (this.options.accessibilityOptions && this.options.accessibilityOptions.length > 0) {
            this.options.accessibilityOptions.forEach((accessibilityOption) => {

                if (this.options.plan === 0) {
                    if (accessibilityOption.active && accessibilityOption.plan === 0) {
                        this.accessibilityOptionHandler(accessibilityOption);
                    }
                } else {
                    if (accessibilityOption.active) {
                        this.accessibilityOptionHandler(accessibilityOption);
                    }
                }
            })

        }

    }

    /**
     *  Function to add reset button 
     */
    resetHandler(footer: Element) {
        const resetBtn = document.createElement('button');
        resetBtn.classList.add('wcag-widget__reset');
        resetBtn.setAttribute('wcag-widget', 'reset');
        resetBtn.setAttribute('type', 'button');
        resetBtn.setAttribute('aria-label', 'Widget WCAG. Kliknij aby wyczyścić ustawienia.');

        // add text
        const resetText = this.options.resetOptions && this.options.resetOptions.text;

        if (resetText) {
            const resetTextSpan = document.createElement('span');
            resetTextSpan.classList.add('wcag-widget__reset-text');
            resetTextSpan.innerHTML = resetText;
            resetBtn.appendChild(resetTextSpan);
        }

        footer.appendChild(resetBtn);

        // add reset option event
        if (resetBtn) {
            this.reset(resetBtn);
        }
    }

    closeHandler(header: Element) {
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('wcag-widget__close');
        closeBtn.setAttribute('wcag-widget', 'close');
        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('aria-label', 'Widget WCAG. Kliknij aby zamknąć.');
        header.appendChild(closeBtn);

        // add close widget event
        if (closeBtn) {
            this.close(closeBtn);
        }
    }

    accessibilityOptionHandler(accessibilityOption: any) {
        const body = `<a href="#" aria-label="${accessibilityOption.options.title}" class="options__item" role="button" wcag-widget-action="option-${accessibilityOption.options.property}" wcag-widget-name="${accessibilityOption.options.name}" wcag-widget-active="false"> <div class="item__icon"> <img src="${accessibilityOption.icon}" alt="icon" class="icon"/> </div><div class="item__name"> <h3>${accessibilityOption.options.title}</h3> </div><div class="item__levels" wcag-widget="option-levels"></div></a>`;

        const optionsContent = this.wrapper.querySelector(`[wcag-widget="options-${accessibilityOption.options.category}"]`);

        if (optionsContent) {
            optionsContent.insertAdjacentHTML('beforeend', body)

            const optionWrapper = optionsContent.querySelector(`[wcag-widget-action="option-${accessibilityOption.options.property}"]`);

            if (optionWrapper) {
                const levelsWrapper = optionWrapper.querySelector(`[wcag-widget="option-levels"]`)
                // levels handler
                if (accessibilityOption.options.type === 'levels' && levelsWrapper) {
                    this.levelsHandler(levelsWrapper, accessibilityOption.options.levels)
                }

                // Initialize this option changer
                optionWrapper.addEventListener('click', () => {
                    this.optionsChanger(optionWrapper, accessibilityOption.options)
                })
            }
        }
    }

    levelsHandler(levelsWrapper: Element, levels: []) {

        const levelsOptions = levels;
        // const levelsMap = new Map();

        if (levelsWrapper && levelsOptions.length > 0) {
            let body = '';

            levelsOptions.forEach((level, index) => {
                body += `<span class="item" level="${index + 1}" level-value="${level}" level-active="false"></span>`;
                // levelsMap.set(index + 1, level);
            });

            levelsWrapper.innerHTML = body;
        }
    }

    readingFocusElementHandler() {
        const rsElementTop = document.createElement('div');
        const body = document.querySelector('body')

        rsElementTop.classList.add('reading-focus-element');
        rsElementTop.classList.add('reading-focus-top');
        rsElementTop.setAttribute('reading-focus', 'top');

        const rsElementBottom = document.createElement('div');

        rsElementBottom.classList.add('reading-focus-element');
        rsElementBottom.classList.add('reading-focus-bottom');
        rsElementBottom.setAttribute('reading-focus', 'bottom');

        if (body) {
            body.appendChild(rsElementTop);
            body.appendChild(rsElementBottom);
        }

        if (rsElementTop && rsElementBottom) {
            this.readingFocusCursor(rsElementTop, rsElementBottom);
        }
    }

    optionsChanger(optionWrapper: Element, options: any, startValue: any = null) {
        const action = options.action;

        switch (action) {
            case 'changeFontSize':
                this.changeLevels(optionWrapper, options, startValue);
                break;
            case 'changeLineHeight':
                this.changeLevels(optionWrapper, options, startValue);
                break;
            case 'changeLetterSpacing':
                this.changeLevels(optionWrapper, options, startValue);
                break;
            case 'changeTextAlign':
                this.changeLevels(optionWrapper, options, startValue);
                break;
            case 'changeGrayscale':
                this.changeContrast(optionWrapper, options, startValue);
                break;
            case 'changeInvert':
                this.changeContrast(optionWrapper, options, startValue);
                break;
            case 'changeContrastWhiteBlack':
                this.changeContrast(optionWrapper, options, startValue);
                break;
            case 'changeContrastBlackYellow':
                this.changeContrast(optionWrapper, options, startValue);
                break;
            case 'changeContrastYellowBlack':
                this.changeContrast(optionWrapper, options, startValue);
                break;
            case 'changeHighlightTitles':
                this.changeOptionBrowsing(optionWrapper, options, startValue);
                break;
            case 'changeHighlightLinks':
                this.changeOptionBrowsing(optionWrapper, options, startValue);
                break;
            case 'changeHideImages':
                this.changeOptionBrowsing(optionWrapper, options, startValue);
                break;
            case 'changeReadableFont':
                this.changeOptionBrowsing(optionWrapper, options, startValue);
                break;
            case 'changeOffTransition':
                this.changeOptionBrowsing(optionWrapper, options, startValue);
                break;
            case 'changeBigWhiteCursor':
                this.changeOptionBrowsing(optionWrapper, options, startValue);
                break;
            case 'changeBigBlackCursor':
                this.changeOptionBrowsing(optionWrapper, options, startValue);
                break;
            case 'changeReadingFocus':
                this.readingFocus(optionWrapper, options, startValue);
                break;
            default:
                console.error(`WCAG Widget Error: we did not find '${action}' accessibility option`);
        }
    }

    readingFocus(optionWrapper: Element, options: any, startValue: any = null) {
        const name = options.name
        const property = options.property
        const activeWrapper = optionWrapper

        if (activeWrapper.getAttribute(`wcag-widget-active`) === 'true') {

            const readingFocusElements = document.querySelectorAll('.reading-focus-element')

            if (readingFocusElements.length > 0) {
                readingFocusElements.forEach((el) => {
                    el.remove()
                })
            }

            this.removeClass(activeWrapper, property)
            window.WcagCookiesController.deleteCookie(name);
        } else {

            this.readingFocusElementHandler()
            this.addClass(activeWrapper, property)
            window.WcagCookiesController.addCookie(name, 'true');
        }

        if (startValue === 'true') {
            this.addClass(activeWrapper, property)
        }
    }

    changeContrast(optionWrapper: Element, options: any, startValue: any = null) {
        const name = options.name
        const property = options.property
        // const activeWrapper = optionWrapper.querySelector(`[wcag-widget="active"]`)
        const activeWrapper = optionWrapper

        // if (activeWrapper) {

        if (activeWrapper.getAttribute(`wcag-widget-active`) === 'true') {

            this.removeClass(activeWrapper, property)
            window.WcagCookiesController.deleteCookie(name);
        } else {

            // Find all active contrast and disabled
            const anotherActiveWrappers = this.wrapper.querySelectorAll(`[wcag-widget="options-${options.category}"] [wcag-widget-active="true"]`)

            if (anotherActiveWrappers.length > 0) {
                anotherActiveWrappers.forEach((item) => {
                    if (this.options.accessibilityOptions) {
                        const option = this.options.accessibilityOptions.find(({ name }) => name === item.getAttribute('wcag-widget-name'));

                        this.removeClass(item, option.options.property)
                        window.WcagCookiesController.deleteCookie(option.name);
                    }
                })
            }

            // Add class for new active contrast
            this.addClass(activeWrapper, property)
            window.WcagCookiesController.addCookie(name, 'true');
        }

        if (startValue === 'true') {

            this.addClass(activeWrapper, property)

        }
        // }
    }

    changeOptionBrowsing(optionWrapper: Element, options: any, startValue: any = null) {
        const name = options.name
        const property = options.property
        const activeWrapper = optionWrapper

        if (activeWrapper.getAttribute(`wcag-widget-active`) === 'true') {

            this.removeClass(activeWrapper, property)
            window.WcagCookiesController.deleteCookie(name);
        } else {

            // Add class for new active option
            this.addClass(activeWrapper, property)
            window.WcagCookiesController.addCookie(name, 'true');
        }

        if (startValue === 'true') {

            this.addClass(activeWrapper, property)

        }
    }

    addClass(activeWrapper: Element, property: string) {

        const html = document.querySelector('html')

        html?.classList.add(`wcag-widget-${property}`);
        activeWrapper.classList.add('active');
        activeWrapper.setAttribute('wcag-widget-active', 'true');
    }

    removeClass(activeWrapper: Element, property: string) {

        const html = document.querySelector('html')

        html?.classList.remove(`wcag-widget-${property}`);
        activeWrapper.classList.remove('active');
        activeWrapper.setAttribute('wcag-widget-active', 'false');
    }

    changeLevels(optionWrapper: Element, options: any, startValue: any = null): void {
        const name = options.name
        const property = options.property
        const levelsOptions = options.levels;
        const levelsWrapper = optionWrapper.querySelector(`[wcag-widget="option-levels"]`)

        startValue = startValue > 0 ? startValue - 1 : 0;

        if (levelsWrapper) {
            const activeLevelWrapper = levelsWrapper.querySelector(`[level-active="true"]`);
            let activeLevel = 0;

            if (activeLevelWrapper) {
                const levelValue = activeLevelWrapper.getAttribute('level');
                if (levelValue) {
                    activeLevel = parseFloat(levelValue);
                }

                activeLevelWrapper.setAttribute('level-active', 'false');
                activeLevelWrapper.classList.remove('active');
            } else {
                if (startValue) {
                    activeLevel = startValue;
                }
            }

            let nextLevel = activeLevel + 1;

            if (nextLevel > levelsOptions.length) {
                nextLevel = 0;
            }

            if (nextLevel > 0) {
                const getAllEditElements = document.querySelectorAll(
                    `body > *:not(.wcag-widget) p, body > *:not(.wcag-widget) a, body > *:not(.wcag-widget) span, body > *:not(.wcag-widget) button, body > *:not(.wcag-widget) h1, body > *:not(.wcag-widget) h2, body > *:not(.wcag-widget) h3, body > *:not(.wcag-widget) h4, body > *:not(.wcag-widget) h5, body > *:not(.wcag-widget) h6, body > *:not(.wcag-widget) label, body > *:not(.wcag-widget) input, body > *:not(.wcag-widget) select, body > *:not(.wcag-widget) textarea`
                );

                if (getAllEditElements.length > 0) {
                    getAllEditElements.forEach((element: any) => {

                        // get origin Property value and add to attribute
                        let originProperty = window.getComputedStyle(element, null).getPropertyValue(`${property}`);
                        if (originProperty === 'normal' && name === 'letterSpacing') {
                            originProperty = options.defaultValue
                        }

                        if (element.getAttribute(`wcag-widget-${property}-origin`)) {
                            originProperty = element.getAttribute(`wcag-widget-${property}-origin`)
                        }

                        element.setAttribute(`wcag-widget-${property}-origin`, originProperty);

                        if (name === 'textAlign') {
                            element.style.setProperty(property, `${levelsOptions[nextLevel - 1]}`);
                        } else {
                            // add style to new property
                            const newProperty = parseFloat(originProperty) * levelsOptions[nextLevel - 1];

                            // element.setAttribute('style', `${property}: ${newProperty}px`);
                            element.style.setProperty(property, `${newProperty}px`);
                        }
                    })
                }

                const levelWrapper = levelsWrapper.querySelector(`[level="${nextLevel}"][level-active="false"]`);

                if (levelWrapper) {
                    levelWrapper.setAttribute('level-active', 'true');
                    levelWrapper.classList.add('active');
                }

                // Add cookie
                window.WcagCookiesController.addCookie(name, nextLevel);

                optionWrapper.classList.add('active');
                optionWrapper.setAttribute('wcag-widget-active', 'true');
            } else {
                const getAllEditedElement = document.querySelectorAll(`[wcag-widget-${property}-origin]`);

                if (getAllEditedElement.length > 0) {
                    getAllEditedElement.forEach((element: any) => {
                        element.removeAttribute(`wcag-widget-${property}-origin`);

                        element.style.removeProperty(property);

                        // if (!element.getAttribute('style')) {
                        //     element.removeAttribute('style')
                        // }
                    })
                }

                // Delete cookie
                window.WcagCookiesController.deleteCookie(name);

                optionWrapper.classList.remove('active');
                optionWrapper.setAttribute('wcag-widget-active', 'false');
            }
        }
    }

    readingFocusCursor(rsElementTop: HTMLElement, rsElementBottom: HTMLElement) {
        document.addEventListener('mousemove', e => {
            const cursorPosPercent = (e.clientY / window.innerHeight).toFixed(2)

            rsElementTop.style.height = (parseFloat(cursorPosPercent) - 0.05) * 100 + '%';
            rsElementBottom.style.height = ((1 - parseFloat(cursorPosPercent)) - 0.05) * 100 + '%';
        })
    }

    reset(resetBtn: Element) {
        // const activeWcagOptions = localStorage.getItem('wcag-cookies')

        // if (activeWcagOptions) {
        //     localStorage.removeItem('wcag-cookies');
        // }
        resetBtn.addEventListener('click', (e) => {
            e.preventDefault()

            window.WcagCookiesController.clearCookie();
            location.reload();
        })
    }

    open(triggerBtn: Element) {
        triggerBtn.addEventListener('click', (e) => {
            e.preventDefault()

            this.wrapper.classList.add('active');
        })
    }

    close(closeBtn: Element) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault()

            this.wrapper.classList.remove('active');
        })
    }
}

export default Wcag;