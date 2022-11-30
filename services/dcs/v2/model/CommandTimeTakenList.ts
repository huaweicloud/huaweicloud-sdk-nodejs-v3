import { CommandTimeTaken } from './CommandTimeTaken';


export class CommandTimeTakenList {
    private 'total_num': number | undefined;
    private 'total_usec_sum': number | undefined;
    public result: CommandTimeTakenListResultEnum;
    private 'command_list': Array<CommandTimeTaken> | undefined;
    public constructor(totalNum?: any, totalUsecSum?: any, result?: any, commandList?: any) { 
        this['total_num'] = totalNum;
        this['total_usec_sum'] = totalUsecSum;
        this['result'] = result;
        this['command_list'] = commandList;
    }
    public withTotalNum(totalNum: number): CommandTimeTakenList {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
    public withTotalUsecSum(totalUsecSum: number): CommandTimeTakenList {
        this['total_usec_sum'] = totalUsecSum;
        return this;
    }
    public set totalUsecSum(totalUsecSum: number | undefined) {
        this['total_usec_sum'] = totalUsecSum;
    }
    public get totalUsecSum() {
        return this['total_usec_sum'];
    }
    public withResult(result: CommandTimeTakenListResultEnum): CommandTimeTakenList {
        this['result'] = result;
        return this;
    }
    public withCommandList(commandList: Array<CommandTimeTaken>): CommandTimeTakenList {
        this['command_list'] = commandList;
        return this;
    }
    public set commandList(commandList: Array<CommandTimeTaken> | undefined) {
        this['command_list'] = commandList;
    }
    public get commandList() {
        return this['command_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommandTimeTakenListResultEnum {
    SUCCEED = 'succeed',
    FAILED = 'failed'
}
