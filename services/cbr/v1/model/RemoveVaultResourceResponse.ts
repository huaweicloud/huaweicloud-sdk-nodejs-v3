
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveVaultResourceResponse extends SdkResponse {
    private 'remove_resource_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withRemoveResourceIds(removeResourceIds: Array<string>): RemoveVaultResourceResponse {
        this['remove_resource_ids'] = removeResourceIds;
        return this;
    }
    public set removeResourceIds(removeResourceIds: Array<string>  | undefined) {
        this['remove_resource_ids'] = removeResourceIds;
    }
    public get removeResourceIds(): Array<string> | undefined {
        return this['remove_resource_ids'];
    }
}