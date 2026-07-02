
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConsumerGroupOfTopicResponse extends SdkResponse {
    public groups?: Array<string>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<string>): ListConsumerGroupOfTopicResponse {
        this['groups'] = groups;
        return this;
    }
    public withTotal(total: number): ListConsumerGroupOfTopicResponse {
        this['total'] = total;
        return this;
    }
}