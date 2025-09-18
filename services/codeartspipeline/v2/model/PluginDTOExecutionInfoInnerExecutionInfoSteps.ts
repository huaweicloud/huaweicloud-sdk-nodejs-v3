

export class PluginDTOExecutionInfoInnerExecutionInfoSteps {
    public name?: string;
    public task?: string;
    public variables?: { [key: string]: object; };
    public constructor() { 
    }
    public withName(name: string): PluginDTOExecutionInfoInnerExecutionInfoSteps {
        this['name'] = name;
        return this;
    }
    public withTask(task: string): PluginDTOExecutionInfoInnerExecutionInfoSteps {
        this['task'] = task;
        return this;
    }
    public withVariables(variables: { [key: string]: object; }): PluginDTOExecutionInfoInnerExecutionInfoSteps {
        this['variables'] = variables;
        return this;
    }
}