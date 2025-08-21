

export class AccessLogInfo {
    public action?: string;
    public app?: string;
    public url?: string;
    private 'dst_host'?: string;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    private 'dst_region_id'?: string;
    private 'dst_region_name'?: string;
    private 'dst_province_id'?: string;
    private 'dst_province_name'?: string;
    private 'dst_city_id'?: string;
    private 'dst_city_name'?: string;
    private 'hit_time'?: number;
    private 'log_id'?: string;
    public protocol?: string;
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    private 'rule_type'?: number;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'src_region_id'?: string;
    private 'src_region_name'?: string;
    private 'src_province_id'?: string;
    private 'src_province_name'?: string;
    private 'src_city_id'?: string;
    private 'src_city_name'?: string;
    private 'vgw_id'?: string;
    private 'qos_rule_id'?: string;
    private 'qos_rule_name'?: string;
    private 'qos_rule_type'?: number;
    public constructor() { 
    }
    public withAction(action: string): AccessLogInfo {
        this['action'] = action;
        return this;
    }
    public withApp(app: string): AccessLogInfo {
        this['app'] = app;
        return this;
    }
    public withUrl(url: string): AccessLogInfo {
        this['url'] = url;
        return this;
    }
    public withDstHost(dstHost: string): AccessLogInfo {
        this['dst_host'] = dstHost;
        return this;
    }
    public set dstHost(dstHost: string  | undefined) {
        this['dst_host'] = dstHost;
    }
    public get dstHost(): string | undefined {
        return this['dst_host'];
    }
    public withDstIp(dstIp: string): AccessLogInfo {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): AccessLogInfo {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withDstRegionId(dstRegionId: string): AccessLogInfo {
        this['dst_region_id'] = dstRegionId;
        return this;
    }
    public set dstRegionId(dstRegionId: string  | undefined) {
        this['dst_region_id'] = dstRegionId;
    }
    public get dstRegionId(): string | undefined {
        return this['dst_region_id'];
    }
    public withDstRegionName(dstRegionName: string): AccessLogInfo {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
    }
    public withDstProvinceId(dstProvinceId: string): AccessLogInfo {
        this['dst_province_id'] = dstProvinceId;
        return this;
    }
    public set dstProvinceId(dstProvinceId: string  | undefined) {
        this['dst_province_id'] = dstProvinceId;
    }
    public get dstProvinceId(): string | undefined {
        return this['dst_province_id'];
    }
    public withDstProvinceName(dstProvinceName: string): AccessLogInfo {
        this['dst_province_name'] = dstProvinceName;
        return this;
    }
    public set dstProvinceName(dstProvinceName: string  | undefined) {
        this['dst_province_name'] = dstProvinceName;
    }
    public get dstProvinceName(): string | undefined {
        return this['dst_province_name'];
    }
    public withDstCityId(dstCityId: string): AccessLogInfo {
        this['dst_city_id'] = dstCityId;
        return this;
    }
    public set dstCityId(dstCityId: string  | undefined) {
        this['dst_city_id'] = dstCityId;
    }
    public get dstCityId(): string | undefined {
        return this['dst_city_id'];
    }
    public withDstCityName(dstCityName: string): AccessLogInfo {
        this['dst_city_name'] = dstCityName;
        return this;
    }
    public set dstCityName(dstCityName: string  | undefined) {
        this['dst_city_name'] = dstCityName;
    }
    public get dstCityName(): string | undefined {
        return this['dst_city_name'];
    }
    public withHitTime(hitTime: number): AccessLogInfo {
        this['hit_time'] = hitTime;
        return this;
    }
    public set hitTime(hitTime: number  | undefined) {
        this['hit_time'] = hitTime;
    }
    public get hitTime(): number | undefined {
        return this['hit_time'];
    }
    public withLogId(logId: string): AccessLogInfo {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withProtocol(protocol: string): AccessLogInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withRuleId(ruleId: string): AccessLogInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): AccessLogInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleType(ruleType: number): AccessLogInfo {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: number  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): number | undefined {
        return this['rule_type'];
    }
    public withSrcIp(srcIp: string): AccessLogInfo {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): AccessLogInfo {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withSrcRegionId(srcRegionId: string): AccessLogInfo {
        this['src_region_id'] = srcRegionId;
        return this;
    }
    public set srcRegionId(srcRegionId: string  | undefined) {
        this['src_region_id'] = srcRegionId;
    }
    public get srcRegionId(): string | undefined {
        return this['src_region_id'];
    }
    public withSrcRegionName(srcRegionName: string): AccessLogInfo {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withSrcProvinceId(srcProvinceId: string): AccessLogInfo {
        this['src_province_id'] = srcProvinceId;
        return this;
    }
    public set srcProvinceId(srcProvinceId: string  | undefined) {
        this['src_province_id'] = srcProvinceId;
    }
    public get srcProvinceId(): string | undefined {
        return this['src_province_id'];
    }
    public withSrcProvinceName(srcProvinceName: string): AccessLogInfo {
        this['src_province_name'] = srcProvinceName;
        return this;
    }
    public set srcProvinceName(srcProvinceName: string  | undefined) {
        this['src_province_name'] = srcProvinceName;
    }
    public get srcProvinceName(): string | undefined {
        return this['src_province_name'];
    }
    public withSrcCityId(srcCityId: string): AccessLogInfo {
        this['src_city_id'] = srcCityId;
        return this;
    }
    public set srcCityId(srcCityId: string  | undefined) {
        this['src_city_id'] = srcCityId;
    }
    public get srcCityId(): string | undefined {
        return this['src_city_id'];
    }
    public withSrcCityName(srcCityName: string): AccessLogInfo {
        this['src_city_name'] = srcCityName;
        return this;
    }
    public set srcCityName(srcCityName: string  | undefined) {
        this['src_city_name'] = srcCityName;
    }
    public get srcCityName(): string | undefined {
        return this['src_city_name'];
    }
    public withVgwId(vgwId: string): AccessLogInfo {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withQosRuleId(qosRuleId: string): AccessLogInfo {
        this['qos_rule_id'] = qosRuleId;
        return this;
    }
    public set qosRuleId(qosRuleId: string  | undefined) {
        this['qos_rule_id'] = qosRuleId;
    }
    public get qosRuleId(): string | undefined {
        return this['qos_rule_id'];
    }
    public withQosRuleName(qosRuleName: string): AccessLogInfo {
        this['qos_rule_name'] = qosRuleName;
        return this;
    }
    public set qosRuleName(qosRuleName: string  | undefined) {
        this['qos_rule_name'] = qosRuleName;
    }
    public get qosRuleName(): string | undefined {
        return this['qos_rule_name'];
    }
    public withQosRuleType(qosRuleType: number): AccessLogInfo {
        this['qos_rule_type'] = qosRuleType;
        return this;
    }
    public set qosRuleType(qosRuleType: number  | undefined) {
        this['qos_rule_type'] = qosRuleType;
    }
    public get qosRuleType(): number | undefined {
        return this['qos_rule_type'];
    }
}