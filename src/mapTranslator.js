function mapTranslator(cssObj) {
    let result = {}
    const dictionary = {
        m: (v) => ({'margin': v}),
        mv: (v) => ({'marginTop': v, 'marginBottom': v}),
        mh: (v) => ({'marginLeft': v, 'marginRight': v}),
        mt: (v) => ({'marginTop':v}),
        ml: (v) => ({'marginLeft':v}),
        mb: (v) => ({'marginBottom':v}),
        mr: (v) => ({'marginRight':v}),
        p: (v) => ({'padding':v}),
        pv: (v) => ({'paddingTop': v, 'paddingBottom': v}),
        ph: (v) => ({'paddingLeft': v, 'paddingRight': v}),
        pt: (v) => ({'paddingTop':v}),
        pl: (v) => ({'paddingLeft':v}),
        pb: (v) => ({'paddingBottom':v}),
        pr: (v) => ({'paddingRight':v}),
        b: (v) => ({'borderWidth':v}),
        bv: (v) => ({'borderTopWidth': v, 'borderBottomWidth': v}),
        bh: (v) => ({'borderLeftWidth': v, 'borderRightWidth': v}),
        bt: (v) => ({'borderTopWidth':v}),
        bl: (v) => ({'borderLeftWidth':v}),
        bb: (v) => ({'borderBottomWidth':v}),
        br: (v) => ({'borderRightWidth':v}),
        justifyStart: (v) => ({'justifyContent':(v && 'flex-start')}),
        justifyCenter: (v) => ({'justifyContent':(v && 'center')}),
        justifyEnd: (v) => ({'justifyContent':(v && 'flex-end')}),
        justifySpaceAround: (v) => ({'justifyContent':(v && 'space-around')}),
        justifySpaceBetween: (v) => ({'justifyContent':(v && 'space-between')}),
        wrapStart: (v) => ({'justifyItems':(v && 'flex-start')}),
        wrapCenter: (v) => ({'justifyItems':(v && 'center')}),
        wrapEnd: (v) => ({'justifyItems':(v && 'flex-end')}),
        wrapSpaceAround: (v) => ({'justifyItems':(v && 'space-around')}),
        wrapSpaceBetween: (v) => ({'justifyItems':(v && 'space-between')}),
        alignStart: (v) => ({'alignItems':(v && 'flex-start')}),
        alignCenter: (v) => ({'alignItems':(v && 'center')}),
        alignEnd: (v) => ({'alignItems':(v && 'flex-end')}),
        alignStretch: (v) => ({'alignItems':(v && 'stretch')}),
        alignMeStart: (v) => ({'alignSelf':(v && 'flex-start')}),
        alignMeCenter: (v) => ({'alignSelf':(v && 'center')}),
        alignMeEnd: (v) => ({'alignSelf':(v && 'flex-end')}),
        alignMeStretch: (v) => ({'alignSelf':(v && 'stretch')}),
        bg: (v) => ({'background':v}),
        bgColor: (v) => ({'backgroundColor':v}),
        w: (v) => ({'width':v}),
        h: (v) => ({'height':v}),
        minH: (v) => ({'min-height':v}),
        minW: (v) => ({'min-width':v}),
        maxW: (v) => ({'max-width':v}),
        maxH: (v) => ({'max-height':v}),
        hide: (v) => ({'display':(v && 'none')}),
        show: (v) => ({'display':(v && 'flex')}),
        absolute: (v) => ({'position':(v && 'absolute')}),
        relative: (v) => ({'position':(v && 'relative')}),
        column: (v) => ({'flexDirection':(v && 'column')}),
        row: (v) => ({'flexDirection':(v && 'row')}),
        wrap: (v) => ({'flexWrap':(v && 'wrap')}),
        nowrap: (v) => ({'flexWrap':(v && 'nowrap')}),
        grow: (v) => ({'flexGrow':((v && 1) || v)}),
        shrink: (v) => ({'flexShrink':((v && 1) || v)}),
        basis: (v) => ({'flexBasis':((typeof v === 'undefined' && 'auto') || (typeof v === 'string' && v) || (typeof v === 'number' && (v > 0 && v<1 && v*100+'%')))}),
        scroll: (v) => ({'overflow':(v && 'auto')})
    }

    Object.keys(cssObj).forEach((inputProperty) => {
        let inputValue = cssObj[inputProperty]
        if (typeof dictionary[inputProperty] === 'function') {
            result = Object.assign({}, result, dictionary[inputProperty](inputValue))
        } else {
            result[inputProperty] = inputValue
        }
    })
    return result
}
export { mapTranslator };

// INPUT
// {
//   bgColor:'red',
//   m:'10px',
//   padding:'5px'
// }

// OUTPUT
// {
//   backgroundColor:'red',
//   margin:'10px',
//   padding:'5px'
// }
