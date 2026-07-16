

export class Exec {
    public command?: Array<string>;
    public constructor() { 
    }
    public withCommand(command: Array<string>): Exec {
        this['command'] = command;
        return this;
    }
}