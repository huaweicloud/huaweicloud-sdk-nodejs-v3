import { ShowInstanceExtendProductInfoRespValues } from './ShowInstanceExtendProductInfoRespValues';


export class ShowInstanceExtendProductInfoRespHourly {
    public name?: string;
    public version?: string;
    public values?: Array<ShowInstanceExtendProductInfoRespValues>;
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
    public withValues(values: Array<ShowInstanceExtendProductInfoRespValues>): ShowInstanceExtendProductInfoRespHourly {
        this['values'] = values;
        return this;
    }
}