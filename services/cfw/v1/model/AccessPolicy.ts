

export class AccessPolicy {
    public changed?: number;
    public eip?: number;
    public nat?: number;
    public total?: number;
    public constructor() { 
    }
    public withChanged(changed: number): AccessPolicy {
        this['changed'] = changed;
        return this;
    }
    public withEip(eip: number): AccessPolicy {
        this['eip'] = eip;
        return this;
    }
    public withNat(nat: number): AccessPolicy {
        this['nat'] = nat;
        return this;
    }
    public withTotal(total: number): AccessPolicy {
        this['total'] = total;
        return this;
    }
}