import { AuditSummaryStatusRequest } from './AuditSummaryStatusRequest';


export class UpdateAuditTaskStatusRequest {
    private 'busi_type'?: string;
    public body?: AuditSummaryStatusRequest;
    public constructor(busiType?: string) { 
        this['busi_type'] = busiType;
    }
    public withBusiType(busiType: string): UpdateAuditTaskStatusRequest {
        this['busi_type'] = busiType;
        return this;
    }
    public set busiType(busiType: string  | undefined) {
        this['busi_type'] = busiType;
    }
    public get busiType(): string | undefined {
        return this['busi_type'];
    }
    public withBody(body: AuditSummaryStatusRequest): UpdateAuditTaskStatusRequest {
        this['body'] = body;
        return this;
    }
}