import { ListProductsRespValues } from './ListProductsRespValues';


export class ListProductsRespHourly {
    public name?: string;
    public version?: string;
    public values?: Array<ListProductsRespValues>;
    public constructor() { 
    }
    public withName(name: string): ListProductsRespHourly {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ListProductsRespHourly {
        this['version'] = version;
        return this;
    }
    public withValues(values: Array<ListProductsRespValues>): ListProductsRespHourly {
        this['values'] = values;
        return this;
    }
}