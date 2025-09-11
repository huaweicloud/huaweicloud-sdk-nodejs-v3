
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerVersionResponse extends SdkResponse {
    public version?: string;
    public constructor() { 
        super();
    }
    public withVersion(version: string): ShowServerVersionResponse {
        this['version'] = version;
        return this;
    }
}