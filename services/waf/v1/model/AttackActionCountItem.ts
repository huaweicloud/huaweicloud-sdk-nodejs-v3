

export class AttackActionCountItem {
    public key?: string;
    public num?: number;
    public constructor() { 
    }
    public withKey(key: string): AttackActionCountItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): AttackActionCountItem {
        this['num'] = num;
        return this;
    }
}