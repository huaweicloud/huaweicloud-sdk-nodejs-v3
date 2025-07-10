

export class BatchActionDesktopsReq {
    private 'desktop_ids'?: Array<string>;
    private 'op_type'?: string;
    public type?: BatchActionDesktopsReqTypeEnum | string;
    public constructor(desktopIds?: Array<string>, opType?: string) { 
        this['desktop_ids'] = desktopIds;
        this['op_type'] = opType;
    }
    public withDesktopIds(desktopIds: Array<string>): BatchActionDesktopsReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withOpType(opType: string): BatchActionDesktopsReq {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: string  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): string | undefined {
        return this['op_type'];
    }
    public withType(type: BatchActionDesktopsReqTypeEnum | string): BatchActionDesktopsReq {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchActionDesktopsReqTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
