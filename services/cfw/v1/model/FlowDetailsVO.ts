import { ItemVO } from './ItemVO';


export class FlowDetailsVO {
    public apps?: Array<ItemVO>;
    private 'associate_instance_type'?: string;
    private 'device_name'?: string;
    public item?: string;
    private 'last_time'?: number;
    private 'agg_start_time'?: number;
    private 'agg_end_time'?: number;
    public ports?: Array<ItemVO>;
    public region?: string;
    private 'request_byte'?: number;
    private 'response_byte'?: number;
    public sessions?: number;
    public tags?: string;
    private 'src_ip'?: Array<ItemVO>;
    private 'dst_ip'?: Array<ItemVO>;
    public protocol?: string;
    public constructor() { 
    }
    public withApps(apps: Array<ItemVO>): FlowDetailsVO {
        this['apps'] = apps;
        return this;
    }
    public withAssociateInstanceType(associateInstanceType: string): FlowDetailsVO {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: string  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): string | undefined {
        return this['associate_instance_type'];
    }
    public withDeviceName(deviceName: string): FlowDetailsVO {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withItem(item: string): FlowDetailsVO {
        this['item'] = item;
        return this;
    }
    public withLastTime(lastTime: number): FlowDetailsVO {
        this['last_time'] = lastTime;
        return this;
    }
    public set lastTime(lastTime: number  | undefined) {
        this['last_time'] = lastTime;
    }
    public get lastTime(): number | undefined {
        return this['last_time'];
    }
    public withAggStartTime(aggStartTime: number): FlowDetailsVO {
        this['agg_start_time'] = aggStartTime;
        return this;
    }
    public set aggStartTime(aggStartTime: number  | undefined) {
        this['agg_start_time'] = aggStartTime;
    }
    public get aggStartTime(): number | undefined {
        return this['agg_start_time'];
    }
    public withAggEndTime(aggEndTime: number): FlowDetailsVO {
        this['agg_end_time'] = aggEndTime;
        return this;
    }
    public set aggEndTime(aggEndTime: number  | undefined) {
        this['agg_end_time'] = aggEndTime;
    }
    public get aggEndTime(): number | undefined {
        return this['agg_end_time'];
    }
    public withPorts(ports: Array<ItemVO>): FlowDetailsVO {
        this['ports'] = ports;
        return this;
    }
    public withRegion(region: string): FlowDetailsVO {
        this['region'] = region;
        return this;
    }
    public withRequestByte(requestByte: number): FlowDetailsVO {
        this['request_byte'] = requestByte;
        return this;
    }
    public set requestByte(requestByte: number  | undefined) {
        this['request_byte'] = requestByte;
    }
    public get requestByte(): number | undefined {
        return this['request_byte'];
    }
    public withResponseByte(responseByte: number): FlowDetailsVO {
        this['response_byte'] = responseByte;
        return this;
    }
    public set responseByte(responseByte: number  | undefined) {
        this['response_byte'] = responseByte;
    }
    public get responseByte(): number | undefined {
        return this['response_byte'];
    }
    public withSessions(sessions: number): FlowDetailsVO {
        this['sessions'] = sessions;
        return this;
    }
    public withTags(tags: string): FlowDetailsVO {
        this['tags'] = tags;
        return this;
    }
    public withSrcIp(srcIp: Array<ItemVO>): FlowDetailsVO {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: Array<ItemVO>  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): Array<ItemVO> | undefined {
        return this['src_ip'];
    }
    public withDstIp(dstIp: Array<ItemVO>): FlowDetailsVO {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: Array<ItemVO>  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): Array<ItemVO> | undefined {
        return this['dst_ip'];
    }
    public withProtocol(protocol: string): FlowDetailsVO {
        this['protocol'] = protocol;
        return this;
    }
}