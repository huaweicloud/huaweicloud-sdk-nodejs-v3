import { CreateIpGroupIpOption } from './CreateIpGroupIpOption';


export class CreateIpGroupOption {
    public name: string;
    public description?: string;
    private 'ip_list'?: Array<CreateIpGroupIpOption> | undefined;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CreateIpGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateIpGroupOption {
        this['description'] = description;
        return this;
    }
    public withIpList(ipList: Array<CreateIpGroupIpOption>): CreateIpGroupOption {
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