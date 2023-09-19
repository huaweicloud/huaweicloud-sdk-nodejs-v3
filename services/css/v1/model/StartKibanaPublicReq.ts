import { StartKibanaPublicReqElbWhitelist } from './StartKibanaPublicReqElbWhitelist';


export class StartKibanaPublicReq {
    public eipSize?: number;
    public elbWhiteList?: StartKibanaPublicReqElbWhitelist;
    public isAutoPay?: number;
    public constructor(eipSize?: number, elbWhiteList?: StartKibanaPublicReqElbWhitelist) { 
        this['eipSize'] = eipSize;
        this['elbWhiteList'] = elbWhiteList;
    }
    public withEipSize(eipSize: number): StartKibanaPublicReq {
        this['eipSize'] = eipSize;
        return this;
    }
    public withElbWhiteList(elbWhiteList: StartKibanaPublicReqElbWhitelist): StartKibanaPublicReq {
        this['elbWhiteList'] = elbWhiteList;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): StartKibanaPublicReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}