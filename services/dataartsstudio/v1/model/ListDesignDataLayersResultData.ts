import { DataLayerVO } from './DataLayerVO';


export class ListDesignDataLayersResultData {
    public value?: Array<DataLayerVO>;
    public constructor() { 
    }
    public withValue(value: Array<DataLayerVO>): ListDesignDataLayersResultData {
        this['value'] = value;
        return this;
    }
}