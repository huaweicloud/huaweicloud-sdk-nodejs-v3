

export class AttackTypeItem {
    public key?: string;
    public num?: number;
    public constructor() { 
    }
    public withKey(key: string): AttackTypeItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): AttackTypeItem {
        this['num'] = num;
        return this;
    }
}