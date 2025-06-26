import { Resource } from './Resource';


export class CreateOrderReq {
    public resources?: Array<Resource>;
    public type?: string;
    public constructor(resources?: Array<Resource>, type?: string) { 
        this['resources'] = resources;
        this['type'] = type;
    }
    public withResources(resources: Array<Resource>): CreateOrderReq {
        this['resources'] = resources;
        return this;
    }
    public withType(type: string): CreateOrderReq {
        this['type'] = type;
        return this;
    }
}