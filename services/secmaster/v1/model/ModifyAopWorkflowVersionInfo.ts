

export class ModifyAopWorkflowVersionInfo {
    public name?: string;
    public description?: string;
    public status?: string;
    public taskconfig?: string;
    public taskflow?: string;
    private 'taskflow_type'?: string;
    private 'aop_type'?: string;
    public input?: string;
    public output?: string;
    public constructor() { 
    }
    public withName(name: string): ModifyAopWorkflowVersionInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModifyAopWorkflowVersionInfo {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): ModifyAopWorkflowVersionInfo {
        this['status'] = status;
        return this;
    }
    public withTaskconfig(taskconfig: string): ModifyAopWorkflowVersionInfo {
        this['taskconfig'] = taskconfig;
        return this;
    }
    public withTaskflow(taskflow: string): ModifyAopWorkflowVersionInfo {
        this['taskflow'] = taskflow;
        return this;
    }
    public withTaskflowType(taskflowType: string): ModifyAopWorkflowVersionInfo {
        this['taskflow_type'] = taskflowType;
        return this;
    }
    public set taskflowType(taskflowType: string  | undefined) {
        this['taskflow_type'] = taskflowType;
    }
    public get taskflowType(): string | undefined {
        return this['taskflow_type'];
    }
    public withAopType(aopType: string): ModifyAopWorkflowVersionInfo {
        this['aop_type'] = aopType;
        return this;
    }
    public set aopType(aopType: string  | undefined) {
        this['aop_type'] = aopType;
    }
    public get aopType(): string | undefined {
        return this['aop_type'];
    }
    public withInput(input: string): ModifyAopWorkflowVersionInfo {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): ModifyAopWorkflowVersionInfo {
        this['output'] = output;
        return this;
    }
}