import { DataEntityWithExtInfo } from './DataEntityWithExtInfo';


export class CreateOrUpdateEntitiesRequest {
    public instance?: string;
    public body?: DataEntityWithExtInfo;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): CreateOrUpdateEntitiesRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: DataEntityWithExtInfo): CreateOrUpdateEntitiesRequest {
        this['body'] = body;
        return this;
    }
}