import { CreateHpcCacheTaskReq } from './CreateHpcCacheTaskReq';


export class CreateHpcCacheTaskRequest {
    private 'share_id'?: string;
    public body?: CreateHpcCacheTaskReq;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): CreateHpcCacheTaskRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: CreateHpcCacheTaskReq): CreateHpcCacheTaskRequest {
        this['body'] = body;
        return this;
    }
}