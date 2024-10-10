

export class FlowPps {
    public utime?: number;
    private 'attack_pps'?: number;
    private 'normal_pps'?: number;
    public constructor() { 
    }
    public withUtime(utime: number): FlowPps {
        this['utime'] = utime;
        return this;
    }
    public withAttackPps(attackPps: number): FlowPps {
        this['attack_pps'] = attackPps;
        return this;
    }
    public set attackPps(attackPps: number  | undefined) {
        this['attack_pps'] = attackPps;
    }
    public get attackPps(): number | undefined {
        return this['attack_pps'];
    }
    public withNormalPps(normalPps: number): FlowPps {
        this['normal_pps'] = normalPps;
        return this;
    }
    public set normalPps(normalPps: number  | undefined) {
        this['normal_pps'] = normalPps;
    }
    public get normalPps(): number | undefined {
        return this['normal_pps'];
    }
}