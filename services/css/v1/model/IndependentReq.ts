import { IndependentBodyReq } from './IndependentBodyReq';


export class IndependentReq {
    public type?: IndependentBodyReq;
    private 'is_auto_pay'?: number;
    public constructor(type?: IndependentBodyReq) { 
        this['type'] = type;
    }
    public withType(type: IndependentBodyReq): IndependentReq {
        this['type'] = type;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): IndependentReq {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
}