import { StartKibanaPublicReqElbWhitelist } from './StartKibanaPublicReqElbWhitelist';


export class StartKibanaPublicReq {
    private 'eip_size'?: number;
    private 'elb_white_list'?: StartKibanaPublicReqElbWhitelist;
    private 'is_auto_pay'?: number;
    public constructor(eipSize?: number) { 
        this['eip_size'] = eipSize;
    }
    public withEipSize(eipSize: number): StartKibanaPublicReq {
        this['eip_size'] = eipSize;
        return this;
    }
    public set eipSize(eipSize: number  | undefined) {
        this['eip_size'] = eipSize;
    }
    public get eipSize(): number | undefined {
        return this['eip_size'];
    }
    public withElbWhiteList(elbWhiteList: StartKibanaPublicReqElbWhitelist): StartKibanaPublicReq {
        this['elb_white_list'] = elbWhiteList;
        return this;
    }
    public set elbWhiteList(elbWhiteList: StartKibanaPublicReqElbWhitelist  | undefined) {
        this['elb_white_list'] = elbWhiteList;
    }
    public get elbWhiteList(): StartKibanaPublicReqElbWhitelist | undefined {
        return this['elb_white_list'];
    }
    public withIsAutoPay(isAutoPay: number): StartKibanaPublicReq {
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