
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteResourceGroupsResponse extends SdkResponse {
    private 'group_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withGroupIds(groupIds: Array<string>): BatchDeleteResourceGroupsResponse {
        this['group_ids'] = groupIds;
        return this;
    }
    public set groupIds(groupIds: Array<string>  | undefined) {
        this['group_ids'] = groupIds;
    }
    public get groupIds(): Array<string> | undefined {
        return this['group_ids'];
    }
}