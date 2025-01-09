

export class JobActionsReq {
    private 'op_type'?: string;
    public constructor(opType?: string) { 
        this['op_type'] = opType;
    }
    public withOpType(opType: string): JobActionsReq {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: string  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): string | undefined {
        return this['op_type'];
    }
}