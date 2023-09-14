import { ListProductsRespValues } from './ListProductsRespValues';


export class ShowInstanceExtendProductInfoRespMonthly {
    public name?: string;
    public version?: string;
    public values?: Array<ListProductsRespValues>;
    public constructor() { 
    }
    public withName(name: string): ShowInstanceExtendProductInfoRespMonthly {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ShowInstanceExtendProductInfoRespMonthly {
        this['version'] = version;
        return this;
    }
    public withValues(values: Array<ListProductsRespValues>): ShowInstanceExtendProductInfoRespMonthly {
        this['values'] = values;
        return this;
    }
}