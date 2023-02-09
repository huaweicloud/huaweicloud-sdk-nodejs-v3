import { ResourceBody } from './ResourceBody';


export class OriginRequest {
    public origin: ResourceBody;
    public constructor(origin?: any) { 
        this['origin'] = origin;
    }
    public withOrigin(origin: ResourceBody): OriginRequest {
        this['origin'] = origin;
        return this;
    }
}