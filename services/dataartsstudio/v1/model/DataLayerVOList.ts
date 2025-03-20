import { DataLayerVO } from './DataLayerVO';


export class DataLayerVOList {
    public levels?: Array<DataLayerVO>;
    public constructor() { 
    }
    public withLevels(levels: Array<DataLayerVO>): DataLayerVOList {
        this['levels'] = levels;
        return this;
    }
}