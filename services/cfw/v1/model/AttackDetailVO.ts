import { AttackLog } from './AttackLog';


export class AttackDetailVO {
    private 'app_count'?: number;
    private 'attack_rule_count'?: number;
    private 'attack_type_count'?: number;
    public count?: number;
    private 'dst_ip_count'?: number;
    private 'dst_port_count'?: number;
    private 'end_time'?: number;
    public records?: Array<AttackLog>;
    private 'src_ip_count'?: number;
    private 'start_time'?: number;
    public total?: number;
    public constructor() { 
    }
    public withAppCount(appCount: number): AttackDetailVO {
        this['app_count'] = appCount;
        return this;
    }
    public set appCount(appCount: number  | undefined) {
        this['app_count'] = appCount;
    }
    public get appCount(): number | undefined {
        return this['app_count'];
    }
    public withAttackRuleCount(attackRuleCount: number): AttackDetailVO {
        this['attack_rule_count'] = attackRuleCount;
        return this;
    }
    public set attackRuleCount(attackRuleCount: number  | undefined) {
        this['attack_rule_count'] = attackRuleCount;
    }
    public get attackRuleCount(): number | undefined {
        return this['attack_rule_count'];
    }
    public withAttackTypeCount(attackTypeCount: number): AttackDetailVO {
        this['attack_type_count'] = attackTypeCount;
        return this;
    }
    public set attackTypeCount(attackTypeCount: number  | undefined) {
        this['attack_type_count'] = attackTypeCount;
    }
    public get attackTypeCount(): number | undefined {
        return this['attack_type_count'];
    }
    public withCount(count: number): AttackDetailVO {
        this['count'] = count;
        return this;
    }
    public withDstIpCount(dstIpCount: number): AttackDetailVO {
        this['dst_ip_count'] = dstIpCount;
        return this;
    }
    public set dstIpCount(dstIpCount: number  | undefined) {
        this['dst_ip_count'] = dstIpCount;
    }
    public get dstIpCount(): number | undefined {
        return this['dst_ip_count'];
    }
    public withDstPortCount(dstPortCount: number): AttackDetailVO {
        this['dst_port_count'] = dstPortCount;
        return this;
    }
    public set dstPortCount(dstPortCount: number  | undefined) {
        this['dst_port_count'] = dstPortCount;
    }
    public get dstPortCount(): number | undefined {
        return this['dst_port_count'];
    }
    public withEndTime(endTime: number): AttackDetailVO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withRecords(records: Array<AttackLog>): AttackDetailVO {
        this['records'] = records;
        return this;
    }
    public withSrcIpCount(srcIpCount: number): AttackDetailVO {
        this['src_ip_count'] = srcIpCount;
        return this;
    }
    public set srcIpCount(srcIpCount: number  | undefined) {
        this['src_ip_count'] = srcIpCount;
    }
    public get srcIpCount(): number | undefined {
        return this['src_ip_count'];
    }
    public withStartTime(startTime: number): AttackDetailVO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTotal(total: number): AttackDetailVO {
        this['total'] = total;
        return this;
    }
}