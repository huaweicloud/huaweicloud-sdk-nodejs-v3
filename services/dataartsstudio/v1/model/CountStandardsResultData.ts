import { StatisticStandardCoverageVO } from './StatisticStandardCoverageVO';


export class CountStandardsResultData {
    public value?: StatisticStandardCoverageVO;
    public constructor() { 
    }
    public withValue(value: StatisticStandardCoverageVO): CountStandardsResultData {
        this['value'] = value;
        return this;
    }
}