
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceArtifactManifestResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ShowInstanceArtifactManifestResponse {
        this['body'] = body;
        return this;
    }
}