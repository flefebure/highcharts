/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type CSSObject from '../../../Core/Renderer/CSSObject';
import type {
    SMAOptions,
    SMAParamsOptions
} from '../SMA/SMAOptions';

/* *
 *
 *  Declarations
 *
 * */

export interface DMIOptions extends SMAOptions {
    params?: DMIParamsOptions;
    tooltip?: Highcharts.TooltipOptions;
    plusDILine?: DMILineOptions;
    minusDILine?: DMILineOptions;
}

export interface DMILineOptions {
    styles?: CSSObject;
}

export interface DMIParamsOptions extends SMAParamsOptions {
    // for inheritance
}

export default DMIOptions;
