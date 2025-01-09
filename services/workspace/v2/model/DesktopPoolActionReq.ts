

export class DesktopPoolActionReq {
    private 'op_type'?: string;
    public type?: DesktopPoolActionReqTypeEnum | string;
    public constructor(opType?: string) { 
        this['op_type'] = opType;
    }
    public withOpType(opType: string): DesktopPoolActionReq {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: string  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): string | undefined {
        return this['op_type'];
    }
    public withType(type: DesktopPoolActionReqTypeEnum | string): DesktopPoolActionReq {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DesktopPoolActionReqTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
