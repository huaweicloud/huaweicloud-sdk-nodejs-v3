

export class WorkflowGallerySubscription {
    private 'content_id'?: string;
    private 'version_id'?: string;
    private 'expired_at'?: string;
    public constructor() { 
    }
    public withContentId(contentId: string): WorkflowGallerySubscription {
        this['content_id'] = contentId;
        return this;
    }
    public set contentId(contentId: string  | undefined) {
        this['content_id'] = contentId;
    }
    public get contentId(): string | undefined {
        return this['content_id'];
    }
    public withVersionId(versionId: string): WorkflowGallerySubscription {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withExpiredAt(expiredAt: string): WorkflowGallerySubscription {
        this['expired_at'] = expiredAt;
        return this;
    }
    public set expiredAt(expiredAt: string  | undefined) {
        this['expired_at'] = expiredAt;
    }
    public get expiredAt(): string | undefined {
        return this['expired_at'];
    }
}