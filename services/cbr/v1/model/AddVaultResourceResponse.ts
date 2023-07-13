
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddVaultResourceResponse extends SdkResponse {
    private 'add_resource_ids'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withAddResourceIds(addResourceIds: Array<string>): AddVaultResourceResponse {
        this['add_resource_ids'] = addResourceIds;
        return this;
    }
    public set addResourceIds(addResourceIds: Array<string> | undefined) {
        this['add_resource_ids'] = addResourceIds;
    }
    public get addResourceIds() {
        return this['add_resource_ids'];
    }
}