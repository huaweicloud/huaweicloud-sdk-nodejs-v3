import { UpdateObsTargetPolicyRequestBody } from './UpdateObsTargetPolicyRequestBody';


export class UpdateObsTargetPolicyRequest {
    private 'share_id'?: string;
    private 'target_id'?: string;
    public body?: UpdateObsTargetPolicyRequestBody;
    public constructor(shareId?: string, targetId?: string) { 
        this['share_id'] = shareId;
        this['target_id'] = targetId;
    }
    public withShareId(shareId: string): UpdateObsTargetPolicyRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withTargetId(targetId: string): UpdateObsTargetPolicyRequest {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withBody(body: UpdateObsTargetPolicyRequestBody): UpdateObsTargetPolicyRequest {
        this['body'] = body;
        return this;
    }
}