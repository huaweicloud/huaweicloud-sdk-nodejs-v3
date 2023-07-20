import { CreateSessionReqResource } from './CreateSessionReqResource';


export class CreateSessionReqGroup {
    public name?: string;
    public resources?: Array<CreateSessionReqResource>;
    public constructor() { 
    }
    public withName(name: string): CreateSessionReqGroup {
        this['name'] = name;
        return this;
    }
    public withResources(resources: Array<CreateSessionReqResource>): CreateSessionReqGroup {
        this['resources'] = resources;
        return this;
    }
}