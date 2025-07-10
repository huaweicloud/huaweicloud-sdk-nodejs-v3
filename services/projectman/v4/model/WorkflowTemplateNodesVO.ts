

export class WorkflowTemplateNodesVO {
    public code?: string;
    public name?: string;
    public constructor() { 
    }
    public withCode(code: string): WorkflowTemplateNodesVO {
        this['code'] = code;
        return this;
    }
    public withName(name: string): WorkflowTemplateNodesVO {
        this['name'] = name;
        return this;
    }
}