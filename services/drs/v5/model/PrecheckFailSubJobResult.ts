

export class PrecheckFailSubJobResult {
    public id?: string;
    public name?: string;
    private 'check_result'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): PrecheckFailSubJobResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PrecheckFailSubJobResult {
        this['name'] = name;
        return this;
    }
    public withCheckResult(checkResult: string): PrecheckFailSubJobResult {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: string | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult() {
        return this['check_result'];
    }
}