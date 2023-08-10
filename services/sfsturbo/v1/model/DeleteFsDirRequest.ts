import { DeleteFsDirRequestBody } from './DeleteFsDirRequestBody';


export class DeleteFsDirRequest {
    private 'share_id'?: string;
    public body?: DeleteFsDirRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): DeleteFsDirRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: DeleteFsDirRequestBody): DeleteFsDirRequest {
        this['body'] = body;
        return this;
    }
}