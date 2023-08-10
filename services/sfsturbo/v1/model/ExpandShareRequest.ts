import { ExpandShareRequestBody } from './ExpandShareRequestBody';


export class ExpandShareRequest {
    private 'share_id'?: string;
    public body?: ExpandShareRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ExpandShareRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: ExpandShareRequestBody): ExpandShareRequest {
        this['body'] = body;
        return this;
    }
}