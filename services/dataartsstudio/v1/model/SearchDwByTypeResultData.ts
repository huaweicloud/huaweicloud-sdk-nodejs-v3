import { DataConnectionVO } from './DataConnectionVO';


export class SearchDwByTypeResultData {
    public value?: Array<DataConnectionVO>;
    public constructor() { 
    }
    public withValue(value: Array<DataConnectionVO>): SearchDwByTypeResultData {
        this['value'] = value;
        return this;
    }
}