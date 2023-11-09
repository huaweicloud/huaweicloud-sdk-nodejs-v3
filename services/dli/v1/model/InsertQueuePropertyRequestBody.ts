import { InsertQueuePropertyRequestBodyProperties } from './InsertQueuePropertyRequestBodyProperties';


export class InsertQueuePropertyRequestBody {
    public properties?: InsertQueuePropertyRequestBodyProperties;
    public constructor() { 
    }
    public withProperties(properties: InsertQueuePropertyRequestBodyProperties): InsertQueuePropertyRequestBody {
        this['properties'] = properties;
        return this;
    }
}