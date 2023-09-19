import { BindPublicReqEip } from './BindPublicReqEip';


export class BindPublicReq {
    public eip?: BindPublicReqEip;
    public isAutoPay?: number;
    public constructor(eip?: BindPublicReqEip) { 
        this['eip'] = eip;
    }
    public withEip(eip: BindPublicReqEip): BindPublicReq {
        this['eip'] = eip;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): BindPublicReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}