import { CesDimsItemDisplay } from './CesDimsItemDisplay';


export class CesDimsItem {
    public params?: Array<string>;
    public display?: CesDimsItemDisplay;
    public constructor(params?: Array<string>, display?: CesDimsItemDisplay) { 
        this['params'] = params;
        this['display'] = display;
    }
    public withParams(params: Array<string>): CesDimsItem {
        this['params'] = params;
        return this;
    }
    public withDisplay(display: CesDimsItemDisplay): CesDimsItem {
        this['display'] = display;
        return this;
    }
}