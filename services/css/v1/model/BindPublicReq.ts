import { BindPublicReqEip } from './BindPublicReqEip';


export class BindPublicReq {
    public eip?: BindPublicReqEip;
    private 'white_list'?: string;
    private 'is_auto_pay'?: number;
    public constructor(eip?: BindPublicReqEip) { 
        this['eip'] = eip;
    }
    public withEip(eip: BindPublicReqEip): BindPublicReq {
        this['eip'] = eip;
        return this;
    }
    public withWhiteList(whiteList: string): BindPublicReq {
        this['white_list'] = whiteList;
        return this;
    }
    public set whiteList(whiteList: string  | undefined) {
        this['white_list'] = whiteList;
    }
    public get whiteList(): string | undefined {
        return this['white_list'];
    }
    public withIsAutoPay(isAutoPay: number): BindPublicReq {
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