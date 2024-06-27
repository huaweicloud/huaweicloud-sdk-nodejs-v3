

export class ListAttackLogsRequest {
    private 'project_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    public protocol?: string;
    public app?: string;
    private 'log_id'?: string;
    private 'next_date'?: number;
    public offset?: number;
    public limit?: number;
    private 'fw_instance_id'?: string;
    public action?: string;
    public direction?: string;
    private 'attack_type'?: string;
    private 'attack_rule'?: string;
    public level?: string;
    private 'enterprise_project_id'?: string;
    private 'dst_host'?: string;
    private 'log_type'?: ListAttackLogsRequestLogTypeEnum | string;
    private 'attack_rule_id'?: string;
    private 'src_region_name'?: string;
    private 'dst_region_name'?: string;
    private 'src_province_name'?: string;
    private 'dst_province_name'?: string;
    private 'src_city_name'?: string;
    private 'dst_city_name'?: string;
    public constructor(projectId?: string, startTime?: number, endTime?: number, limit?: number, fwInstanceId?: string) { 
        this['project_id'] = projectId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withProjectId(projectId: string): ListAttackLogsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStartTime(startTime: number): ListAttackLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAttackLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSrcIp(srcIp: string): ListAttackLogsRequest {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): ListAttackLogsRequest {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): ListAttackLogsRequest {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): ListAttackLogsRequest {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withProtocol(protocol: string): ListAttackLogsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withApp(app: string): ListAttackLogsRequest {
        this['app'] = app;
        return this;
    }
    public withLogId(logId: string): ListAttackLogsRequest {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withNextDate(nextDate: number): ListAttackLogsRequest {
        this['next_date'] = nextDate;
        return this;
    }
    public set nextDate(nextDate: number  | undefined) {
        this['next_date'] = nextDate;
    }
    public get nextDate(): number | undefined {
        return this['next_date'];
    }
    public withOffset(offset: number): ListAttackLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAttackLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withFwInstanceId(fwInstanceId: string): ListAttackLogsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withAction(action: string): ListAttackLogsRequest {
        this['action'] = action;
        return this;
    }
    public withDirection(direction: string): ListAttackLogsRequest {
        this['direction'] = direction;
        return this;
    }
    public withAttackType(attackType: string): ListAttackLogsRequest {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): string | undefined {
        return this['attack_type'];
    }
    public withAttackRule(attackRule: string): ListAttackLogsRequest {
        this['attack_rule'] = attackRule;
        return this;
    }
    public set attackRule(attackRule: string  | undefined) {
        this['attack_rule'] = attackRule;
    }
    public get attackRule(): string | undefined {
        return this['attack_rule'];
    }
    public withLevel(level: string): ListAttackLogsRequest {
        this['level'] = level;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAttackLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDstHost(dstHost: string): ListAttackLogsRequest {
        this['dst_host'] = dstHost;
        return this;
    }
    public set dstHost(dstHost: string  | undefined) {
        this['dst_host'] = dstHost;
    }
    public get dstHost(): string | undefined {
        return this['dst_host'];
    }
    public withLogType(logType: ListAttackLogsRequestLogTypeEnum | string): ListAttackLogsRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ListAttackLogsRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ListAttackLogsRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withAttackRuleId(attackRuleId: string): ListAttackLogsRequest {
        this['attack_rule_id'] = attackRuleId;
        return this;
    }
    public set attackRuleId(attackRuleId: string  | undefined) {
        this['attack_rule_id'] = attackRuleId;
    }
    public get attackRuleId(): string | undefined {
        return this['attack_rule_id'];
    }
    public withSrcRegionName(srcRegionName: string): ListAttackLogsRequest {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withDstRegionName(dstRegionName: string): ListAttackLogsRequest {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
    }
    public withSrcProvinceName(srcProvinceName: string): ListAttackLogsRequest {
        this['src_province_name'] = srcProvinceName;
        return this;
    }
    public set srcProvinceName(srcProvinceName: string  | undefined) {
        this['src_province_name'] = srcProvinceName;
    }
    public get srcProvinceName(): string | undefined {
        return this['src_province_name'];
    }
    public withDstProvinceName(dstProvinceName: string): ListAttackLogsRequest {
        this['dst_province_name'] = dstProvinceName;
        return this;
    }
    public set dstProvinceName(dstProvinceName: string  | undefined) {
        this['dst_province_name'] = dstProvinceName;
    }
    public get dstProvinceName(): string | undefined {
        return this['dst_province_name'];
    }
    public withSrcCityName(srcCityName: string): ListAttackLogsRequest {
        this['src_city_name'] = srcCityName;
        return this;
    }
    public set srcCityName(srcCityName: string  | undefined) {
        this['src_city_name'] = srcCityName;
    }
    public get srcCityName(): string | undefined {
        return this['src_city_name'];
    }
    public withDstCityName(dstCityName: string): ListAttackLogsRequest {
        this['dst_city_name'] = dstCityName;
        return this;
    }
    public set dstCityName(dstCityName: string  | undefined) {
        this['dst_city_name'] = dstCityName;
    }
    public get dstCityName(): string | undefined {
        return this['dst_city_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAttackLogsRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc'
}
