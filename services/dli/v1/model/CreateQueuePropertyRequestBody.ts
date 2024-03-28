import { CreateQueuePropertyRequestBodyProperties } from './CreateQueuePropertyRequestBodyProperties';


export class CreateQueuePropertyRequestBody {
    public properties?: CreateQueuePropertyRequestBodyProperties;
    public constructor() { 
    }
    public withProperties(properties: CreateQueuePropertyRequestBodyProperties): CreateQueuePropertyRequestBody {
        this['properties'] = properties;
        return this;
    }
}