import { UpdateIpGroupIpOption } from './UpdateIpGroupIpOption';


export class UpdateIpGroupOption {
    public description?: string;
    public name?: string;
    private 'ip_list'?: Array<UpdateIpGroupIpOption>;
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
    public withIpList(ipList: Array<UpdateIpGroupIpOption>): UpdateIpGroupOption {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<UpdateIpGroupIpOption>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<UpdateIpGroupIpOption> | undefined {
        return this['ip_list'];
    }
}