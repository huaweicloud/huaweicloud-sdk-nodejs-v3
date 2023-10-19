import { AccessControlRule } from './AccessControlRule';


export class CreateAccessControlRequestBody {
    public type?: string;
    private 'ip_list'?: Array<AccessControlRule>;
    public constructor(type?: string, ipList?: Array<AccessControlRule>) { 
        this['type'] = type;
        this['ip_list'] = ipList;
    }
    public withType(type: string): CreateAccessControlRequestBody {
        this['type'] = type;
        return this;
    }
    public withIpList(ipList: Array<AccessControlRule>): CreateAccessControlRequestBody {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<AccessControlRule>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<AccessControlRule> | undefined {
        return this['ip_list'];
    }
}