

export class ControlSmartLiveReq {
    public command?: ControlSmartLiveReqCommandEnum | string;
    public params?: object;
    public constructor(command?: string) { 
        this['command'] = command;
    }
    public withCommand(command: ControlSmartLiveReqCommandEnum | string): ControlSmartLiveReq {
        this['command'] = command;
        return this;
    }
    public withParams(params: object): ControlSmartLiveReq {
        this['params'] = params;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ControlSmartLiveReqCommandEnum {
    INSERT_PLAY_SCRIPT = 'INSERT_PLAY_SCRIPT',
    REWRITE_PLAY_SCRIPT = 'REWRITE_PLAY_SCRIPT',
    INSERT_PLAY_AUDIO = 'INSERT_PLAY_AUDIO'
}
