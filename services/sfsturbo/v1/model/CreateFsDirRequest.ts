import { CreateFsDirRequestBody } from './CreateFsDirRequestBody';


export class CreateFsDirRequest {
    private 'share_id'?: string;
    public body?: CreateFsDirRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): CreateFsDirRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: CreateFsDirRequestBody): CreateFsDirRequest {
        this['body'] = body;
        return this;
    }
}