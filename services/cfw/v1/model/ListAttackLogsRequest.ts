

export class ListAttackLogsRequest {
    private 'project_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    public protocol?: ListAttackLogsRequestProtocolEnum | string;
    public app?: string;
    private 'log_id'?: string;
    private 'next_date'?: number;
    public offset?: number;
    public limit?: number;
    private 'fw_instance_id'?: string;
    public action?: ListAttackLogsRequestActionEnum | string;
    public direction?: ListAttackLogsRequestDirectionEnum | string;
    private 'attack_type'?: string;
    private 'attack_rule'?: string;
    public level?: string;
    public source?: string;
    private 'enterprise_project_id'?: string;
    private 'dst_host'?: string;
    private 'log_type'?: ListAttackLogsRequestLogTypeEnum | string;
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
    public withProtocol(protocol: ListAttackLogsRequestProtocolEnum | string): ListAttackLogsRequest {
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
    public withAction(action: ListAttackLogsRequestActionEnum | string): ListAttackLogsRequest {
        this['action'] = action;
        return this;
    }
    public withDirection(direction: ListAttackLogsRequestDirectionEnum | string): ListAttackLogsRequest {
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
    public withSource(source: string): ListAttackLogsRequest {
        this['source'] = source;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListAttackLogsRequestProtocolEnum {
    E_6 = '6',
    E_17 = '17',
    E_1 = '1',
    E_58 = '58'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttackLogsRequestActionEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttackLogsRequestDirectionEnum {
    E_0 = '0',
    E_1 = '1'
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
