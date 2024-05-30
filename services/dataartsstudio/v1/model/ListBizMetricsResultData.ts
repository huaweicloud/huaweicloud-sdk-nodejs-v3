import { ListBizMetricsResultDataValue } from './ListBizMetricsResultDataValue';


export class ListBizMetricsResultData {
    public value?: ListBizMetricsResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListBizMetricsResultDataValue): ListBizMetricsResultData {
        this['value'] = value;
        return this;
    }
}