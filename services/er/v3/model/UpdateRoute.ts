

export class UpdateRoute {
    private 'attachment_id'?: string | undefined;
    private 'is_blackhole'?: boolean | undefined;
    public constructor() { 
    }
    public withAttachmentId(attachmentId: string): UpdateRoute {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withIsBlackhole(isBlackhole: boolean): UpdateRoute {
        this['is_blackhole'] = isBlackhole;
        return this;
    }
    public set isBlackhole(isBlackhole: boolean | undefined) {
        this['is_blackhole'] = isBlackhole;
    }
    public get isBlackhole() {
        return this['is_blackhole'];
    }
}