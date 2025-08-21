

export class AttackLog {
    public action?: string;
    public app?: string;
    private 'attack_rule'?: string;
    private 'attack_rule_id'?: string;
    private 'attack_type'?: string;
    public direction?: string;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    private 'dst_region_id'?: string;
    private 'dst_region_name'?: string;
    private 'dst_province_id'?: string;
    private 'dst_province_name'?: string;
    private 'dst_city_id'?: string;
    private 'dst_city_name'?: string;
    private 'event_time'?: number;
    public level?: string;
    public protocol?: string;
    public source?: string;
    private 'src_ip'?: string;
    private 'real_ip'?: string;
    public tag?: number;
    private 'src_port'?: number;
    private 'src_region_id'?: string;
    private 'src_region_name'?: string;
    private 'src_province_id'?: string;
    private 'src_province_name'?: string;
    private 'src_city_id'?: string;
    private 'src_city_name'?: string;
    private 'vgw_id'?: string;
    public constructor() { 
    }
    public withAction(action: string): AttackLog {
        this['action'] = action;
        return this;
    }
    public withApp(app: string): AttackLog {
        this['app'] = app;
        return this;
    }
    public withAttackRule(attackRule: string): AttackLog {
        this['attack_rule'] = attackRule;
        return this;
    }
    public set attackRule(attackRule: string  | undefined) {
        this['attack_rule'] = attackRule;
    }
    public get attackRule(): string | undefined {
        return this['attack_rule'];
    }
    public withAttackRuleId(attackRuleId: string): AttackLog {
        this['attack_rule_id'] = attackRuleId;
        return this;
    }
    public set attackRuleId(attackRuleId: string  | undefined) {
        this['attack_rule_id'] = attackRuleId;
    }
    public get attackRuleId(): string | undefined {
        return this['attack_rule_id'];
    }
    public withAttackType(attackType: string): AttackLog {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): string | undefined {
        return this['attack_type'];
    }
    public withDirection(direction: string): AttackLog {
        this['direction'] = direction;
        return this;
    }
    public withDstIp(dstIp: string): AttackLog {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): AttackLog {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withDstRegionId(dstRegionId: string): AttackLog {
        this['dst_region_id'] = dstRegionId;
        return this;
    }
    public set dstRegionId(dstRegionId: string  | undefined) {
        this['dst_region_id'] = dstRegionId;
    }
    public get dstRegionId(): string | undefined {
        return this['dst_region_id'];
    }
    public withDstRegionName(dstRegionName: string): AttackLog {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
    }
    public withDstProvinceId(dstProvinceId: string): AttackLog {
        this['dst_province_id'] = dstProvinceId;
        return this;
    }
    public set dstProvinceId(dstProvinceId: string  | undefined) {
        this['dst_province_id'] = dstProvinceId;
    }
    public get dstProvinceId(): string | undefined {
        return this['dst_province_id'];
    }
    public withDstProvinceName(dstProvinceName: string): AttackLog {
        this['dst_province_name'] = dstProvinceName;
        return this;
    }
    public set dstProvinceName(dstProvinceName: string  | undefined) {
        this['dst_province_name'] = dstProvinceName;
    }
    public get dstProvinceName(): string | undefined {
        return this['dst_province_name'];
    }
    public withDstCityId(dstCityId: string): AttackLog {
        this['dst_city_id'] = dstCityId;
        return this;
    }
    public set dstCityId(dstCityId: string  | undefined) {
        this['dst_city_id'] = dstCityId;
    }
    public get dstCityId(): string | undefined {
        return this['dst_city_id'];
    }
    public withDstCityName(dstCityName: string): AttackLog {
        this['dst_city_name'] = dstCityName;
        return this;
    }
    public set dstCityName(dstCityName: string  | undefined) {
        this['dst_city_name'] = dstCityName;
    }
    public get dstCityName(): string | undefined {
        return this['dst_city_name'];
    }
    public withEventTime(eventTime: number): AttackLog {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: number  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): number | undefined {
        return this['event_time'];
    }
    public withLevel(level: string): AttackLog {
        this['level'] = level;
        return this;
    }
    public withProtocol(protocol: string): AttackLog {
        this['protocol'] = protocol;
        return this;
    }
    public withSource(source: string): AttackLog {
        this['source'] = source;
        return this;
    }
    public withSrcIp(srcIp: string): AttackLog {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withRealIp(realIp: string): AttackLog {
        this['real_ip'] = realIp;
        return this;
    }
    public set realIp(realIp: string  | undefined) {
        this['real_ip'] = realIp;
    }
    public get realIp(): string | undefined {
        return this['real_ip'];
    }
    public withTag(tag: number): AttackLog {
        this['tag'] = tag;
        return this;
    }
    public withSrcPort(srcPort: number): AttackLog {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withSrcRegionId(srcRegionId: string): AttackLog {
        this['src_region_id'] = srcRegionId;
        return this;
    }
    public set srcRegionId(srcRegionId: string  | undefined) {
        this['src_region_id'] = srcRegionId;
    }
    public get srcRegionId(): string | undefined {
        return this['src_region_id'];
    }
    public withSrcRegionName(srcRegionName: string): AttackLog {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withSrcProvinceId(srcProvinceId: string): AttackLog {
        this['src_province_id'] = srcProvinceId;
        return this;
    }
    public set srcProvinceId(srcProvinceId: string  | undefined) {
        this['src_province_id'] = srcProvinceId;
    }
    public get srcProvinceId(): string | undefined {
        return this['src_province_id'];
    }
    public withSrcProvinceName(srcProvinceName: string): AttackLog {
        this['src_province_name'] = srcProvinceName;
        return this;
    }
    public set srcProvinceName(srcProvinceName: string  | undefined) {
        this['src_province_name'] = srcProvinceName;
    }
    public get srcProvinceName(): string | undefined {
        return this['src_province_name'];
    }
    public withSrcCityId(srcCityId: string): AttackLog {
        this['src_city_id'] = srcCityId;
        return this;
    }
    public set srcCityId(srcCityId: string  | undefined) {
        this['src_city_id'] = srcCityId;
    }
    public get srcCityId(): string | undefined {
        return this['src_city_id'];
    }
    public withSrcCityName(srcCityName: string): AttackLog {
        this['src_city_name'] = srcCityName;
        return this;
    }
    public set srcCityName(srcCityName: string  | undefined) {
        this['src_city_name'] = srcCityName;
    }
    public get srcCityName(): string | undefined {
        return this['src_city_name'];
    }
    public withVgwId(vgwId: string): AttackLog {
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