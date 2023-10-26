import { CdmCreateClusterReqCluster } from './CdmCreateClusterReqCluster';


export class CdmCreateClusterReq {
    public cluster?: CdmCreateClusterReqCluster;
    private 'auto_remind'?: boolean;
    private 'phone_num'?: string;
    public email?: string;
    public constructor(cluster?: CdmCreateClusterReqCluster) { 
        this['cluster'] = cluster;
    }
    public withCluster(cluster: CdmCreateClusterReqCluster): CdmCreateClusterReq {
        this['cluster'] = cluster;
        return this;
    }
    public withAutoRemind(autoRemind: boolean): CdmCreateClusterReq {
        this['auto_remind'] = autoRemind;
        return this;
    }
    public set autoRemind(autoRemind: boolean  | undefined) {
        this['auto_remind'] = autoRemind;
    }
    public get autoRemind(): boolean | undefined {
        return this['auto_remind'];
    }
    public withPhoneNum(phoneNum: string): CdmCreateClusterReq {
        this['phone_num'] = phoneNum;
        return this;
    }
    public set phoneNum(phoneNum: string  | undefined) {
        this['phone_num'] = phoneNum;
    }
    public get phoneNum(): string | undefined {
        return this['phone_num'];
    }
    public withEmail(email: string): CdmCreateClusterReq {
        this['email'] = email;
        return this;
    }
}