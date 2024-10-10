

export class ListDDoSEventData {
    private 'zone_ip'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'max_drop_kbps'?: string;
    private 'max_drop_pps'?: string;
    private 'max_in_kbps'?: string;
    private 'max_in_pps'?: string;
    private 'attack_types'?: string;
    private 'attack_ips'?: string;
    private 'attack_ips_desc'?: string;
    private 'attack_status'?: string;
    public constructor() { 
    }
    public withZoneIp(zoneIp: string): ListDDoSEventData {
        this['zone_ip'] = zoneIp;
        return this;
    }
    public set zoneIp(zoneIp: string  | undefined) {
        this['zone_ip'] = zoneIp;
    }
    public get zoneIp(): string | undefined {
        return this['zone_ip'];
    }
    public withStartTime(startTime: string): ListDDoSEventData {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDDoSEventData {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMaxDropKbps(maxDropKbps: string): ListDDoSEventData {
        this['max_drop_kbps'] = maxDropKbps;
        return this;
    }
    public set maxDropKbps(maxDropKbps: string  | undefined) {
        this['max_drop_kbps'] = maxDropKbps;
    }
    public get maxDropKbps(): string | undefined {
        return this['max_drop_kbps'];
    }
    public withMaxDropPps(maxDropPps: string): ListDDoSEventData {
        this['max_drop_pps'] = maxDropPps;
        return this;
    }
    public set maxDropPps(maxDropPps: string  | undefined) {
        this['max_drop_pps'] = maxDropPps;
    }
    public get maxDropPps(): string | undefined {
        return this['max_drop_pps'];
    }
    public withMaxInKbps(maxInKbps: string): ListDDoSEventData {
        this['max_in_kbps'] = maxInKbps;
        return this;
    }
    public set maxInKbps(maxInKbps: string  | undefined) {
        this['max_in_kbps'] = maxInKbps;
    }
    public get maxInKbps(): string | undefined {
        return this['max_in_kbps'];
    }
    public withMaxInPps(maxInPps: string): ListDDoSEventData {
        this['max_in_pps'] = maxInPps;
        return this;
    }
    public set maxInPps(maxInPps: string  | undefined) {
        this['max_in_pps'] = maxInPps;
    }
    public get maxInPps(): string | undefined {
        return this['max_in_pps'];
    }
    public withAttackTypes(attackTypes: string): ListDDoSEventData {
        this['attack_types'] = attackTypes;
        return this;
    }
    public set attackTypes(attackTypes: string  | undefined) {
        this['attack_types'] = attackTypes;
    }
    public get attackTypes(): string | undefined {
        return this['attack_types'];
    }
    public withAttackIps(attackIps: string): ListDDoSEventData {
        this['attack_ips'] = attackIps;
        return this;
    }
    public set attackIps(attackIps: string  | undefined) {
        this['attack_ips'] = attackIps;
    }
    public get attackIps(): string | undefined {
        return this['attack_ips'];
    }
    public withAttackIpsDesc(attackIpsDesc: string): ListDDoSEventData {
        this['attack_ips_desc'] = attackIpsDesc;
        return this;
    }
    public set attackIpsDesc(attackIpsDesc: string  | undefined) {
        this['attack_ips_desc'] = attackIpsDesc;
    }
    public get attackIpsDesc(): string | undefined {
        return this['attack_ips_desc'];
    }
    public withAttackStatus(attackStatus: string): ListDDoSEventData {
        this['attack_status'] = attackStatus;
        return this;
    }
    public set attackStatus(attackStatus: string  | undefined) {
        this['attack_status'] = attackStatus;
    }
    public get attackStatus(): string | undefined {
        return this['attack_status'];
    }
}