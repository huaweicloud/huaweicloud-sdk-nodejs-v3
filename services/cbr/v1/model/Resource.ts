import { ResourceExtraInfo } from './ResourceExtraInfo';


export class Resource {
    private 'extra_info'?: ResourceExtraInfo;
    public id?: string;
    public name?: string;
    public type?: string;
    public constructor(id?: string, type?: string) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withExtraInfo(extraInfo: ResourceExtraInfo): Resource {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ResourceExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): ResourceExtraInfo | undefined {
        return this['extra_info'];
    }
    public withId(id: string): Resource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Resource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): Resource {
        this['type'] = type;
        return this;
    }
}