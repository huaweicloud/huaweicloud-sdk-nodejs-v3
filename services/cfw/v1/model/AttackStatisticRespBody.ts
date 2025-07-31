import { TopInfo } from './TopInfo';


export class AttackStatisticRespBody {
    public apps?: Array<TopInfo>;
    private 'associated_name'?: string;
    private 'associated_type'?: string;
    private 'attack_count'?: number;
    private 'attack_type'?: string;
    private 'deny_count'?: number;
    private 'dst_ports'?: Array<TopInfo>;
    public ip?: string;
    private 'latest_time'?: number;
    private 'region_id'?: string;
    private 'region_name'?: string;
    private 'src_type'?: string;
    private 'vgw_id'?: string;
    public constructor() { 
    }
    public withApps(apps: Array<TopInfo>): AttackStatisticRespBody {
        this['apps'] = apps;
        return this;
    }
    public withAssociatedName(associatedName: string): AttackStatisticRespBody {
        this['associated_name'] = associatedName;
        return this;
    }
    public set associatedName(associatedName: string  | undefined) {
        this['associated_name'] = associatedName;
    }
    public get associatedName(): string | undefined {
        return this['associated_name'];
    }
    public withAssociatedType(associatedType: string): AttackStatisticRespBody {
        this['associated_type'] = associatedType;
        return this;
    }
    public set associatedType(associatedType: string  | undefined) {
        this['associated_type'] = associatedType;
    }
    public get associatedType(): string | undefined {
        return this['associated_type'];
    }
    public withAttackCount(attackCount: number): AttackStatisticRespBody {
        this['attack_count'] = attackCount;
        return this;
    }
    public set attackCount(attackCount: number  | undefined) {
        this['attack_count'] = attackCount;
    }
    public get attackCount(): number | undefined {
        return this['attack_count'];
    }
    public withAttackType(attackType: string): AttackStatisticRespBody {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): string | undefined {
        return this['attack_type'];
    }
    public withDenyCount(denyCount: number): AttackStatisticRespBody {
        this['deny_count'] = denyCount;
        return this;
    }
    public set denyCount(denyCount: number  | undefined) {
        this['deny_count'] = denyCount;
    }
    public get denyCount(): number | undefined {
        return this['deny_count'];
    }
    public withDstPorts(dstPorts: Array<TopInfo>): AttackStatisticRespBody {
        this['dst_ports'] = dstPorts;
        return this;
    }
    public set dstPorts(dstPorts: Array<TopInfo>  | undefined) {
        this['dst_ports'] = dstPorts;
    }
    public get dstPorts(): Array<TopInfo> | undefined {
        return this['dst_ports'];
    }
    public withIp(ip: string): AttackStatisticRespBody {
        this['ip'] = ip;
        return this;
    }
    public withLatestTime(latestTime: number): AttackStatisticRespBody {
        this['latest_time'] = latestTime;
        return this;
    }
    public set latestTime(latestTime: number  | undefined) {
        this['latest_time'] = latestTime;
    }
    public get latestTime(): number | undefined {
        return this['latest_time'];
    }
    public withRegionId(regionId: string): AttackStatisticRespBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withRegionName(regionName: string): AttackStatisticRespBody {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withSrcType(srcType: string): AttackStatisticRespBody {
        this['src_type'] = srcType;
        return this;
    }
    public set srcType(srcType: string  | undefined) {
        this['src_type'] = srcType;
    }
    public get srcType(): string | undefined {
        return this['src_type'];
    }
    public withVgwId(vgwId: string): AttackStatisticRespBody {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
}