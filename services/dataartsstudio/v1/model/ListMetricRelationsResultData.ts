import { ListMetricRelationsResultDataValue } from './ListMetricRelationsResultDataValue';


export class ListMetricRelationsResultData {
    public value?: ListMetricRelationsResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListMetricRelationsResultDataValue): ListMetricRelationsResultData {
        this['value'] = value;
        return this;
    }
}