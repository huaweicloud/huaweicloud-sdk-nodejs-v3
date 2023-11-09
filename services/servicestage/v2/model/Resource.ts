import { ResourceType } from './ResourceType';


export class Resource {
    public id?: string;
    public name?: string;
    public type?: ResourceType;
    public constructor(id?: string, type?: ResourceType) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): Resource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Resource {
        this['name'] = name;
        return this;
    }
    public withType(type: ResourceType): Resource {
        this['type'] = type;
        return this;
    }
}