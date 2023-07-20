import { IpGroupIp } from './IpGroupIp';


export class BatchDeleteIpListOption {
    private 'ip_list'?: Array<IpGroupIp>;
    public constructor() { 
    }
    public withIpList(ipList: Array<IpGroupIp>): BatchDeleteIpListOption {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpGroupIp>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpGroupIp> | undefined {
        return this['ip_list'];
    }
}