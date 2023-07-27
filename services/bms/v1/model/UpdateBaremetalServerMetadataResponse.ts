
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBaremetalServerMetadataResponse extends SdkResponse {
    public metadata?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withMetadata(metadata: { [key: string]: string; }): UpdateBaremetalServerMetadataResponse {
        this['metadata'] = metadata;
        return this;
    }
}