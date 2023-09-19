import { StartKibanaPublicReqElbWhitelist } from './StartKibanaPublicReqElbWhitelist';


export class CloseKibanaPublicReq {
    public eipSize?: number;
    public elbWhiteList?: StartKibanaPublicReqElbWhitelist;
    public constructor() { 
    }
    public withEipSize(eipSize: number): CloseKibanaPublicReq {
        this['eipSize'] = eipSize;
        return this;
    }
    public withElbWhiteList(elbWhiteList: StartKibanaPublicReqElbWhitelist): CloseKibanaPublicReq {
        this['elbWhiteList'] = elbWhiteList;
        return this;
    }
}