import { UpdateHpcShareRequestBody } from './UpdateHpcShareRequestBody';


export class UpdateHpcShareRequest {
    private 'share_id'?: string;
    public body?: UpdateHpcShareRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): UpdateHpcShareRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: UpdateHpcShareRequestBody): UpdateHpcShareRequest {
        this['body'] = body;
        return this;
    }
}