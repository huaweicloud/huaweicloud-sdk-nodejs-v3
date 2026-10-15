

export class BigKeyHotKeySwitchReq {
    public action?: BigKeyHotKeySwitchReqActionEnum | string;
    private 'engine_type'?: string;
    public constructor(action?: string, engineType?: string) { 
        this['action'] = action;
        this['engine_type'] = engineType;
    }
    public withAction(action: BigKeyHotKeySwitchReqActionEnum | string): BigKeyHotKeySwitchReq {
        this['action'] = action;
        return this;
    }
    public withEngineType(engineType: string): BigKeyHotKeySwitchReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BigKeyHotKeySwitchReqActionEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
