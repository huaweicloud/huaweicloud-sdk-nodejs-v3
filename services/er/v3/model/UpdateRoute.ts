

export class UpdateRoute {
    private 'attachment_id'?: string;
    private 'is_blackhole'?: boolean;
    public description?: string;
    public constructor() { 
    }
    public withAttachmentId(attachmentId: string): UpdateRoute {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
    public withIsBlackhole(isBlackhole: boolean): UpdateRoute {
        this['is_blackhole'] = isBlackhole;
        return this;
    }
    public set isBlackhole(isBlackhole: boolean  | undefined) {
        this['is_blackhole'] = isBlackhole;
    }
    public get isBlackhole(): boolean | undefined {
        return this['is_blackhole'];
    }
    public withDescription(description: string): UpdateRoute {
        this['description'] = description;
        return this;
    }
}