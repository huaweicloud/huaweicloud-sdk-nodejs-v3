

export class SessionVO {
    public app?: string;
    public bytes?: number;
    private 'dst_associate_instance_type'?: string;
    private 'dst_device_name'?: string;
    private 'dst_ip'?: string;
    private 'dst_port'?: string;
    private 'dst_host'?: string;
    private 'dst_region_id'?: string;
    private 'dst_region_name'?: string;
    private 'end_time'?: number;
    public protocol?: string;
    private 'request_byte'?: number;
    private 'response_byte'?: number;
    public sessions?: number;
    private 'src_associate_instance_type'?: string;
    private 'src_device_name'?: string;
    private 'src_ip'?: string;
    private 'src_region_id'?: string;
    private 'src_region_name'?: string;
    private 'start_time'?: number;
    public constructor() { 
    }
    public withApp(app: string): SessionVO {
        this['app'] = app;
        return this;
    }
    public withBytes(bytes: number): SessionVO {
        this['bytes'] = bytes;
        return this;
    }
    public withDstAssociateInstanceType(dstAssociateInstanceType: string): SessionVO {
        this['dst_associate_instance_type'] = dstAssociateInstanceType;
        return this;
    }
    public set dstAssociateInstanceType(dstAssociateInstanceType: string  | undefined) {
        this['dst_associate_instance_type'] = dstAssociateInstanceType;
    }
    public get dstAssociateInstanceType(): string | undefined {
        return this['dst_associate_instance_type'];
    }
    public withDstDeviceName(dstDeviceName: string): SessionVO {
        this['dst_device_name'] = dstDeviceName;
        return this;
    }
    public set dstDeviceName(dstDeviceName: string  | undefined) {
        this['dst_device_name'] = dstDeviceName;
    }
    public get dstDeviceName(): string | undefined {
        return this['dst_device_name'];
    }
    public withDstIp(dstIp: string): SessionVO {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: string): SessionVO {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: string  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): string | undefined {
        return this['dst_port'];
    }
    public withDstHost(dstHost: string): SessionVO {
        this['dst_host'] = dstHost;
        return this;
    }
    public set dstHost(dstHost: string  | undefined) {
        this['dst_host'] = dstHost;
    }
    public get dstHost(): string | undefined {
        return this['dst_host'];
    }
    public withDstRegionId(dstRegionId: string): SessionVO {
        this['dst_region_id'] = dstRegionId;
        return this;
    }
    public set dstRegionId(dstRegionId: string  | undefined) {
        this['dst_region_id'] = dstRegionId;
    }
    public get dstRegionId(): string | undefined {
        return this['dst_region_id'];
    }
    public withDstRegionName(dstRegionName: string): SessionVO {
        this['dst_region_name'] = dstRegionName;
        return this;
    }
    public set dstRegionName(dstRegionName: string  | undefined) {
        this['dst_region_name'] = dstRegionName;
    }
    public get dstRegionName(): string | undefined {
        return this['dst_region_name'];
    }
    public withEndTime(endTime: number): SessionVO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withProtocol(protocol: string): SessionVO {
        this['protocol'] = protocol;
        return this;
    }
    public withRequestByte(requestByte: number): SessionVO {
        this['request_byte'] = requestByte;
        return this;
    }
    public set requestByte(requestByte: number  | undefined) {
        this['request_byte'] = requestByte;
    }
    public get requestByte(): number | undefined {
        return this['request_byte'];
    }
    public withResponseByte(responseByte: number): SessionVO {
        this['response_byte'] = responseByte;
        return this;
    }
    public set responseByte(responseByte: number  | undefined) {
        this['response_byte'] = responseByte;
    }
    public get responseByte(): number | undefined {
        return this['response_byte'];
    }
    public withSessions(sessions: number): SessionVO {
        this['sessions'] = sessions;
        return this;
    }
    public withSrcAssociateInstanceType(srcAssociateInstanceType: string): SessionVO {
        this['src_associate_instance_type'] = srcAssociateInstanceType;
        return this;
    }
    public set srcAssociateInstanceType(srcAssociateInstanceType: string  | undefined) {
        this['src_associate_instance_type'] = srcAssociateInstanceType;
    }
    public get srcAssociateInstanceType(): string | undefined {
        return this['src_associate_instance_type'];
    }
    public withSrcDeviceName(srcDeviceName: string): SessionVO {
        this['src_device_name'] = srcDeviceName;
        return this;
    }
    public set srcDeviceName(srcDeviceName: string  | undefined) {
        this['src_device_name'] = srcDeviceName;
    }
    public get srcDeviceName(): string | undefined {
        return this['src_device_name'];
    }
    public withSrcIp(srcIp: string): SessionVO {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcRegionId(srcRegionId: string): SessionVO {
        this['src_region_id'] = srcRegionId;
        return this;
    }
    public set srcRegionId(srcRegionId: string  | undefined) {
        this['src_region_id'] = srcRegionId;
    }
    public get srcRegionId(): string | undefined {
        return this['src_region_id'];
    }
    public withSrcRegionName(srcRegionName: string): SessionVO {
        this['src_region_name'] = srcRegionName;
        return this;
    }
    public set srcRegionName(srcRegionName: string  | undefined) {
        this['src_region_name'] = srcRegionName;
    }
    public get srcRegionName(): string | undefined {
        return this['src_region_name'];
    }
    public withStartTime(startTime: number): SessionVO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
}