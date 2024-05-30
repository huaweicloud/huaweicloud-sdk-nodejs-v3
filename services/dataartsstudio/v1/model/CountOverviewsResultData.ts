import { StatisticInfo } from './StatisticInfo';


export class CountOverviewsResultData {
    public value?: StatisticInfo;
    public constructor() { 
    }
    public withValue(value: StatisticInfo): CountOverviewsResultData {
        this['value'] = value;
        return this;
    }
}