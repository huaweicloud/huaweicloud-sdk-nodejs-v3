import { AccessLogInfo } from './AccessLogInfo';


export class AccessDetailVO {
    private 'dst_ip_count'?: number;
    private 'dst_port_count'?: number;
    private 'hit_count'?: number;
    private 'protocol_count'?: number;
    private 'recent_end_time'?: number;
    private 'recent_start_time'?: number;
    private 'record_total'?: number;
    public records?: Array<AccessLogInfo>;
    private 'rule_hit_count'?: number;
    private 'src_ip_count'?: number;
    public constructor() { 
    }
    public withDstIpCount(dstIpCount: number): AccessDetailVO {
        this['dst_ip_count'] = dstIpCount;
        return this;
    }
    public set dstIpCount(dstIpCount: number  | undefined) {
        this['dst_ip_count'] = dstIpCount;
    }
    public get dstIpCount(): number | undefined {
        return this['dst_ip_count'];
    }
    public withDstPortCount(dstPortCount: number): AccessDetailVO {
        this['dst_port_count'] = dstPortCount;
        return this;
    }
    public set dstPortCount(dstPortCount: number  | undefined) {
        this['dst_port_count'] = dstPortCount;
    }
    public get dstPortCount(): number | undefined {
        return this['dst_port_count'];
    }
    public withHitCount(hitCount: number): AccessDetailVO {
        this['hit_count'] = hitCount;
        return this;
    }
    public set hitCount(hitCount: number  | undefined) {
        this['hit_count'] = hitCount;
    }
    public get hitCount(): number | undefined {
        return this['hit_count'];
    }
    public withProtocolCount(protocolCount: number): AccessDetailVO {
        this['protocol_count'] = protocolCount;
        return this;
    }
    public set protocolCount(protocolCount: number  | undefined) {
        this['protocol_count'] = protocolCount;
    }
    public get protocolCount(): number | undefined {
        return this['protocol_count'];
    }
    public withRecentEndTime(recentEndTime: number): AccessDetailVO {
        this['recent_end_time'] = recentEndTime;
        return this;
    }
    public set recentEndTime(recentEndTime: number  | undefined) {
        this['recent_end_time'] = recentEndTime;
    }
    public get recentEndTime(): number | undefined {
        return this['recent_end_time'];
    }
    public withRecentStartTime(recentStartTime: number): AccessDetailVO {
        this['recent_start_time'] = recentStartTime;
        return this;
    }
    public set recentStartTime(recentStartTime: number  | undefined) {
        this['recent_start_time'] = recentStartTime;
    }
    public get recentStartTime(): number | undefined {
        return this['recent_start_time'];
    }
    public withRecordTotal(recordTotal: number): AccessDetailVO {
        this['record_total'] = recordTotal;
        return this;
    }
    public set recordTotal(recordTotal: number  | undefined) {
        this['record_total'] = recordTotal;
    }
    public get recordTotal(): number | undefined {
        return this['record_total'];
    }
    public withRecords(records: Array<AccessLogInfo>): AccessDetailVO {
        this['records'] = records;
        return this;
    }
    public withRuleHitCount(ruleHitCount: number): AccessDetailVO {
        this['rule_hit_count'] = ruleHitCount;
        return this;
    }
    public set ruleHitCount(ruleHitCount: number  | undefined) {
        this['rule_hit_count'] = ruleHitCount;
    }
    public get ruleHitCount(): number | undefined {
        return this['rule_hit_count'];
    }
    public withSrcIpCount(srcIpCount: number): AccessDetailVO {
        this['src_ip_count'] = srcIpCount;
        return this;
    }
    public set srcIpCount(srcIpCount: number  | undefined) {
        this['src_ip_count'] = srcIpCount;
    }
    public get srcIpCount(): number | undefined {
        return this['src_ip_count'];
    }
}