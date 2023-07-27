

export class ApiMockCreate {
    public remark?: string;
    private 'result_content'?: string;
    public version?: string;
    private 'authorizer_id'?: string;
    public constructor() { 
    }
    public withRemark(remark: string): ApiMockCreate {
        this['remark'] = remark;
        return this;
    }
    public withResultContent(resultContent: string): ApiMockCreate {
        this['result_content'] = resultContent;
        return this;
    }
    public set resultContent(resultContent: string  | undefined) {
        this['result_content'] = resultContent;
    }
    public get resultContent(): string | undefined {
        return this['result_content'];
    }
    public withVersion(version: string): ApiMockCreate {
        this['version'] = version;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiMockCreate {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
}