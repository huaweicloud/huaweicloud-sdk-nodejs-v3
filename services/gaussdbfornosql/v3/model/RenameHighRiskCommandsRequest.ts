import { CommandInfo } from './CommandInfo';


export class RenameHighRiskCommandsRequest {
    public commands?: Array<CommandInfo>;
    public constructor(commands?: Array<CommandInfo>) { 
        this['commands'] = commands;
    }
    public withCommands(commands: Array<CommandInfo>): RenameHighRiskCommandsRequest {
        this['commands'] = commands;
        return this;
    }
}