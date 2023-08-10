

export class DeleteSharedTagRequest {
    private 'share_id'?: string;
    public key?: string;
    public constructor(shareId?: string, key?: string) { 
        this['share_id'] = shareId;
        this['key'] = key;
    }
    public withShareId(shareId: string): DeleteSharedTagRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withKey(key: string): DeleteSharedTagRequest {
        this['key'] = key;
        return this;
    }
}