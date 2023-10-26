import { FsDirReq } from './FsDirReq';


export class CreateFsTaskRequest {
    private 'share_id'?: string;
    public feature?: string;
    public body?: FsDirReq;
    public constructor(shareId?: string, feature?: string) { 
        this['share_id'] = shareId;
        this['feature'] = feature;
    }
    public withShareId(shareId: string): CreateFsTaskRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withFeature(feature: string): CreateFsTaskRequest {
        this['feature'] = feature;
        return this;
    }
    public withBody(body: FsDirReq): CreateFsTaskRequest {
        this['body'] = body;
        return this;
    }
}