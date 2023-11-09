import { UpdateQueuePropertyRequestBodyProperties } from './UpdateQueuePropertyRequestBodyProperties';


export class UpdateQueuePropertyRequestBody {
    public properties?: UpdateQueuePropertyRequestBodyProperties;
    public constructor() { 
    }
    public withProperties(properties: UpdateQueuePropertyRequestBodyProperties): UpdateQueuePropertyRequestBody {
        this['properties'] = properties;
        return this;
    }
}