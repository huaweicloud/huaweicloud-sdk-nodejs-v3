import { ResourceExtraInfo } from './ResourceExtraInfo';


export class ResourceCreate {
    private 'extra_info'?: ResourceExtraInfo | undefined;
    public id: string;
    public type: string;
    public name?: string;
    public constructor(id?: any, type?: any) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withExtraInfo(extraInfo: ResourceExtraInfo): ResourceCreate {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ResourceExtraInfo | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
        return this['extra_info'];
    }
    public withId(id: string): ResourceCreate {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ResourceCreate {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ResourceCreate {
        this['name'] = name;
        return this;
    }
}