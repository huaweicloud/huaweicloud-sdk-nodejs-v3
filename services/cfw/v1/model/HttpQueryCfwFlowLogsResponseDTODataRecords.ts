

export class HttpQueryCfwFlowLogsResponseDTODataRecords {
    public bytes?: number;
    public direction?: HttpQueryCfwFlowLogsResponseDTODataRecordsDirectionEnum;
    public packets?: number;
    private 'start_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    private 'log_id'?: string | undefined;
    private 'src_ip'?: string | undefined;
    private 'src_port'?: string | undefined;
    private 'dst_ip'?: string | undefined;
    public app?: string;
    private 'dst_port'?: string | undefined;
    public protocol?: string;
    public constructor() { 
    }
    public withBytes(bytes: number): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['bytes'] = bytes;
        return this;
    }
    public withDirection(direction: HttpQueryCfwFlowLogsResponseDTODataRecordsDirectionEnum): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['direction'] = direction;
        return this;
    }
    public withPackets(packets: number): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['packets'] = packets;
        return this;
    }
    public withStartTime(startTime: number): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLogId(logId: string): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string | undefined) {
        this['log_id'] = logId;
    }
    public get logId() {
        return this['log_id'];
    }
    public withSrcIp(srcIp: string): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp() {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: string): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: string | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort() {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp() {
        return this['dst_ip'];
    }
    public withApp(app: string): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['app'] = app;
        return this;
    }
    public withDstPort(dstPort: string): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: string | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort() {
        return this['dst_port'];
    }
    public withProtocol(protocol: string): HttpQueryCfwFlowLogsResponseDTODataRecords {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HttpQueryCfwFlowLogsResponseDTODataRecordsDirectionEnum {
    OUT2IN = 'out2in',
    IN2OUT = 'in2out'
}
