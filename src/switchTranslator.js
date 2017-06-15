function defaultTranslator(props) {
    var result = {}
    if (props === 'undefined')
        return

    Object.keys(props).filter((key) => {
        switch (key) {
        case 'm':
            result['margin'] = props[key];
            break;
        case 'marginVertical':
        case 'mv':
            result['marginTop'] = props[key];
            result['marginBottom'] = props[key];
            break;
        case 'marginHorizontal':
        case 'mh':
            result['marginRight'] = props[key];
            result['marginLeft'] = props[key];
            break;
        case 'mt':
            result['marginTop'] = props[key];
            break;
        case 'ml':
            result['marginLeft'] = props[key];
            break;
        case 'mb':
            result['marginBottom'] = props[key];
            break;
        case 'mr':
            result['marginRight'] = props[key];
            break;
        case 'p':
            result['padding'] = props[key];
            break;
        case 'paddingVertical':
        case 'pv':
            result['paddingTop'] = props[key];
            result['paddingBottom'] = props[key];
            break;
        case 'paddingHorizontal':
        case 'ph':
            result['paddingRight'] = props[key];
            result['paddingLeft'] = props[key];
            break;
        case 'pt':
            result['paddingTop'] = props[key];
            break;
        case 'pl':
            result['paddingLeft'] = props[key];
            break;
        case 'pb':
            result['paddingBottom'] = props[key];
            break;
        case 'pr':
            result['paddingRight'] = props[key];
            break;
        case 'justifyStart':
            result['justifyContent'] = props[key] && 'flex-start';
            break;
        case 'justifyCenter':
            result['justifyContent'] = props[key] && 'center';
            break;
        case 'justifyEnd':
            result['justifyContent'] = props[key] && 'flex-end';
            break;
        case 'justifySpaceAround':
            result['justifyContent'] = props[key] && 'space-around';
            break;
        case 'justifySpaceBetween':
            result['justifyContent'] = props[key] && 'space-between';
            break;
        case 'wrapStart':
            result['justifyItems'] = props[key] && 'flex-start';
            break;
        case 'wrapCenter':
            result['justifyItems'] = props[key] && 'center';
            break;
        case 'wrapEnd':
            result['justifyItems'] = props[key] && 'flex-end';
            break;
        case 'wrapSpaceAround':
            result['justifyItems'] = props[key] && 'space-around';
            break;
        case 'wrapSpaceBetween':
            result['justifyItems'] = props[key] && 'space-between';
            break;
        case 'alignStart':
            result['alignItems'] = props[key] && 'flex-start';
            break;
        case 'alignCenter':
            result['alignItems'] = props[key] && 'center';
            break;
        case 'alignEnd':
            result['alignItems'] = props[key] && 'flex-end';
            break;
        case 'alignStretch':
            result['alignItems'] = props[key] && 'stretch';
            break;
        case 'alignMeStart':
            result['alignSelf'] = props[key] && 'flex-start';
            break;
        case 'alignMeCenter':
            result['alignSelf'] = props[key] && 'center';
            break;
        case 'alignMeEnd':
            result['alignSelf'] = props[key] && 'flex-end';
            break;
        case 'alignMeStretch':
            result['alignSelf'] = props[key] && 'stretch';
            break;
        case 'b':
            result['border'] = props[key];
            break;
        case 'borderVertical':
        case 'bv':
            result['borderTop'] = props[key];
            result['borderBottom'] = props[key];
            break;
        case 'borderHorizontal':
        case 'bh':
            result['borderRight'] = props[key];
            result['borderLeft'] = props[key];
            break;
        case 'bt':
            result['borderTop'] = props[key];
            break;
        case 'bl':
            result['borderLeft'] = props[key];
            break;
        case 'bb':
            result['borderBottom'] = props[key];
            break;
        case 'br':
            result['borderRight'] = props[key];
            break;
        case 'bg':
            result['background'] = props[key];
            break;
        case 'bgColor':
            result['backgroundColor'] = props[key];
            break;
        case 'w':
            result['width'] = props[key];
            break;
        case 'h':
            result['height'] = props[key];
            break;
        case 'minH':
            result['min-height'] = props[key];
            break;
        case 'minW':
            result['min-width'] = props[key];
            break;
        case 'maxW':
            result['max-width'] = props[key];
            break;
        case 'maxH':
            result['max-height'] = props[key];
            break;
        case 'hide':
            result['display'] = props[key] && 'none';
            break;
        case 'show':
            result['display'] = props[key] && 'flex';
            break;
        case 'absolute':
            result['position'] = props[key] && 'absolute';
            break;
        case 'relative':
            result['position'] = props[key] && 'relative';
            break;
        case 'column':
            result['flexDirection'] = props[key] && 'column';
            break;
        case 'row':
            result['flexDirection'] = props[key] && 'row';
            break;
        case 'wrap':
            result['flexWrap'] = props[key] && 'wrap';
            break;
        case 'nowrap':
            result['flexWrap'] = props[key] && 'nowrap';
            break;
        case 'grow':
            result['flexGrow'] = props[key] === true ? '1' : props[key];
            break;
        case 'shrink':
            result['flexShrink'] = props[key] === true ? '1' : props[key];
            break;
        case 'basis':
            result['flexBasis'] = typeof props[key] === 'string' && props[key] || typeof props[key] === 'number' && props[key] > 0 && props[key] < 1 && props[key] * 100 + '%' || typeof props[key] === 'undefined' && 'auto';
            break;
        case 'scroll':
            result['overflow'] = props[key] && 'auto';
            break;
        default:
            result[key] = props[key];
        }
        return null
    })
    return result
}

export {defaultTranslator};
