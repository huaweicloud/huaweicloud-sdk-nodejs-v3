import { ListProductsRespValues } from './ListProductsRespValues';


export class ShowInstanceExtendProductInfoRespHourly {
    public name?: string;
    public version?: string;
    public values?: Array<ListProductsRespValues>;
    public constructor() { 
    }
    public withName(name: string): ShowInstanceExtendProductInfoRespHourly {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ShowInstanceExtendProductInfoRespHourly {
        this['version'] = version;
        return this;
    }
    public withValues(values: Array<ListProductsRespValues>): ShowInstanceExtendProductInfoRespHourly {
        this['values'] = values;
        return this;
    }
}