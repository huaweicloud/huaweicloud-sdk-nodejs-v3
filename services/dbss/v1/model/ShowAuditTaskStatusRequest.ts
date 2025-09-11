

export class ShowAuditTaskStatusRequest {
    private 'busi_type'?: string;
    public constructor(busiType?: string) { 
        this['busi_type'] = busiType;
    }
    public withBusiType(busiType: string): ShowAuditTaskStatusRequest {
        this['busi_type'] = busiType;
        return this;
    }
    public set busiType(busiType: string  | undefined) {
        this['busi_type'] = busiType;
    }
    public get busiType(): string | undefined {
        return this['busi_type'];
    }
}