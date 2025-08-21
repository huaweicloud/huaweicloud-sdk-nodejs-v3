import { ItemVO } from './ItemVO';
import { TrendVO } from './TrendVO';


export class AttackReport {
    private 'dst_ip'?: Array<ItemVO>;
    private 'ips_mode'?: number;
    public level?: Array<ItemVO>;
    public rule?: Array<ItemVO>;
    private 'src_ip'?: Array<ItemVO>;
    public trend?: Array<TrendVO>;
    public type?: Array<ItemVO>;
    public constructor() { 
    }
    public withDstIp(dstIp: Array<ItemVO>): AttackReport {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: Array<ItemVO>  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): Array<ItemVO> | undefined {
        return this['dst_ip'];
    }
    public withIpsMode(ipsMode: number): AttackReport {
        this['ips_mode'] = ipsMode;
        return this;
    }
    public set ipsMode(ipsMode: number  | undefined) {
        this['ips_mode'] = ipsMode;
    }
    public get ipsMode(): number | undefined {
        return this['ips_mode'];
    }
    public withLevel(level: Array<ItemVO>): AttackReport {
        this['level'] = level;
        return this;
    }
    public withRule(rule: Array<ItemVO>): AttackReport {
        this['rule'] = rule;
        return this;
    }
    public withSrcIp(srcIp: Array<ItemVO>): AttackReport {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: Array<ItemVO>  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): Array<ItemVO> | undefined {
        return this['src_ip'];
    }
    public withTrend(trend: Array<TrendVO>): AttackReport {
        this['trend'] = trend;
        return this;
    }
    public withType(type: Array<ItemVO>): AttackReport {
        this['type'] = type;
        return this;
    }
}