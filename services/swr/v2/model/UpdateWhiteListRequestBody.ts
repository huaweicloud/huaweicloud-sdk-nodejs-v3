import { IpInfo } from './IpInfo';


export class UpdateWhiteListRequestBody {
    private 'ip_list'?: Array<IpInfo>;
    public constructor(ipList?: Array<IpInfo>) { 
        this['ip_list'] = ipList;
    }
    public withIpList(ipList: Array<IpInfo>): UpdateWhiteListRequestBody {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpInfo> | undefined {
        return this['ip_list'];
    }
}