import { CommonQueueProperty } from './CommonQueueProperty';


export class CreateQueuePropertyRequestBody {
    public properties?: CommonQueueProperty;
    public constructor() { 
    }
    public withProperties(properties: CommonQueueProperty): CreateQueuePropertyRequestBody {
        this['properties'] = properties;
        return this;
    }
}