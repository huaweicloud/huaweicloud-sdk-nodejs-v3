import { CreateBackendTargetRequestBody } from './CreateBackendTargetRequestBody';


export class CreateBackendTargetRequest {
    private 'share_id'?: string;
    public body?: CreateBackendTargetRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): CreateBackendTargetRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: CreateBackendTargetRequestBody): CreateBackendTargetRequest {
        this['body'] = body;
        return this;
    }
}