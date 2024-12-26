

export class CustomerIpsListVO {
    public action?: number;
    private 'affected_os'?: number;
    private 'attack_type'?: number;
    private 'config_status'?: number;
    public content?: string;
    private 'dst_port_type'?: number;
    private 'dst_ports'?: string;
    private 'group_id'?: string;
    private 'ips_cfw_id'?: string;
    private 'ips_id'?: string;
    private 'ips_name'?: string;
    public protocol?: number;
    public severity?: number;
    public software?: number;
    private 'src_port_type'?: number;
    private 'src_ports'?: string;
    public constructor() { 
    }
    public withAction(action: number): CustomerIpsListVO {
        this['action'] = action;
        return this;
    }
    public withAffectedOs(affectedOs: number): CustomerIpsListVO {
        this['affected_os'] = affectedOs;
        return this;
    }
    public set affectedOs(affectedOs: number  | undefined) {
        this['affected_os'] = affectedOs;
    }
    public get affectedOs(): number | undefined {
        return this['affected_os'];
    }
    public withAttackType(attackType: number): CustomerIpsListVO {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: number  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): number | undefined {
        return this['attack_type'];
    }
    public withConfigStatus(configStatus: number): CustomerIpsListVO {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: number  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): number | undefined {
        return this['config_status'];
    }
    public withContent(content: string): CustomerIpsListVO {
        this['content'] = content;
        return this;
    }
    public withDstPortType(dstPortType: number): CustomerIpsListVO {
        this['dst_port_type'] = dstPortType;
        return this;
    }
    public set dstPortType(dstPortType: number  | undefined) {
        this['dst_port_type'] = dstPortType;
    }
    public get dstPortType(): number | undefined {
        return this['dst_port_type'];
    }
    public withDstPorts(dstPorts: string): CustomerIpsListVO {
        this['dst_ports'] = dstPorts;
        return this;
    }
    public set dstPorts(dstPorts: string  | undefined) {
        this['dst_ports'] = dstPorts;
    }
    public get dstPorts(): string | undefined {
        return this['dst_ports'];
    }
    public withGroupId(groupId: string): CustomerIpsListVO {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIpsCfwId(ipsCfwId: string): CustomerIpsListVO {
        this['ips_cfw_id'] = ipsCfwId;
        return this;
    }
    public set ipsCfwId(ipsCfwId: string  | undefined) {
        this['ips_cfw_id'] = ipsCfwId;
    }
    public get ipsCfwId(): string | undefined {
        return this['ips_cfw_id'];
    }
    public withIpsId(ipsId: string): CustomerIpsListVO {
        this['ips_id'] = ipsId;
        return this;
    }
    public set ipsId(ipsId: string  | undefined) {
        this['ips_id'] = ipsId;
    }
    public get ipsId(): string | undefined {
        return this['ips_id'];
    }
    public withIpsName(ipsName: string): CustomerIpsListVO {
        this['ips_name'] = ipsName;
        return this;
    }
    public set ipsName(ipsName: string  | undefined) {
        this['ips_name'] = ipsName;
    }
    public get ipsName(): string | undefined {
        return this['ips_name'];
    }
    public withProtocol(protocol: number): CustomerIpsListVO {
        this['protocol'] = protocol;
        return this;
    }
    public withSeverity(severity: number): CustomerIpsListVO {
        this['severity'] = severity;
        return this;
    }
    public withSoftware(software: number): CustomerIpsListVO {
        this['software'] = software;
        return this;
    }
    public withSrcPortType(srcPortType: number): CustomerIpsListVO {
        this['src_port_type'] = srcPortType;
        return this;
    }
    public set srcPortType(srcPortType: number  | undefined) {
        this['src_port_type'] = srcPortType;
    }
    public get srcPortType(): number | undefined {
        return this['src_port_type'];
    }
    public withSrcPorts(srcPorts: string): CustomerIpsListVO {
        this['src_ports'] = srcPorts;
        return this;
    }
    public set srcPorts(srcPorts: string  | undefined) {
        this['src_ports'] = srcPorts;
    }
    public get srcPorts(): string | undefined {
        return this['src_ports'];
    }
}