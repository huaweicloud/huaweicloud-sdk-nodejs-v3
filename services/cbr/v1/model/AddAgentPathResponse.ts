
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAgentPathResponse extends SdkResponse {
    public added?: Array<string>;
    public existed?: Array<string>;
    public constructor() { 
        super();
    }
    public withAdded(added: Array<string>): AddAgentPathResponse {
        this['added'] = added;
        return this;
    }
    public withExisted(existed: Array<string>): AddAgentPathResponse {
        this['existed'] = existed;
        return this;
    }
}