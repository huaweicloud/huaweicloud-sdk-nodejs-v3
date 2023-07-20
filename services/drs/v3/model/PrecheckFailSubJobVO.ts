

export class PrecheckFailSubJobVO {
    public id?: string;
    public name?: string;
    private 'check_result'?: string;
    public constructor() { 
    }
    public withId(id: string): PrecheckFailSubJobVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PrecheckFailSubJobVO {
        this['name'] = name;
        return this;
    }
    public withCheckResult(checkResult: string): PrecheckFailSubJobVO {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: string  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): string | undefined {
        return this['check_result'];
    }
}