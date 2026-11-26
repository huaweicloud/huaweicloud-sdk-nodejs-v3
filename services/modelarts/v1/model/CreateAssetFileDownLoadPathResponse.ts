
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssetFileDownLoadPathResponse extends SdkResponse {
    public signedurl?: string;
    public constructor() { 
        super();
    }
    public withSignedurl(signedurl: string): CreateAssetFileDownLoadPathResponse {
        this['signedurl'] = signedurl;
        return this;
    }
}