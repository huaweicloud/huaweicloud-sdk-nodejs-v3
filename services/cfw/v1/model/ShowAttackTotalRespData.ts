

export class ShowAttackTotalRespData {
    private 'attack_count'?: number;
    private 'deny_count'?: number;
    private 'permit_count'?: number;
    private 'risk_ports'?: number;
    public constructor() { 
    }
    public withAttackCount(attackCount: number): ShowAttackTotalRespData {
        this['attack_count'] = attackCount;
        return this;
    }
    public set attackCount(attackCount: number  | undefined) {
        this['attack_count'] = attackCount;
    }
    public get attackCount(): number | undefined {
        return this['attack_count'];
    }
    public withDenyCount(denyCount: number): ShowAttackTotalRespData {
        this['deny_count'] = denyCount;
        return this;
    }
    public set denyCount(denyCount: number  | undefined) {
        this['deny_count'] = denyCount;
    }
    public get denyCount(): number | undefined {
        return this['deny_count'];
    }
    public withPermitCount(permitCount: number): ShowAttackTotalRespData {
        this['permit_count'] = permitCount;
        return this;
    }
    public set permitCount(permitCount: number  | undefined) {
        this['permit_count'] = permitCount;
    }
    public get permitCount(): number | undefined {
        return this['permit_count'];
    }
    public withRiskPorts(riskPorts: number): ShowAttackTotalRespData {
        this['risk_ports'] = riskPorts;
        return this;
    }
    public set riskPorts(riskPorts: number  | undefined) {
        this['risk_ports'] = riskPorts;
    }
    public get riskPorts(): number | undefined {
        return this['risk_ports'];
    }
}