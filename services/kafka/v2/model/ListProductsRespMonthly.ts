import { ListProductsRespValues1 } from './ListProductsRespValues1';


export class ListProductsRespMonthly {
    public name?: string;
    public version?: string;
    public values?: Array<ListProductsRespValues1>;
    public constructor() { 
    }
    public withName(name: string): ListProductsRespMonthly {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ListProductsRespMonthly {
        this['version'] = version;
        return this;
    }
    public withValues(values: Array<ListProductsRespValues1>): ListProductsRespMonthly {
        this['values'] = values;
        return this;
    }
}