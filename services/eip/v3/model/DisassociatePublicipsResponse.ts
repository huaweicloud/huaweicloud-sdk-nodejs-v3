import { PublicipInstanceResp } from './PublicipInstanceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociatePublicipsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public publicip?: PublicipInstanceResp;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): DisassociatePublicipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPublicip(publicip: PublicipInstanceResp): DisassociatePublicipsResponse {
        this['publicip'] = publicip;
        return this;
    }
}