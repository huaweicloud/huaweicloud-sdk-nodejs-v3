import { ReferResourceCreateParameters } from './ReferResourceCreateParameters';
import { ResourceType } from './ResourceType';


export class ReferResourceCreate {
    public id?: string;
    public type?: ResourceType;
    public parameters?: ReferResourceCreateParameters;
    public constructor(id?: string, type?: ResourceType) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): ReferResourceCreate {
        this['id'] = id;
        return this;
    }
    public withType(type: ResourceType): ReferResourceCreate {
        this['type'] = type;
        return this;
    }
    public withParameters(parameters: ReferResourceCreateParameters): ReferResourceCreate {
        this['parameters'] = parameters;
        return this;
    }
}