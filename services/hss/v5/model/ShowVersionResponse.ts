
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionResponse extends SdkResponse {
    public version?: string;
    public constructor() { 
        super();
    }
    public withVersion(version: string): ShowVersionResponse {
        this['version'] = version;
        return this;
    }
}