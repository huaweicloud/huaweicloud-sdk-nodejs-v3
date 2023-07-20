

export class CommandBody {
    private 'command_name'?: string;
    public result?: string;
    private 'result_detail'?: object;
    public constructor(commandName?: string, result?: string, resultDetail?: object) { 
        this['command_name'] = commandName;
        this['result'] = result;
        this['result_detail'] = resultDetail;
    }
    public withCommandName(commandName: string): CommandBody {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withResult(result: string): CommandBody {
        this['result'] = result;
        return this;
    }
    public withResultDetail(resultDetail: object): CommandBody {
        this['result_detail'] = resultDetail;
        return this;
    }
    public set resultDetail(resultDetail: object  | undefined) {
        this['result_detail'] = resultDetail;
    }
    public get resultDetail(): object | undefined {
        return this['result_detail'];
    }
}