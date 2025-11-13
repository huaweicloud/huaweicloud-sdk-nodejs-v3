

export class SqlFilterRulePattern {
    public pattern?: string;
    private 'max_concurrency'?: number;
    private 'cur_concurrency'?: number;
    private 'cur_reject'?: number;
    private 'create_at'?: number;
    private 'expire_at'?: number;
    public constructor(pattern?: string, maxConcurrency?: number) { 
        this['pattern'] = pattern;
        this['max_concurrency'] = maxConcurrency;
    }
    public withPattern(pattern: string): SqlFilterRulePattern {
        this['pattern'] = pattern;
        return this;
    }
    public withMaxConcurrency(maxConcurrency: number): SqlFilterRulePattern {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withCurConcurrency(curConcurrency: number): SqlFilterRulePattern {
        this['cur_concurrency'] = curConcurrency;
        return this;
    }
    public set curConcurrency(curConcurrency: number  | undefined) {
        this['cur_concurrency'] = curConcurrency;
    }
    public get curConcurrency(): number | undefined {
        return this['cur_concurrency'];
    }
    public withCurReject(curReject: number): SqlFilterRulePattern {
        this['cur_reject'] = curReject;
        return this;
    }
    public set curReject(curReject: number  | undefined) {
        this['cur_reject'] = curReject;
    }
    public get curReject(): number | undefined {
        return this['cur_reject'];
    }
    public withCreateAt(createAt: number): SqlFilterRulePattern {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withExpireAt(expireAt: number): SqlFilterRulePattern {
        this['expire_at'] = expireAt;
        return this;
    }
    public set expireAt(expireAt: number  | undefined) {
        this['expire_at'] = expireAt;
    }
    public get expireAt(): number | undefined {
        return this['expire_at'];
    }
}