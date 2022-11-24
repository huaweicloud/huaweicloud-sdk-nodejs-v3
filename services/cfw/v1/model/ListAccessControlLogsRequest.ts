

export class ListAccessControlLogsRequest {
    private 'project_id': string | undefined;
    private 'fw_instance_id': string | undefined;
    private 'rule_id'?: string | undefined;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'src_ip'?: string | undefined;
    private 'src_port'?: number | undefined;
    private 'dst_ip'?: string | undefined;
    private 'dst_port'?: number | undefined;
    public protocol?: string;
    public app?: string;
    private 'log_id'?: string | undefined;
    private 'next_date'?: number | undefined;
    public offset?: number;
    public limit: number;
    private 'log_type'?: ListAccessControlLogsRequestLogTypeEnum | undefined;
    public constructor(projectId?: any, fwInstanceId?: any, startTime?: any, endTime?: any, limit?: any) { 
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
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAccessControlLogsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withRuleId(ruleId: string): ListAccessControlLogsRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withStartTime(startTime: number): ListAccessControlLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAccessControlLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withSrcIp(srcIp: string): ListAccessControlLogsRequest {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp() {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): ListAccessControlLogsRequest {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort() {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): ListAccessControlLogsRequest {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp() {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): ListAccessControlLogsRequest {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort() {
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
    public set logId(logId: string | undefined) {
        this['log_id'] = logId;
    }
    public get logId() {
        return this['log_id'];
    }
    public withNextDate(nextDate: number): ListAccessControlLogsRequest {
        this['next_date'] = nextDate;
        return this;
    }
    public set nextDate(nextDate: number | undefined) {
        this['next_date'] = nextDate;
    }
    public get nextDate() {
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
    public withLogType(logType: ListAccessControlLogsRequestLogTypeEnum): ListAccessControlLogsRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ListAccessControlLogsRequestLogTypeEnum | undefined) {
        this['log_type'] = logType;
    }
    public get logType() {
        return this['log_type'];
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
