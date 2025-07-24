import { ChangeShareChargeModeRequestBody } from './ChangeShareChargeModeRequestBody';


export class ChangeShareChargeModeV2Request {
    private 'share_id'?: string;
    public body?: ChangeShareChargeModeRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ChangeShareChargeModeV2Request {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: ChangeShareChargeModeRequestBody): ChangeShareChargeModeV2Request {
        this['body'] = body;
        return this;
    }
}