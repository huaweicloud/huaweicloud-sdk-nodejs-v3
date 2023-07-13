

export class ListFlowLogsRequest {
    private 'project_id': string | undefined;
    private 'fw_instance_id': string | undefined;
    public direction?: string;
    private 'log_type'?: ListFlowLogsRequestLogTypeEnum | undefined;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'src_ip'?: string | undefined;
    private 'src_port'?: number | undefined;
    private 'dst_ip'?: string | undefined;
    private 'dst_port'?: number | undefined;
    public protocol?: ListFlowLogsRequestProtocolEnum;
    public app?: string;
    private 'log_id'?: string | undefined;
    private 'next_date'?: number | undefined;
    public offset?: number;
    public limit: number;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(projectId?: any, fwInstanceId?: any, startTime?: any, endTime?: any, limit?: any) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ListFlowLogsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListFlowLogsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withDirection(direction: string): ListFlowLogsRequest {
        this['direction'] = direction;
        return this;
    }
    public withLogType(logType: ListFlowLogsRequestLogTypeEnum): ListFlowLogsRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ListFlowLogsRequestLogTypeEnum | undefined) {
        this['log_type'] = logType;
    }
    public get logType() {
        return this['log_type'];
    }
    public withStartTime(startTime: number): ListFlowLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListFlowLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withSrcIp(srcIp: string): ListFlowLogsRequest {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp() {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): ListFlowLogsRequest {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort() {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): ListFlowLogsRequest {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp() {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): ListFlowLogsRequest {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort() {
        return this['dst_port'];
    }
    public withProtocol(protocol: ListFlowLogsRequestProtocolEnum): ListFlowLogsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withApp(app: string): ListFlowLogsRequest {
        this['app'] = app;
        return this;
    }
    public withLogId(logId: string): ListFlowLogsRequest {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string | undefined) {
        this['log_id'] = logId;
    }
    public get logId() {
        return this['log_id'];
    }
    public withNextDate(nextDate: number): ListFlowLogsRequest {
        this['next_date'] = nextDate;
        return this;
    }
    public set nextDate(nextDate: number | undefined) {
        this['next_date'] = nextDate;
    }
    public get nextDate() {
        return this['next_date'];
    }
    public withOffset(offset: number): ListFlowLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFlowLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFlowLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestLogTypeEnum {
    INTERNET = 'internet',
    VPC = 'vpc',
    NAT = 'nat'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestProtocolEnum {
    E_6 = '6',
    E_17 = '17',
    E_1 = '1',
    E_58 = '58'
}
