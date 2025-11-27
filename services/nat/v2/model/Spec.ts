

export class Spec {
    public name?: string;
    public code?: string;
    private 'cbc_code'?: string;
    private 'rule_max'?: number;
    private 'sess_max'?: number;
    private 'bps_max'?: number;
    private 'pps_max'?: number;
    private 'qps_max'?: number;
    public constructor() { 
    }
    public withName(name: string): Spec {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): Spec {
        this['code'] = code;
        return this;
    }
    public withCbcCode(cbcCode: string): Spec {
        this['cbc_code'] = cbcCode;
        return this;
    }
    public set cbcCode(cbcCode: string  | undefined) {
        this['cbc_code'] = cbcCode;
    }
    public get cbcCode(): string | undefined {
        return this['cbc_code'];
    }
    public withRuleMax(ruleMax: number): Spec {
        this['rule_max'] = ruleMax;
        return this;
    }
    public set ruleMax(ruleMax: number  | undefined) {
        this['rule_max'] = ruleMax;
    }
    public get ruleMax(): number | undefined {
        return this['rule_max'];
    }
    public withSessMax(sessMax: number): Spec {
        this['sess_max'] = sessMax;
        return this;
    }
    public set sessMax(sessMax: number  | undefined) {
        this['sess_max'] = sessMax;
    }
    public get sessMax(): number | undefined {
        return this['sess_max'];
    }
    public withBpsMax(bpsMax: number): Spec {
        this['bps_max'] = bpsMax;
        return this;
    }
    public set bpsMax(bpsMax: number  | undefined) {
        this['bps_max'] = bpsMax;
    }
    public get bpsMax(): number | undefined {
        return this['bps_max'];
    }
    public withPpsMax(ppsMax: number): Spec {
        this['pps_max'] = ppsMax;
        return this;
    }
    public set ppsMax(ppsMax: number  | undefined) {
        this['pps_max'] = ppsMax;
    }
    public get ppsMax(): number | undefined {
        return this['pps_max'];
    }
    public withQpsMax(qpsMax: number): Spec {
        this['qps_max'] = qpsMax;
        return this;
    }
    public set qpsMax(qpsMax: number  | undefined) {
        this['qps_max'] = qpsMax;
    }
    public get qpsMax(): number | undefined {
        return this['qps_max'];
    }
}