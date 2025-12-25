

export class WorkflowApproveOpinionDetail {
    public result?: WorkflowApproveOpinionDetailResultEnum | string;
    public content?: string;
    public constructor() { 
    }
    public withResult(result: WorkflowApproveOpinionDetailResultEnum | string): WorkflowApproveOpinionDetail {
        this['result'] = result;
        return this;
    }
    public withContent(content: string): WorkflowApproveOpinionDetail {
        this['content'] = content;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WorkflowApproveOpinionDetailResultEnum {
    PASS = 'PASS',
    UN_PASS = 'UN_PASS'
}
