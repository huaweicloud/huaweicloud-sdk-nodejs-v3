import { UpdateIpGroupIpOption } from './UpdateIpGroupIpOption';


export class UpdateIpListOption {
    public name?: string;
    private 'ip_list'?: Array<UpdateIpGroupIpOption>;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateIpListOption {
        this['name'] = name;
        return this;
    }
    public withIpList(ipList: Array<UpdateIpGroupIpOption>): UpdateIpListOption {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<UpdateIpGroupIpOption>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<UpdateIpGroupIpOption> | undefined {
        return this['ip_list'];
    }
    public withDescription(description: string): UpdateIpListOption {
        this['description'] = description;
        return this;
    }
}