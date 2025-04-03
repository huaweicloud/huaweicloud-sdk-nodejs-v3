

export class ConfirmSmarLiveRoomReq {
    public action?: ConfirmSmarLiveRoomReqActionEnum | string;
    private 'script_version'?: string;
    public constructor() { 
    }
    public withAction(action: ConfirmSmarLiveRoomReqActionEnum | string): ConfirmSmarLiveRoomReq {
        this['action'] = action;
        return this;
    }
    public withScriptVersion(scriptVersion: string): ConfirmSmarLiveRoomReq {
        this['script_version'] = scriptVersion;
        return this;
    }
    public set scriptVersion(scriptVersion: string  | undefined) {
        this['script_version'] = scriptVersion;
    }
    public get scriptVersion(): string | undefined {
        return this['script_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmSmarLiveRoomReqActionEnum {
    CONFIRM = 'confirm',
    REJECT = 'reject'
}
