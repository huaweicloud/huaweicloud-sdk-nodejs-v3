
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetTempAuthorityResponse extends SdkResponse {
    private 'sign_str'?: string;
    public constructor() { 
        super();
    }
    public withSignStr(signStr: string): ShowAssetTempAuthorityResponse {
        this['sign_str'] = signStr;
        return this;
    }
    public set signStr(signStr: string  | undefined) {
        this['sign_str'] = signStr;
    }
    public get signStr(): string | undefined {
        return this['sign_str'];
    }
}