

export class ShowBackendTargetInfoRequest {
    private 'share_id'?: string;
    private 'target_id'?: string;
    public constructor(shareId?: string, targetId?: string) { 
        this['share_id'] = shareId;
        this['target_id'] = targetId;
    }
    public withShareId(shareId: string): ShowBackendTargetInfoRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withTargetId(targetId: string): ShowBackendTargetInfoRequest {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
}