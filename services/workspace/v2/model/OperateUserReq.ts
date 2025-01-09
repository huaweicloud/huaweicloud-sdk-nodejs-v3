

export class OperateUserReq {
    private 'op_type'?: OperateUserReqOpTypeEnum | string;
    public constructor(opType?: string) { 
        this['op_type'] = opType;
    }
    public withOpType(opType: OperateUserReqOpTypeEnum | string): OperateUserReq {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: OperateUserReqOpTypeEnum | string  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): OperateUserReqOpTypeEnum | string | undefined {
        return this['op_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OperateUserReqOpTypeEnum {
    LOCK = 'LOCK',
    UNLOCK = 'UNLOCK',
    RESET_PWD = 'RESET_PWD'
}
