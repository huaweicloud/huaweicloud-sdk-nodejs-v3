
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVolumeExpansionConfigResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateVolumeExpansionConfigResponse {
        this['body'] = body;
        return this;
    }
}