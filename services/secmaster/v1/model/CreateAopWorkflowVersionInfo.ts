

export class CreateAopWorkflowVersionInfo {
    public name?: string;
    public description?: string;
    public taskconfig?: string;
    public input?: string;
    public output?: string;
    public taskflow?: string;
    private 'taskflow_type'?: string;
    private 'aop_type'?: string;
    public constructor(name?: string, description?: string, taskconfig?: string, taskflow?: string, taskflowType?: string, aopType?: string) { 
        this['name'] = name;
        this['description'] = description;
        this['taskconfig'] = taskconfig;
        this['taskflow'] = taskflow;
        this['taskflow_type'] = taskflowType;
        this['aop_type'] = aopType;
    }
    public withName(name: string): CreateAopWorkflowVersionInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAopWorkflowVersionInfo {
        this['description'] = description;
        return this;
    }
    public withTaskconfig(taskconfig: string): CreateAopWorkflowVersionInfo {
        this['taskconfig'] = taskconfig;
        return this;
    }
    public withInput(input: string): CreateAopWorkflowVersionInfo {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): CreateAopWorkflowVersionInfo {
        this['output'] = output;
        return this;
    }
    public withTaskflow(taskflow: string): CreateAopWorkflowVersionInfo {
        this['taskflow'] = taskflow;
        return this;
    }
    public withTaskflowType(taskflowType: string): CreateAopWorkflowVersionInfo {
        this['taskflow_type'] = taskflowType;
        return this;
    }
    public set taskflowType(taskflowType: string  | undefined) {
        this['taskflow_type'] = taskflowType;
    }
    public get taskflowType(): string | undefined {
        return this['taskflow_type'];
    }
    public withAopType(aopType: string): CreateAopWorkflowVersionInfo {
        this['aop_type'] = aopType;
        return this;
    }
    public set aopType(aopType: string  | undefined) {
        this['aop_type'] = aopType;
    }
    public get aopType(): string | undefined {
        return this['aop_type'];
    }
}