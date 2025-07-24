import { ShowClientIpInfoRequestBody } from './ShowClientIpInfoRequestBody';


export class ShowClientIpInfoRequest {
    private 'share_id'?: string;
    public body?: ShowClientIpInfoRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ShowClientIpInfoRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: ShowClientIpInfoRequestBody): ShowClientIpInfoRequest {
        this['body'] = body;
        return this;
    }
}