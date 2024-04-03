

export class ListFlowLogsRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public direction?: string;
    private 'log_type'?: ListFlowLogsRequestLogTypeEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'dst_ip'?: string;
    private 'dst_port'?: number;
    public protocol?: ListFlowLogsRequestProtocolEnum | string;
    public app?: string;
    private 'log_id'?: string;
    private 'next_date'?: number;
    public offset?: number;
    public limit?: number;
    private 'enterprise_project_id'?: string;
    private 'dst_host'?: string;
    private 'src_region_name'?: string;
    private 'dst_region_name'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, startTime?: number, endTime?: number, limit?: number) { 
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
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListFlowLogsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withDirection(direction: string): ListFlowLogsRequest {
        this['direction'] = direction;
        return this;
    }
    public withLogType(logType: ListFlowLogsRequestLogTypeEnum | string): ListFlowLogsRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ListFlowLogsRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ListFlowLogsRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withStartTime(startTime: number): ListFlowLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListFlowLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSrcIp(srcIp: string): ListFlowLogsRequest {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): ListFlowLogsRequest {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): ListFlowLogsRequest {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): ListFlowLogsRequest {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): number | undefined {
        return this['dst_port'];
    }
    public withProtocol(protocol: ListFlowLogsRequestProtocolEnum | string): ListFlowLogsRequest {
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
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withNextDate(nextDate: number): ListFlowLogsRequest {
        this['next_date'] = nextDate;
        return this;
    }
    public set nextDate(nextDate: number  | undefined) {
        this['next_date'] = nextDate;
    }
    public get nextDate(): number | undefined {
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
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDstHost(dstHost: string): ListFlowLogsRequest {
        this['dst_host'] = dstHost;
        return this;
    }
    public set dstHost(dstHost: string  | undefined) {
        this['dst_host'] = dstHost;
    }
    public get dstHost(): string | undefined {
        return this['dst_host'];
    }
    public withSrcRegionName(srcRegionName: string): ListFlowLogsRequest {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withDstRegionName(dstRegionName: string): ListFlowLogsRequest {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
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
