import { SessionVO } from './SessionVO';


export class FlowAnalysisVO {
    private 'app_count'?: number;
    public bytes?: number;
    private 'dst_ip_count'?: number;
    private 'dst_port_count'?: number;
    private 'end_time'?: number;
    public records?: Array<SessionVO>;
    private 'request_byte'?: number;
    private 'response_byte'?: number;
    public sessions?: number;
    private 'src_ip_count'?: number;
    private 'start_time'?: number;
    public constructor() { 
    }
    public withAppCount(appCount: number): FlowAnalysisVO {
        this['app_count'] = appCount;
        return this;
    }
    public set appCount(appCount: number  | undefined) {
        this['app_count'] = appCount;
    }
    public get appCount(): number | undefined {
        return this['app_count'];
    }
    public withBytes(bytes: number): FlowAnalysisVO {
        this['bytes'] = bytes;
        return this;
    }
    public withDstIpCount(dstIpCount: number): FlowAnalysisVO {
        this['dst_ip_count'] = dstIpCount;
        return this;
    }
    public set dstIpCount(dstIpCount: number  | undefined) {
        this['dst_ip_count'] = dstIpCount;
    }
    public get dstIpCount(): number | undefined {
        return this['dst_ip_count'];
    }
    public withDstPortCount(dstPortCount: number): FlowAnalysisVO {
        this['dst_port_count'] = dstPortCount;
        return this;
    }
    public set dstPortCount(dstPortCount: number  | undefined) {
        this['dst_port_count'] = dstPortCount;
    }
    public get dstPortCount(): number | undefined {
        return this['dst_port_count'];
    }
    public withEndTime(endTime: number): FlowAnalysisVO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withRecords(records: Array<SessionVO>): FlowAnalysisVO {
        this['records'] = records;
        return this;
    }
    public withRequestByte(requestByte: number): FlowAnalysisVO {
        this['request_byte'] = requestByte;
        return this;
    }
    public set requestByte(requestByte: number  | undefined) {
        this['request_byte'] = requestByte;
    }
    public get requestByte(): number | undefined {
        return this['request_byte'];
    }
    public withResponseByte(responseByte: number): FlowAnalysisVO {
        this['response_byte'] = responseByte;
        return this;
    }
    public set responseByte(responseByte: number  | undefined) {
        this['response_byte'] = responseByte;
    }
    public get responseByte(): number | undefined {
        return this['response_byte'];
    }
    public withSessions(sessions: number): FlowAnalysisVO {
        this['sessions'] = sessions;
        return this;
    }
    public withSrcIpCount(srcIpCount: number): FlowAnalysisVO {
        this['src_ip_count'] = srcIpCount;
        return this;
    }
    public set srcIpCount(srcIpCount: number  | undefined) {
        this['src_ip_count'] = srcIpCount;
    }
    public get srcIpCount(): number | undefined {
        return this['src_ip_count'];
    }
    public withStartTime(startTime: number): FlowAnalysisVO {
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