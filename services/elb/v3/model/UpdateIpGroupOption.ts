import { UpadateIpGroupIpOption } from './UpadateIpGroupIpOption';


export class UpdateIpGroupOption {
    public description?: string;
    public name?: string;
    private 'ip_list'?: Array<UpadateIpGroupIpOption> | undefined;
    public constructor() { 
    }
    public withDescription(description: string): UpdateIpGroupOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateIpGroupOption {
        this['name'] = name;
        return this;
    }
    public withIpList(ipList: Array<UpadateIpGroupIpOption>): UpdateIpGroupOption {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<UpadateIpGroupIpOption> | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList() {
        return this['ip_list'];
    }
}