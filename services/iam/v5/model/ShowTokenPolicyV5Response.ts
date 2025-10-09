import { TokenPolicy } from './TokenPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTokenPolicyV5Response extends SdkResponse {
    private 'token_policy'?: TokenPolicy;
    public constructor() { 
        super();
    }
    public withTokenPolicy(tokenPolicy: TokenPolicy): ShowTokenPolicyV5Response {
        this['token_policy'] = tokenPolicy;
        return this;
    }
    public set tokenPolicy(tokenPolicy: TokenPolicy  | undefined) {
        this['token_policy'] = tokenPolicy;
    }
    public get tokenPolicy(): TokenPolicy | undefined {
        return this['token_policy'];
    }
}