

export class AttackSubItem {
    public key?: string;
    public num?: number;
    public constructor(key?: string, num?: number) { 
        this['key'] = key;
        this['num'] = num;
    }
    public withKey(key: string): AttackSubItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): AttackSubItem {
        this['num'] = num;
        return this;
    }
}