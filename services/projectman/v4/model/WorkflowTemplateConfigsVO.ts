

export class WorkflowTemplateConfigsVO {
    public configValue?: Array<{ [key: string]: object; }>;
    public constructor() { 
    }
    public withConfigValue(configValue: Array<{ [key: string]: object; }>): WorkflowTemplateConfigsVO {
        this['configValue'] = configValue;
        return this;
    }
}