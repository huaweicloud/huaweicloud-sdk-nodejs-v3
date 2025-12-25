

export class CreateAopWorkflowVersionApprovelInfo {
    public content?: string;
    public result?: CreateAopWorkflowVersionApprovelInfoResultEnum | string;
    public constructor(content?: string, result?: string) { 
        this['content'] = content;
        this['result'] = result;
    }
    public withContent(content: string): CreateAopWorkflowVersionApprovelInfo {
        this['content'] = content;
        return this;
    }
    public withResult(result: CreateAopWorkflowVersionApprovelInfoResultEnum | string): CreateAopWorkflowVersionApprovelInfo {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAopWorkflowVersionApprovelInfoResultEnum {
    PASS = 'PASS',
    UN_PASS = 'UN_PASS'
}
