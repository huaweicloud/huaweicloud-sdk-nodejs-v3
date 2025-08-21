

export class AttackEvent {
    public changed?: number;
    public deny?: number;
    public total?: number;
    public constructor() { 
    }
    public withChanged(changed: number): AttackEvent {
        this['changed'] = changed;
        return this;
    }
    public withDeny(deny: number): AttackEvent {
        this['deny'] = deny;
        return this;
    }
    public withTotal(total: number): AttackEvent {
        this['total'] = total;
        return this;
    }
}