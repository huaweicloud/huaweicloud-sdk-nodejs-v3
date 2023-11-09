

export class LifecycleEntrypoint {
    public command?: Array<string>;
    public args?: Array<string>;
    public constructor() { 
    }
    public withCommand(command: Array<string>): LifecycleEntrypoint {
        this['command'] = command;
        return this;
    }
    public withArgs(args: Array<string>): LifecycleEntrypoint {
        this['args'] = args;
        return this;
    }
}