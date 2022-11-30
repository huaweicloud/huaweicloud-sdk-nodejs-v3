import { UpadateIpGroupIpOption } from './UpadateIpGroupIpOption';


export class UpdateIpListOption {
    public name?: string;
    private 'ip_list'?: Array<UpadateIpGroupIpOption> | undefined;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateIpListOption {
        this['name'] = name;
        return this;
    }
    public withIpList(ipList: Array<UpadateIpGroupIpOption>): UpdateIpListOption {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<UpadateIpGroupIpOption> | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList() {
        return this['ip_list'];
    }
    public withDescription(description: string): UpdateIpListOption {
        this['description'] = description;
        return this;
    }
}