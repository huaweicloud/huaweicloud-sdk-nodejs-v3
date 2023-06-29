import { CreateIpGroupIpOption } from './CreateIpGroupIpOption';


export class AddIpGroupIpRequestBody {
    private 'ip_list': Array<CreateIpGroupIpOption> | undefined;
    public constructor(ipList?: any) { 
        this['ip_list'] = ipList;
    }
    public withIpList(ipList: Array<CreateIpGroupIpOption>): AddIpGroupIpRequestBody {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<CreateIpGroupIpOption> | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList() {
        return this['ip_list'];
    }
}