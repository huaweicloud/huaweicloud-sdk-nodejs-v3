
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListYmlsResponse extends SdkResponse {
    public configurations?: object;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: object): ListYmlsResponse {
        this['configurations'] = configurations;
        return this;
    }
}