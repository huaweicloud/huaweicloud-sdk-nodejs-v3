import { ReqConfigHpcCacheBackend } from './ReqConfigHpcCacheBackend';


export class SetHpcCacheBackendRequest {
    private 'share_id'?: string;
    public body?: ReqConfigHpcCacheBackend;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): SetHpcCacheBackendRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: ReqConfigHpcCacheBackend): SetHpcCacheBackendRequest {
        this['body'] = body;
        return this;
    }
}