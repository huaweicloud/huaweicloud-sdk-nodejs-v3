import { IpsContent } from './IpsContent';
import { Port } from './Port';


export class CustomerIpsSaveDto {
    private 'action_type'?: CustomerIpsSaveDtoActionTypeEnum | number;
    private 'affected_os'?: CustomerIpsSaveDtoAffectedOsEnum | number;
    private 'attack_type'?: number;
    public contents?: Array<IpsContent>;
    public direction?: number;
    private 'dst_port'?: Port;
    private 'fw_instance_id'?: string;
    private 'object_id'?: string;
    private 'ips_name'?: string;
    public protocol?: number;
    public severity?: number;
    public software?: number;
    private 'src_port'?: Port;
    public constructor(actionType?: number, affectedOs?: number, attackType?: number, contents?: Array<IpsContent>, direction?: number, dstPort?: Port, fwInstanceId?: string, ipsName?: string, protocol?: number, severity?: number, software?: number, srcPort?: Port) { 
        this['action_type'] = actionType;
        this['affected_os'] = affectedOs;
        this['attack_type'] = attackType;
        this['contents'] = contents;
        this['direction'] = direction;
        this['dst_port'] = dstPort;
        this['fw_instance_id'] = fwInstanceId;
        this['ips_name'] = ipsName;
        this['protocol'] = protocol;
        this['severity'] = severity;
        this['software'] = software;
        this['src_port'] = srcPort;
    }
    public withActionType(actionType: CustomerIpsSaveDtoActionTypeEnum | number): CustomerIpsSaveDto {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: CustomerIpsSaveDtoActionTypeEnum | number  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): CustomerIpsSaveDtoActionTypeEnum | number | undefined {
        return this['action_type'];
    }
    public withAffectedOs(affectedOs: CustomerIpsSaveDtoAffectedOsEnum | number): CustomerIpsSaveDto {
        this['affected_os'] = affectedOs;
        return this;
    }
    public set affectedOs(affectedOs: CustomerIpsSaveDtoAffectedOsEnum | number  | undefined) {
        this['affected_os'] = affectedOs;
    }
    public get affectedOs(): CustomerIpsSaveDtoAffectedOsEnum | number | undefined {
        return this['affected_os'];
    }
    public withAttackType(attackType: number): CustomerIpsSaveDto {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: number  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): number | undefined {
        return this['attack_type'];
    }
    public withContents(contents: Array<IpsContent>): CustomerIpsSaveDto {
        this['contents'] = contents;
        return this;
    }
    public withDirection(direction: number): CustomerIpsSaveDto {
        this['direction'] = direction;
        return this;
    }
    public withDstPort(dstPort: Port): CustomerIpsSaveDto {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: Port  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): Port | undefined {
        return this['dst_port'];
    }
    public withFwInstanceId(fwInstanceId: string): CustomerIpsSaveDto {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withObjectId(objectId: string): CustomerIpsSaveDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withIpsName(ipsName: string): CustomerIpsSaveDto {
        this['ips_name'] = ipsName;
        return this;
    }
    public set ipsName(ipsName: string  | undefined) {
        this['ips_name'] = ipsName;
    }
    public get ipsName(): string | undefined {
        return this['ips_name'];
    }
    public withProtocol(protocol: number): CustomerIpsSaveDto {
        this['protocol'] = protocol;
        return this;
    }
    public withSeverity(severity: number): CustomerIpsSaveDto {
        this['severity'] = severity;
        return this;
    }
    public withSoftware(software: number): CustomerIpsSaveDto {
        this['software'] = software;
        return this;
    }
    public withSrcPort(srcPort: Port): CustomerIpsSaveDto {
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
export enum CustomerIpsSaveDtoActionTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum CustomerIpsSaveDtoAffectedOsEnum {
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
