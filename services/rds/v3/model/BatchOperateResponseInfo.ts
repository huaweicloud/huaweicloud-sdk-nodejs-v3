

export class BatchOperateResponseInfo {
    public id?: string;
    public result?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withId(id: string): BatchOperateResponseInfo {
        this['id'] = id;
        return this;
    }
    public withResult(result: string): BatchOperateResponseInfo {
        this['result'] = result;
        return this;
    }
    public withErrorMessage(errorMessage: string): BatchOperateResponseInfo {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}