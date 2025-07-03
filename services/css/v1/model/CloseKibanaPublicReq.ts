import { StartKibanaPublicReqElbWhitelist } from './StartKibanaPublicReqElbWhitelist';


export class CloseKibanaPublicReq {
    private 'eip_size'?: number;
    private 'elb_white_list'?: StartKibanaPublicReqElbWhitelist;
    public constructor() { 
    }
    public withEipSize(eipSize: number): CloseKibanaPublicReq {
        this['eip_size'] = eipSize;
        return this;
    }
    public set eipSize(eipSize: number  | undefined) {
        this['eip_size'] = eipSize;
    }
    public get eipSize(): number | undefined {
        return this['eip_size'];
    }
    public withElbWhiteList(elbWhiteList: StartKibanaPublicReqElbWhitelist): CloseKibanaPublicReq {
        this['elb_white_list'] = elbWhiteList;
        return this;
    }
    public set elbWhiteList(elbWhiteList: StartKibanaPublicReqElbWhitelist  | undefined) {
        this['elb_white_list'] = elbWhiteList;
    }
    public get elbWhiteList(): StartKibanaPublicReqElbWhitelist | undefined {
        return this['elb_white_list'];
    }
}