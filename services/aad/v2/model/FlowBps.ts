

export class FlowBps {
    public utime?: number;
    private 'attack_bps'?: number;
    private 'normal_bps'?: number;
    public constructor() { 
    }
    public withUtime(utime: number): FlowBps {
        this['utime'] = utime;
        return this;
    }
    public withAttackBps(attackBps: number): FlowBps {
        this['attack_bps'] = attackBps;
        return this;
    }
    public set attackBps(attackBps: number  | undefined) {
        this['attack_bps'] = attackBps;
    }
    public get attackBps(): number | undefined {
        return this['attack_bps'];
    }
    public withNormalBps(normalBps: number): FlowBps {
        this['normal_bps'] = normalBps;
        return this;
    }
    public set normalBps(normalBps: number  | undefined) {
        this['normal_bps'] = normalBps;
    }
    public get normalBps(): number | undefined {
        return this['normal_bps'];
    }
}