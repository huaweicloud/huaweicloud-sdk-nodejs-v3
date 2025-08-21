import { TopInfo } from './TopInfo';


export class AttackTopRespBody {
    private 'attack_rule'?: Array<TopInfo>;
    private 'attack_type'?: Array<TopInfo>;
    private 'dst_ip'?: Array<TopInfo>;
    private 'dst_port'?: Array<TopInfo>;
    private 'in_src_ip'?: Array<TopInfo>;
    public level?: Array<TopInfo>;
    private 'out_src_ip'?: Array<TopInfo>;
    private 'src_ip'?: Array<TopInfo>;
    private 'src_region_id'?: Array<TopInfo>;
    public constructor() { 
    }
    public withAttackRule(attackRule: Array<TopInfo>): AttackTopRespBody {
        this['attack_rule'] = attackRule;
        return this;
    }
    public set attackRule(attackRule: Array<TopInfo>  | undefined) {
        this['attack_rule'] = attackRule;
    }
    public get attackRule(): Array<TopInfo> | undefined {
        return this['attack_rule'];
    }
    public withAttackType(attackType: Array<TopInfo>): AttackTopRespBody {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: Array<TopInfo>  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): Array<TopInfo> | undefined {
        return this['attack_type'];
    }
    public withDstIp(dstIp: Array<TopInfo>): AttackTopRespBody {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: Array<TopInfo>  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): Array<TopInfo> | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: Array<TopInfo>): AttackTopRespBody {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: Array<TopInfo>  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): Array<TopInfo> | undefined {
        return this['dst_port'];
    }
    public withInSrcIp(inSrcIp: Array<TopInfo>): AttackTopRespBody {
        this['in_src_ip'] = inSrcIp;
        return this;
    }
    public set inSrcIp(inSrcIp: Array<TopInfo>  | undefined) {
        this['in_src_ip'] = inSrcIp;
    }
    public get inSrcIp(): Array<TopInfo> | undefined {
        return this['in_src_ip'];
    }
    public withLevel(level: Array<TopInfo>): AttackTopRespBody {
        this['level'] = level;
        return this;
    }
    public withOutSrcIp(outSrcIp: Array<TopInfo>): AttackTopRespBody {
        this['out_src_ip'] = outSrcIp;
        return this;
    }
    public set outSrcIp(outSrcIp: Array<TopInfo>  | undefined) {
        this['out_src_ip'] = outSrcIp;
    }
    public get outSrcIp(): Array<TopInfo> | undefined {
        return this['out_src_ip'];
    }
    public withSrcIp(srcIp: Array<TopInfo>): AttackTopRespBody {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: Array<TopInfo>  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): Array<TopInfo> | undefined {
        return this['src_ip'];
    }
    public withSrcRegionId(srcRegionId: Array<TopInfo>): AttackTopRespBody {
        this['src_region_id'] = srcRegionId;
        return this;
    }
    public set srcRegionId(srcRegionId: Array<TopInfo>  | undefined) {
        this['src_region_id'] = srcRegionId;
    }
    public get srcRegionId(): Array<TopInfo> | undefined {
        return this['src_region_id'];
    }
}