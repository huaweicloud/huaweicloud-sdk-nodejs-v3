

export class EventAttCkDetailResponseInfo {
    private 'att_ck'?: string;
    public num?: number;
    public constructor() { 
    }
    public withAttCk(attCk: string): EventAttCkDetailResponseInfo {
        this['att_ck'] = attCk;
        return this;
    }
    public set attCk(attCk: string  | undefined) {
        this['att_ck'] = attCk;
    }
    public get attCk(): string | undefined {
        return this['att_ck'];
    }
    public withNum(num: number): EventAttCkDetailResponseInfo {
        this['num'] = num;
        return this;
    }
}