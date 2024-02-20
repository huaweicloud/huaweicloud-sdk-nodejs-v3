import { AccessPreviewStatus } from './AccessPreviewStatus';
import { PreviewStatusReason } from './PreviewStatusReason';


export class AccessPreviewSummary {
    private 'access_preview_id'?: string;
    private 'analyzer_id'?: string;
    private 'created_at'?: Date;
    public status?: AccessPreviewStatus;
    private 'status_reason'?: PreviewStatusReason;
    public constructor(accessPreviewId?: string, analyzerId?: string, createdAt?: Date, status?: AccessPreviewStatus) { 
        this['access_preview_id'] = accessPreviewId;
        this['analyzer_id'] = analyzerId;
        this['created_at'] = createdAt;
        this['status'] = status;
    }
    public withAccessPreviewId(accessPreviewId: string): AccessPreviewSummary {
        this['access_preview_id'] = accessPreviewId;
        return this;
    }
    public set accessPreviewId(accessPreviewId: string  | undefined) {
        this['access_preview_id'] = accessPreviewId;
    }
    public get accessPreviewId(): string | undefined {
        return this['access_preview_id'];
    }
    public withAnalyzerId(analyzerId: string): AccessPreviewSummary {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withCreatedAt(createdAt: Date): AccessPreviewSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withStatus(status: AccessPreviewStatus): AccessPreviewSummary {
        this['status'] = status;
        return this;
    }
    public withStatusReason(statusReason: PreviewStatusReason): AccessPreviewSummary {
        this['status_reason'] = statusReason;
        return this;
    }
    public set statusReason(statusReason: PreviewStatusReason  | undefined) {
        this['status_reason'] = statusReason;
    }
    public get statusReason(): PreviewStatusReason | undefined {
        return this['status_reason'];
    }
}