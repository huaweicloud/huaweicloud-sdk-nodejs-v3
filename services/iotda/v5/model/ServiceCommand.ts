import { ServiceCommandPara } from './ServiceCommandPara';
import { ServiceCommandResponse } from './ServiceCommandResponse';


export class ServiceCommand {
    private 'command_name'?: string;
    public paras?: Array<ServiceCommandPara>;
    public responses?: Array<ServiceCommandResponse>;
    public constructor(commandName?: string) { 
        this['command_name'] = commandName;
    }
    public withCommandName(commandName: string): ServiceCommand {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withParas(paras: Array<ServiceCommandPara>): ServiceCommand {
        this['paras'] = paras;
        return this;
    }
    public withResponses(responses: Array<ServiceCommandResponse>): ServiceCommand {
        this['responses'] = responses;
        return this;
    }
}