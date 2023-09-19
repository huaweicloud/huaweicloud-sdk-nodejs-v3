import { IndependentBodyReq } from './IndependentBodyReq';


export class IndependentReq {
    public type?: IndependentBodyReq;
    public constructor(type?: IndependentBodyReq) { 
        this['type'] = type;
    }
    public withType(type: IndependentBodyReq): IndependentReq {
        this['type'] = type;
        return this;
    }
}