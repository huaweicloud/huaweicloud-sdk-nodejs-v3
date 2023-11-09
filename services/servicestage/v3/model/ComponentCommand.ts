

export class ComponentCommand {
    public command?: Array<string>;
    public args?: Array<string>;
    public constructor() { 
    }
    public withCommand(command: Array<string>): ComponentCommand {
        this['command'] = command;
        return this;
    }
    public withArgs(args: Array<string>): ComponentCommand {
        this['args'] = args;
        return this;
    }
}