

export class ApiPolicyMockBase {
    private 'result_content'?: string;
    public constructor() { 
    }
    public withResultContent(resultContent: string): ApiPolicyMockBase {
        this['result_content'] = resultContent;
        return this;
    }
    public set resultContent(resultContent: string  | undefined) {
        this['result_content'] = resultContent;
    }
    public get resultContent(): string | undefined {
        return this['result_content'];
    }
}