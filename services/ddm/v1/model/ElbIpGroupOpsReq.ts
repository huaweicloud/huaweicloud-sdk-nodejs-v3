import { IpGroupItem } from './IpGroupItem';


export class ElbIpGroupOpsReq {
    public name?: string;
    public type?: string;
    private 'enable_ip_group'?: boolean;
    private 'group_id'?: string;
    private 'ip_list'?: Array<IpGroupItem>;
    public constructor() { 
    }
    public withName(name: string): ElbIpGroupOpsReq {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ElbIpGroupOpsReq {
        this['type'] = type;
        return this;
    }
    public withEnableIpGroup(enableIpGroup: boolean): ElbIpGroupOpsReq {
        this['enable_ip_group'] = enableIpGroup;
        return this;
    }
    public set enableIpGroup(enableIpGroup: boolean  | undefined) {
        this['enable_ip_group'] = enableIpGroup;
    }
    public get enableIpGroup(): boolean | undefined {
        return this['enable_ip_group'];
    }
    public withGroupId(groupId: string): ElbIpGroupOpsReq {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIpList(ipList: Array<IpGroupItem>): ElbIpGroupOpsReq {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpGroupItem>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpGroupItem> | undefined {
        return this['ip_list'];
    }
}