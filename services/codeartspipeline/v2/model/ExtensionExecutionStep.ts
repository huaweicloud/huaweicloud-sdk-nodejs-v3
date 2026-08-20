

export class ExtensionExecutionStep {
    public dslMethod?: string;
    public displayName?: string;
    public executionMode?: string;
    public parameters?: { [key: string]: string; };
    public constructor() { 
    }
    public withDslMethod(dslMethod: string): ExtensionExecutionStep {
        this['dslMethod'] = dslMethod;
        return this;
    }
    public withDisplayName(displayName: string): ExtensionExecutionStep {
        this['displayName'] = displayName;
        return this;
    }
    public withExecutionMode(executionMode: string): ExtensionExecutionStep {
        this['executionMode'] = executionMode;
        return this;
    }
    public withParameters(parameters: { [key: string]: string; }): ExtensionExecutionStep {
        this['parameters'] = parameters;
        return this;
    }
}