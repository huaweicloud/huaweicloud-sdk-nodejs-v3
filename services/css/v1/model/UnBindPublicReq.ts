import { UnBindPublicReqEipReq } from './UnBindPublicReqEipReq';


export class UnBindPublicReq {
    public eip?: UnBindPublicReqEipReq;
    public constructor() { 
    }
    public withEip(eip: UnBindPublicReqEipReq): UnBindPublicReq {
        this['eip'] = eip;
        return this;
    }
}