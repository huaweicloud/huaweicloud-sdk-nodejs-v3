import { ResourceBody } from './ResourceBody';


export class OriginRequest {
    public origin?: ResourceBody;
    public constructor(origin?: ResourceBody) { 
        this['origin'] = origin;
    }
    public withOrigin(origin: ResourceBody): OriginRequest {
        this['origin'] = origin;
        return this;
    }
}