

export class HealthCheckConfigurationExec {
    public command?: Array<string>;
    public constructor() { 
    }
    public withCommand(command: Array<string>): HealthCheckConfigurationExec {
        this['command'] = command;
        return this;
    }
}