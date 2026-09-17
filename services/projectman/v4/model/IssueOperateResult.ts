

export class IssueOperateResult {
    public id?: string;
    public operator?: string;
    public state?: string;
    private 'operate_time'?: string;
    public constructor() { 
    }
    public withId(id: string): IssueOperateResult {
        this['id'] = id;
        return this;
    }
    public withOperator(operator: string): IssueOperateResult {
        this['operator'] = operator;
        return this;
    }
    public withState(state: string): IssueOperateResult {
        this['state'] = state;
        return this;
    }
    public withOperateTime(operateTime: string): IssueOperateResult {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: string  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): string | undefined {
        return this['operate_time'];
    }
}