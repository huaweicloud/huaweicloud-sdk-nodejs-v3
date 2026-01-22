

export class LogVO {
    public app?: string;
    public bytes?: number;
    public direction?: string;
    private 'dst_host'?: string;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    private 'end_time'?: number;
    private 'log_id'?: string;
    public packets?: number;
    public protocol?: string;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'start_time'?: number;
    private 'dst_region_id'?: string;
    private 'dst_region_name'?: string;
    private 'dst_province_id'?: string;
    private 'dst_province_name'?: string;
    private 'dst_city_id'?: string;
    private 'dst_city_name'?: string;
    private 'src_region_id'?: string;
    private 'src_region_name'?: string;
    private 'src_province_id'?: string;
    private 'src_province_name'?: string;
    private 'src_city_id'?: string;
    private 'src_city_name'?: string;
    private 'vgw_id'?: string;
    private 'sctp_verification_tag'?: number;
    private 'sctp_is_handshake_flow'?: string;
    private 'qos_rule_id'?: string;
    private 'qos_rule_name'?: string;
    private 'qos_channel_id'?: string;
    private 'qos_channel_name'?: string;
    private 'qos_drop_packets'?: number;
    private 'qos_drop_bytes'?: number;
    private 'qos_rule_type'?: number;
    private 'qos_channel_type'?: number;
    public action?: string;
    public url?: string;
    private 'hit_time'?: number;
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    private 'rule_type'?: number;
    private 'attack_rule'?: string;
    private 'attack_rule_id'?: string;
    private 'attack_type'?: string;
    private 'event_time'?: number;
    public level?: string;
    public packet?: string;
    public source?: string;
    private 'real_ip'?: string;
    public tag?: number;
    public constructor() { 
    }
    public withApp(app: string): LogVO {
        this['app'] = app;
        return this;
    }
    public withBytes(bytes: number): LogVO {
        this['bytes'] = bytes;
        return this;
    }
    public withDirection(direction: string): LogVO {
        this['direction'] = direction;
        return this;
    }
    public withDstHost(dstHost: string): LogVO {
        this['dst_host'] = dstHost;
        return this;
    }
    public set dstHost(dstHost: string  | undefined) {
        this['dst_host'] = dstHost;
    }
    public get dstHost(): string | undefined {
        return this['dst_host'];
    }
    public withDstIp(dstIp: string): LogVO {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): LogVO {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withEndTime(endTime: number): LogVO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLogId(logId: string): LogVO {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withPackets(packets: number): LogVO {
        this['packets'] = packets;
        return this;
    }
    public withProtocol(protocol: string): LogVO {
        this['protocol'] = protocol;
        return this;
    }
    public withSrcIp(srcIp: string): LogVO {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): LogVO {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withStartTime(startTime: number): LogVO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDstRegionId(dstRegionId: string): LogVO {
        this['dst_region_id'] = dstRegionId;
        return this;
    }
    public set dstRegionId(dstRegionId: string  | undefined) {
        this['dst_region_id'] = dstRegionId;
    }
    public get dstRegionId(): string | undefined {
        return this['dst_region_id'];
    }
    public withDstRegionName(dstRegionName: string): LogVO {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
    }
    public withDstProvinceId(dstProvinceId: string): LogVO {
        this['dst_province_id'] = dstProvinceId;
        return this;
    }
    public set dstProvinceId(dstProvinceId: string  | undefined) {
        this['dst_province_id'] = dstProvinceId;
    }
    public get dstProvinceId(): string | undefined {
        return this['dst_province_id'];
    }
    public withDstProvinceName(dstProvinceName: string): LogVO {
        this['dst_province_name'] = dstProvinceName;
        return this;
    }
    public set dstProvinceName(dstProvinceName: string  | undefined) {
        this['dst_province_name'] = dstProvinceName;
    }
    public get dstProvinceName(): string | undefined {
        return this['dst_province_name'];
    }
    public withDstCityId(dstCityId: string): LogVO {
        this['dst_city_id'] = dstCityId;
        return this;
    }
    public set dstCityId(dstCityId: string  | undefined) {
        this['dst_city_id'] = dstCityId;
    }
    public get dstCityId(): string | undefined {
        return this['dst_city_id'];
    }
    public withDstCityName(dstCityName: string): LogVO {
        this['dst_city_name'] = dstCityName;
        return this;
    }
    public set dstCityName(dstCityName: string  | undefined) {
        this['dst_city_name'] = dstCityName;
    }
    public get dstCityName(): string | undefined {
        return this['dst_city_name'];
    }
    public withSrcRegionId(srcRegionId: string): LogVO {
        this['src_region_id'] = srcRegionId;
        return this;
    }
    public set srcRegionId(srcRegionId: string  | undefined) {
        this['src_region_id'] = srcRegionId;
    }
    public get srcRegionId(): string | undefined {
        return this['src_region_id'];
    }
    public withSrcRegionName(srcRegionName: string): LogVO {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withSrcProvinceId(srcProvinceId: string): LogVO {
        this['src_province_id'] = srcProvinceId;
        return this;
    }
    public set srcProvinceId(srcProvinceId: string  | undefined) {
        this['src_province_id'] = srcProvinceId;
    }
    public get srcProvinceId(): string | undefined {
        return this['src_province_id'];
    }
    public withSrcProvinceName(srcProvinceName: string): LogVO {
        this['src_province_name'] = srcProvinceName;
        return this;
    }
    public set srcProvinceName(srcProvinceName: string  | undefined) {
        this['src_province_name'] = srcProvinceName;
    }
    public get srcProvinceName(): string | undefined {
        return this['src_province_name'];
    }
    public withSrcCityId(srcCityId: string): LogVO {
        this['src_city_id'] = srcCityId;
        return this;
    }
    public set srcCityId(srcCityId: string  | undefined) {
        this['src_city_id'] = srcCityId;
    }
    public get srcCityId(): string | undefined {
        return this['src_city_id'];
    }
    public withSrcCityName(srcCityName: string): LogVO {
        this['src_city_name'] = srcCityName;
        return this;
    }
    public set srcCityName(srcCityName: string  | undefined) {
        this['src_city_name'] = srcCityName;
    }
    public get srcCityName(): string | undefined {
        return this['src_city_name'];
    }
    public withVgwId(vgwId: string): LogVO {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withSctpVerificationTag(sctpVerificationTag: number): LogVO {
        this['sctp_verification_tag'] = sctpVerificationTag;
        return this;
    }
    public set sctpVerificationTag(sctpVerificationTag: number  | undefined) {
        this['sctp_verification_tag'] = sctpVerificationTag;
    }
    public get sctpVerificationTag(): number | undefined {
        return this['sctp_verification_tag'];
    }
    public withSctpIsHandshakeFlow(sctpIsHandshakeFlow: string): LogVO {
        this['sctp_is_handshake_flow'] = sctpIsHandshakeFlow;
        return this;
    }
    public set sctpIsHandshakeFlow(sctpIsHandshakeFlow: string  | undefined) {
        this['sctp_is_handshake_flow'] = sctpIsHandshakeFlow;
    }
    public get sctpIsHandshakeFlow(): string | undefined {
        return this['sctp_is_handshake_flow'];
    }
    public withQosRuleId(qosRuleId: string): LogVO {
        this['qos_rule_id'] = qosRuleId;
        return this;
    }
    public set qosRuleId(qosRuleId: string  | undefined) {
        this['qos_rule_id'] = qosRuleId;
    }
    public get qosRuleId(): string | undefined {
        return this['qos_rule_id'];
    }
    public withQosRuleName(qosRuleName: string): LogVO {
        this['qos_rule_name'] = qosRuleName;
        return this;
    }
    public set qosRuleName(qosRuleName: string  | undefined) {
        this['qos_rule_name'] = qosRuleName;
    }
    public get qosRuleName(): string | undefined {
        return this['qos_rule_name'];
    }
    public withQosChannelId(qosChannelId: string): LogVO {
        this['qos_channel_id'] = qosChannelId;
        return this;
    }
    public set qosChannelId(qosChannelId: string  | undefined) {
        this['qos_channel_id'] = qosChannelId;
    }
    public get qosChannelId(): string | undefined {
        return this['qos_channel_id'];
    }
    public withQosChannelName(qosChannelName: string): LogVO {
        this['qos_channel_name'] = qosChannelName;
        return this;
    }
    public set qosChannelName(qosChannelName: string  | undefined) {
        this['qos_channel_name'] = qosChannelName;
    }
    public get qosChannelName(): string | undefined {
        return this['qos_channel_name'];
    }
    public withQosDropPackets(qosDropPackets: number): LogVO {
        this['qos_drop_packets'] = qosDropPackets;
        return this;
    }
    public set qosDropPackets(qosDropPackets: number  | undefined) {
        this['qos_drop_packets'] = qosDropPackets;
    }
    public get qosDropPackets(): number | undefined {
        return this['qos_drop_packets'];
    }
    public withQosDropBytes(qosDropBytes: number): LogVO {
        this['qos_drop_bytes'] = qosDropBytes;
        return this;
    }
    public set qosDropBytes(qosDropBytes: number  | undefined) {
        this['qos_drop_bytes'] = qosDropBytes;
    }
    public get qosDropBytes(): number | undefined {
        return this['qos_drop_bytes'];
    }
    public withQosRuleType(qosRuleType: number): LogVO {
        this['qos_rule_type'] = qosRuleType;
        return this;
    }
    public set qosRuleType(qosRuleType: number  | undefined) {
        this['qos_rule_type'] = qosRuleType;
    }
    public get qosRuleType(): number | undefined {
        return this['qos_rule_type'];
    }
    public withQosChannelType(qosChannelType: number): LogVO {
        this['qos_channel_type'] = qosChannelType;
        return this;
    }
    public set qosChannelType(qosChannelType: number  | undefined) {
        this['qos_channel_type'] = qosChannelType;
    }
    public get qosChannelType(): number | undefined {
        return this['qos_channel_type'];
    }
    public withAction(action: string): LogVO {
        this['action'] = action;
        return this;
    }
    public withUrl(url: string): LogVO {
        this['url'] = url;
        return this;
    }
    public withHitTime(hitTime: number): LogVO {
        this['hit_time'] = hitTime;
        return this;
    }
    public set hitTime(hitTime: number  | undefined) {
        this['hit_time'] = hitTime;
    }
    public get hitTime(): number | undefined {
        return this['hit_time'];
    }
    public withRuleId(ruleId: string): LogVO {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): LogVO {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleType(ruleType: number): LogVO {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: number  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): number | undefined {
        return this['rule_type'];
    }
    public withAttackRule(attackRule: string): LogVO {
        this['attack_rule'] = attackRule;
        return this;
    }
    public set attackRule(attackRule: string  | undefined) {
        this['attack_rule'] = attackRule;
    }
    public get attackRule(): string | undefined {
        return this['attack_rule'];
    }
    public withAttackRuleId(attackRuleId: string): LogVO {
        this['attack_rule_id'] = attackRuleId;
        return this;
    }
    public set attackRuleId(attackRuleId: string  | undefined) {
        this['attack_rule_id'] = attackRuleId;
    }
    public get attackRuleId(): string | undefined {
        return this['attack_rule_id'];
    }
    public withAttackType(attackType: string): LogVO {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): string | undefined {
        return this['attack_type'];
    }
    public withEventTime(eventTime: number): LogVO {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: number  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): number | undefined {
        return this['event_time'];
    }
    public withLevel(level: string): LogVO {
        this['level'] = level;
        return this;
    }
    public withPacket(packet: string): LogVO {
        this['packet'] = packet;
        return this;
    }
    public withSource(source: string): LogVO {
        this['source'] = source;
        return this;
    }
    public withRealIp(realIp: string): LogVO {
        this['real_ip'] = realIp;
        return this;
    }
    public set realIp(realIp: string  | undefined) {
        this['real_ip'] = realIp;
    }
    public get realIp(): string | undefined {
        return this['real_ip'];
    }
    public withTag(tag: number): LogVO {
        this['tag'] = tag;
        return this;
    }
}