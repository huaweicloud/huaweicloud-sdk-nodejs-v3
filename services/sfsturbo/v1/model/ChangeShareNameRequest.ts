import { ChangeShareNameReq } from './ChangeShareNameReq';


export class ChangeShareNameRequest {
    private 'share_id'?: string;
    public body?: ChangeShareNameReq;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ChangeShareNameRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: ChangeShareNameReq): ChangeShareNameRequest {
        this['body'] = body;
        return this;
    }
}