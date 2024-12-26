

export class BatchConfirmLiveCommandsReq {
    public command?: BatchConfirmLiveCommandsReqCommandEnum | string;
    public action?: BatchConfirmLiveCommandsReqActionEnum | string;
    private 'command_ids'?: Array<string>;
    public constructor() { 
    }
    public withCommand(command: BatchConfirmLiveCommandsReqCommandEnum | string): BatchConfirmLiveCommandsReq {
        this['command'] = command;
        return this;
    }
    public withAction(action: BatchConfirmLiveCommandsReqActionEnum | string): BatchConfirmLiveCommandsReq {
        this['action'] = action;
        return this;
    }
    public withCommandIds(commandIds: Array<string>): BatchConfirmLiveCommandsReq {
        this['command_ids'] = commandIds;
        return this;
    }
    public set commandIds(commandIds: Array<string>  | undefined) {
        this['command_ids'] = commandIds;
    }
    public get commandIds(): Array<string> | undefined {
        return this['command_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchConfirmLiveCommandsReqCommandEnum {
    REWRITE_PLAY_SCRIPT = 'REWRITE_PLAY_SCRIPT',
    REWRITE_INTERACTION_RULES = 'REWRITE_INTERACTION_RULES'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchConfirmLiveCommandsReqActionEnum {
    CONFIRM = 'confirm',
    REJECT = 'reject'
}
