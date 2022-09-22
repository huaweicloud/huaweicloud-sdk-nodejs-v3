

export class CommandBody {
    private 'command_name': string | undefined;
    public result: string;
    private 'result_detail': object | undefined;
    public constructor(commandName?: any, result?: any, resultDetail?: any) { 
        this['command_name'] = commandName;
        this['result'] = result;
        this['result_detail'] = resultDetail;
    }
    public withCommandName(commandName: string): CommandBody {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName() {
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
    public set resultDetail(resultDetail: object | undefined) {
        this['result_detail'] = resultDetail;
    }
    public get resultDetail() {
        return this['result_detail'];
    }
}