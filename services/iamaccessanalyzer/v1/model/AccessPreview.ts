import { AccessPreviewStatus } from './AccessPreviewStatus';
import { Configuration } from './Configuration';
import { PreviewStatusReason } from './PreviewStatusReason';


export class AccessPreview {
    private 'access_preview_id'?: string;
    private 'analyzer_id'?: string;
    public configurations?: Configuration;
    private 'created_at'?: Date;
    public status?: AccessPreviewStatus;
    private 'status_reason'?: PreviewStatusReason;
    public constructor(accessPreviewId?: string, analyzerId?: string, configurations?: Configuration, createdAt?: Date, status?: AccessPreviewStatus) { 
        this['access_preview_id'] = accessPreviewId;
        this['analyzer_id'] = analyzerId;
        this['configurations'] = configurations;
        this['created_at'] = createdAt;
        this['status'] = status;
    }
    public withAccessPreviewId(accessPreviewId: string): AccessPreview {
        this['access_preview_id'] = accessPreviewId;
        return this;
    }
    public set accessPreviewId(accessPreviewId: string  | undefined) {
        this['access_preview_id'] = accessPreviewId;
    }
    public get accessPreviewId(): string | undefined {
        return this['access_preview_id'];
    }
    public withAnalyzerId(analyzerId: string): AccessPreview {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withConfigurations(configurations: Configuration): AccessPreview {
        this['configurations'] = configurations;
        return this;
    }
    public withCreatedAt(createdAt: Date): AccessPreview {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withStatus(status: AccessPreviewStatus): AccessPreview {
        this['status'] = status;
        return this;
    }
    public withStatusReason(statusReason: PreviewStatusReason): AccessPreview {
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