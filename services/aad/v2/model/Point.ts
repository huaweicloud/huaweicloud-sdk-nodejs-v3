

export class Point {
    public time?: number;
    public total?: number;
    public attack?: number;
    public basic?: number;
    public cc?: number;
    private 'custom_custom'?: number;
    public constructor() { 
    }
    public withTime(time: number): Point {
        this['time'] = time;
        return this;
    }
    public withTotal(total: number): Point {
        this['total'] = total;
        return this;
    }
    public withAttack(attack: number): Point {
        this['attack'] = attack;
        return this;
    }
    public withBasic(basic: number): Point {
        this['basic'] = basic;
        return this;
    }
    public withCc(cc: number): Point {
        this['cc'] = cc;
        return this;
    }
    public withCustomCustom(customCustom: number): Point {
        this['custom_custom'] = customCustom;
        return this;
    }
    public set customCustom(customCustom: number  | undefined) {
        this['custom_custom'] = customCustom;
    }
    public get customCustom(): number | undefined {
        return this['custom_custom'];
    }
}