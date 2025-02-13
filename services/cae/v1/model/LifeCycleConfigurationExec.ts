

export class LifeCycleConfigurationExec {
    public command?: Array<string>;
    public constructor() { 
    }
    public withCommand(command: Array<string>): LifeCycleConfigurationExec {
        this['command'] = command;
        return this;
    }
}