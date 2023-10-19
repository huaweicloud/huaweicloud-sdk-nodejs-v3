

export class ListAccessControlLogsRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'rule_id'?: string;
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
    private 'log_type'?: ListAccessControlLogsRequestLogTypeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'dst_host'?: string;
    private 'rule_name'?: string;
    public action?: string;
    public constructor(projectId?: string, fwInstanceId?: string, startTime?: number, endTime?: number, limit?: number) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ListAccessControlLogsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAccessControlLogsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRuleId(ruleId: string): ListAccessControlLogsRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withStartTime(startTime: number): ListAccessControlLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAccessControlLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSrcIp(srcIp: string): ListAccessControlLogsRequest {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): ListAccessControlLogsRequest {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): ListAccessControlLogsRequest {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): ListAccessControlLogsRequest {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withProtocol(protocol: string): ListAccessControlLogsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withApp(app: string): ListAccessControlLogsRequest {
        this['app'] = app;
        return this;
    }
    public withLogId(logId: string): ListAccessControlLogsRequest {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withNextDate(nextDate: number): ListAccessControlLogsRequest {
        this['next_date'] = nextDate;
        return this;
    }
    public set nextDate(nextDate: number  | undefined) {
        this['next_date'] = nextDate;
    }
    public get nextDate(): number | undefined {
        return this['next_date'];
    }
    public withOffset(offset: number): ListAccessControlLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAccessControlLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withLogType(logType: ListAccessControlLogsRequestLogTypeEnum | string): ListAccessControlLogsRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ListAccessControlLogsRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ListAccessControlLogsRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAccessControlLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDstHost(dstHost: string): ListAccessControlLogsRequest {
        this['dst_host'] = dstHost;
        return this;
    }
    public set dstHost(dstHost: string  | undefined) {
        this['dst_host'] = dstHost;
    }
    public get dstHost(): string | undefined {
        return this['dst_host'];
    }
    public withRuleName(ruleName: string): ListAccessControlLogsRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withAction(action: string): ListAccessControlLogsRequest {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAccessControlLogsRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc'
}
