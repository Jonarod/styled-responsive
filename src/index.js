import { css } from 'styled-components'
import { defaultBreakpoints } from './defaultBreakpoints'
import { mapTranslator } from './mapTranslator'

/**
* @param   {object}    breakpoints - Object of custom breakpoints
* @param   {object}    translatorFunc - Object of custom translator function
* @param   {object}    component props - Props
* @returns {*} - Returns a css() stylesheet
*/
const mediaFromProps = ({breakpoints = defaultBreakpoints, translatorFunc = mapTranslator}={}, ...props) => {
    const {children, theme, style, ...otherProps} = props[0];

    let mediaObject = {};
    let translatedMediaObject = {}
    let cssProperties;
    let result = '';

    Object.keys(breakpoints).forEach(breakpointName => {
        if (!(breakpointName in mediaObject)) {
            mediaObject[breakpointName] = {}
        }
        Object.keys(otherProps).filter(prop => {
            return prop.slice(0, breakpointName.length) === breakpointName
        }).forEach(inputProperty => {
            let propValue = otherProps[inputProperty]
            if (typeof propValue === 'object') {
                mediaObject[breakpointName] = propValue
            } else {
                mediaObject[breakpointName][inputProperty.slice(breakpointName.length, inputProperty.length)] = propValue
            }
        })

        if (typeof translatorFunc === 'function') {
            translatedMediaObject = Object.assign({}, translatorFunc(Object.assign({}, mediaObject[breakpointName])))
        } else {
            translatedMediaObject = Object.assign({}, mediaObject[breakpointName])
        }

        cssProperties = css`${translatedMediaObject}`
        result += `@media ${breakpoints[breakpointName]} { ${cssProperties} }`
    })
    return css`${result}`
}
export  { mediaFromProps }


/**
* @param   {string}    name - Breakpoints name tag
* @param   {object}    breakpoints - Object of custom breakpoints
* @returns {*} - Returns a css() stylesheet
*/
const media = (name, breakpoints = defaultBreakpoints) => {
    const query = breakpoints[name]
    return (...args) => css`@media ${query} {
        ${css(...args)}
    }`
}
export { media }
