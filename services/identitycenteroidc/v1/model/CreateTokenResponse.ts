import { TokenInfoDto } from './TokenInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTokenResponse extends SdkResponse {
    private 'token_info'?: TokenInfoDto;
    public constructor() { 
        super();
    }
    public withTokenInfo(tokenInfo: TokenInfoDto): CreateTokenResponse {
        this['token_info'] = tokenInfo;
        return this;
    }
    public set tokenInfo(tokenInfo: TokenInfoDto  | undefined) {
        this['token_info'] = tokenInfo;
    }
    public get tokenInfo(): TokenInfoDto | undefined {
        return this['token_info'];
    }
}