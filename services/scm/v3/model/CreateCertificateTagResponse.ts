
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCertificateTagResponse extends SdkResponse {
    public desc?: string;
    public constructor() { 
        super();
    }
    public withDesc(desc: string): CreateCertificateTagResponse {
        this['desc'] = desc;
        return this;
    }
}