

export class ConfirmSmartLiveRoomReq {
    public action?: ConfirmSmartLiveRoomReqActionEnum | string;
    private 'script_version'?: string;
    public constructor() { 
    }
    public withAction(action: ConfirmSmartLiveRoomReqActionEnum | string): ConfirmSmartLiveRoomReq {
        this['action'] = action;
        return this;
    }
    public withScriptVersion(scriptVersion: string): ConfirmSmartLiveRoomReq {
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
export enum ConfirmSmartLiveRoomReqActionEnum {
    CONFIRM = 'confirm',
    REJECT = 'reject'
}
