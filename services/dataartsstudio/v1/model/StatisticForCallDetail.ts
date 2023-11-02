

export class StatisticForCallDetail {
    public id?: string;
    public name?: string;
    private 'call_num'?: number;
    private 'success_num'?: number;
    private 'fail_num'?: number;
    private 'legal_num'?: number;
    private 'illegal_num'?: number;
    public constructor() { 
    }
    public withId(id: string): StatisticForCallDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StatisticForCallDetail {
        this['name'] = name;
        return this;
    }
    public withCallNum(callNum: number): StatisticForCallDetail {
        this['call_num'] = callNum;
        return this;
    }
    public set callNum(callNum: number  | undefined) {
        this['call_num'] = callNum;
    }
    public get callNum(): number | undefined {
        return this['call_num'];
    }
    public withSuccessNum(successNum: number): StatisticForCallDetail {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailNum(failNum: number): StatisticForCallDetail {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withLegalNum(legalNum: number): StatisticForCallDetail {
        this['legal_num'] = legalNum;
        return this;
    }
    public set legalNum(legalNum: number  | undefined) {
        this['legal_num'] = legalNum;
    }
    public get legalNum(): number | undefined {
        return this['legal_num'];
    }
    public withIllegalNum(illegalNum: number): StatisticForCallDetail {
        this['illegal_num'] = illegalNum;
        return this;
    }
    public set illegalNum(illegalNum: number  | undefined) {
        this['illegal_num'] = illegalNum;
    }
    public get illegalNum(): number | undefined {
        return this['illegal_num'];
    }
}