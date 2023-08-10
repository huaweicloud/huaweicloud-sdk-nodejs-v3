import { CreateSharedTagRequestBody } from './CreateSharedTagRequestBody';


export class CreateSharedTagRequest {
    private 'share_id'?: string;
    public body?: CreateSharedTagRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): CreateSharedTagRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: CreateSharedTagRequestBody): CreateSharedTagRequest {
        this['body'] = body;
        return this;
    }
}