
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionResponse extends SdkResponse {
    public version?: object;
    public constructor() { 
        super();
    }
    public withVersion(version: object): ShowVersionResponse {
        this['version'] = version;
        return this;
    }
}