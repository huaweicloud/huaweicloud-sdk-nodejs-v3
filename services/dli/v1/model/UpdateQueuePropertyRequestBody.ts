import { AdvancedQueueProperty } from './AdvancedQueueProperty';


export class UpdateQueuePropertyRequestBody {
    public properties?: AdvancedQueueProperty;
    public constructor() { 
    }
    public withProperties(properties: AdvancedQueueProperty): UpdateQueuePropertyRequestBody {
        this['properties'] = properties;
        return this;
    }
}