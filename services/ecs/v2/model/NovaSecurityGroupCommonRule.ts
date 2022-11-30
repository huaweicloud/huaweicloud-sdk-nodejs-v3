import { NovaSecurityGroupCommonGroup } from './NovaSecurityGroupCommonGroup';
import { NovaSecurityGroupCommonIpRange } from './NovaSecurityGroupCommonIpRange';


export class NovaSecurityGroupCommonRule {
    private 'from_port': number | undefined;
    public group: NovaSecurityGroupCommonGroup;
    public id: string;
    private 'ip_protocol': string | undefined;
    private 'ip_range': NovaSecurityGroupCommonIpRange | undefined;
    private 'parent_group_id': string | undefined;
    private 'to_port': number | undefined;
    public constructor(fromPort?: any, group?: any, id?: any, ipProtocol?: any, ipRange?: any, parentGroupId?: any, toPort?: any) { 
        this['from_port'] = fromPort;
        this['group'] = group;
        this['id'] = id;
        this['ip_protocol'] = ipProtocol;
        this['ip_range'] = ipRange;
        this['parent_group_id'] = parentGroupId;
        this['to_port'] = toPort;
    }
    public withFromPort(fromPort: number): NovaSecurityGroupCommonRule {
        this['from_port'] = fromPort;
        return this;
    }
    public set fromPort(fromPort: number | undefined) {
        this['from_port'] = fromPort;
    }
    public get fromPort() {
        return this['from_port'];
    }
    public withGroup(group: NovaSecurityGroupCommonGroup): NovaSecurityGroupCommonRule {
        this['group'] = group;
        return this;
    }
    public withId(id: string): NovaSecurityGroupCommonRule {
        this['id'] = id;
        return this;
    }
    public withIpProtocol(ipProtocol: string): NovaSecurityGroupCommonRule {
        this['ip_protocol'] = ipProtocol;
        return this;
    }
    public set ipProtocol(ipProtocol: string | undefined) {
        this['ip_protocol'] = ipProtocol;
    }
    public get ipProtocol() {
        return this['ip_protocol'];
    }
    public withIpRange(ipRange: NovaSecurityGroupCommonIpRange): NovaSecurityGroupCommonRule {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: NovaSecurityGroupCommonIpRange | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange() {
        return this['ip_range'];
    }
    public withParentGroupId(parentGroupId: string): NovaSecurityGroupCommonRule {
        this['parent_group_id'] = parentGroupId;
        return this;
    }
    public set parentGroupId(parentGroupId: string | undefined) {
        this['parent_group_id'] = parentGroupId;
    }
    public get parentGroupId() {
        return this['parent_group_id'];
    }
    public withToPort(toPort: number): NovaSecurityGroupCommonRule {
        this['to_port'] = toPort;
        return this;
    }
    public set toPort(toPort: number | undefined) {
        this['to_port'] = toPort;
    }
    public get toPort() {
        return this['to_port'];
    }
}