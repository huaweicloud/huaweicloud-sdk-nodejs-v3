import { ADDomainInfo } from './ADDomainInfo';


export class Single2HaObject {
    private 'az_code_new_node'?: string;
    private 'dsspool_id'?: string;
    private 'is_auto_pay'?: boolean;
    private 'ad_domain_info'?: ADDomainInfo;
    public constructor(azCodeNewNode?: string) { 
        this['az_code_new_node'] = azCodeNewNode;
    }
    public withAzCodeNewNode(azCodeNewNode: string): Single2HaObject {
        this['az_code_new_node'] = azCodeNewNode;
        return this;
    }
    public set azCodeNewNode(azCodeNewNode: string  | undefined) {
        this['az_code_new_node'] = azCodeNewNode;
    }
    public get azCodeNewNode(): string | undefined {
        return this['az_code_new_node'];
    }
    public withDsspoolId(dsspoolId: string): Single2HaObject {
        this['dsspool_id'] = dsspoolId;
        return this;
    }
    public set dsspoolId(dsspoolId: string  | undefined) {
        this['dsspool_id'] = dsspoolId;
    }
    public get dsspoolId(): string | undefined {
        return this['dsspool_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): Single2HaObject {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withAdDomainInfo(adDomainInfo: ADDomainInfo): Single2HaObject {
        this['ad_domain_info'] = adDomainInfo;
        return this;
    }
    public set adDomainInfo(adDomainInfo: ADDomainInfo  | undefined) {
        this['ad_domain_info'] = adDomainInfo;
    }
    public get adDomainInfo(): ADDomainInfo | undefined {
        return this['ad_domain_info'];
    }
}