import { DataobjectSearchConditionData } from './DataobjectSearchConditionData';


export class DataobjectSearchConditionConditions {
    public name?: string;
    public data?: Array<DataobjectSearchConditionData>;
    public constructor() { 
    }
    public withName(name: string): DataobjectSearchConditionConditions {
        this['name'] = name;
        return this;
    }
    public withData(data: Array<DataobjectSearchConditionData>): DataobjectSearchConditionConditions {
        this['data'] = data;
        return this;
    }
}