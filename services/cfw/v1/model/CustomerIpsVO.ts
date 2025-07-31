import { IpsContent } from './IpsContent';
import { Port } from './Port';


export class CustomerIpsVO {
    public action?: CustomerIpsVOActionEnum | number;
    private 'affected_os'?: CustomerIpsVOAffectedOsEnum | number;
    private 'attack_type'?: number;
    private 'config_status'?: number;
    public contents?: Array<IpsContent>;
    public direction?: number;
    private 'dst_port'?: Port;
    private 'group_id'?: string;
    private 'ips_cfw_id'?: string;
    private 'ips_id'?: string;
    private 'ips_name'?: string;
    public protocol?: number;
    public severity?: number;
    public software?: number;
    private 'src_port'?: Port;
    public constructor() { 
    }
    public withAction(action: CustomerIpsVOActionEnum | number): CustomerIpsVO {
        this['action'] = action;
        return this;
    }
    public withAffectedOs(affectedOs: CustomerIpsVOAffectedOsEnum | number): CustomerIpsVO {
        this['affected_os'] = affectedOs;
        return this;
    }
    public set affectedOs(affectedOs: CustomerIpsVOAffectedOsEnum | number  | undefined) {
        this['affected_os'] = affectedOs;
    }
    public get affectedOs(): CustomerIpsVOAffectedOsEnum | number | undefined {
        return this['affected_os'];
    }
    public withAttackType(attackType: number): CustomerIpsVO {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: number  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): number | undefined {
        return this['attack_type'];
    }
    public withConfigStatus(configStatus: number): CustomerIpsVO {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: number  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): number | undefined {
        return this['config_status'];
    }
    public withContents(contents: Array<IpsContent>): CustomerIpsVO {
        this['contents'] = contents;
        return this;
    }
    public withDirection(direction: number): CustomerIpsVO {
        this['direction'] = direction;
        return this;
    }
    public withDstPort(dstPort: Port): CustomerIpsVO {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: Port  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): Port | undefined {
        return this['dst_port'];
    }
    public withGroupId(groupId: string): CustomerIpsVO {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIpsCfwId(ipsCfwId: string): CustomerIpsVO {
        this['ips_cfw_id'] = ipsCfwId;
        return this;
    }
    public set ipsCfwId(ipsCfwId: string  | undefined) {
        this['ips_cfw_id'] = ipsCfwId;
    }
    public get ipsCfwId(): string | undefined {
        return this['ips_cfw_id'];
    }
    public withIpsId(ipsId: string): CustomerIpsVO {
        this['ips_id'] = ipsId;
        return this;
    }
    public set ipsId(ipsId: string  | undefined) {
        this['ips_id'] = ipsId;
    }
    public get ipsId(): string | undefined {
        return this['ips_id'];
    }
    public withIpsName(ipsName: string): CustomerIpsVO {
        this['ips_name'] = ipsName;
        return this;
    }
    public set ipsName(ipsName: string  | undefined) {
        this['ips_name'] = ipsName;
    }
    public get ipsName(): string | undefined {
        return this['ips_name'];
    }
    public withProtocol(protocol: number): CustomerIpsVO {
        this['protocol'] = protocol;
        return this;
    }
    public withSeverity(severity: number): CustomerIpsVO {
        this['severity'] = severity;
        return this;
    }
    public withSoftware(software: number): CustomerIpsVO {
        this['software'] = software;
        return this;
    }
    public withSrcPort(srcPort: Port): CustomerIpsVO {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: Port  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): Port | undefined {
        return this['src_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomerIpsVOActionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum CustomerIpsVOAffectedOsEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10
}
