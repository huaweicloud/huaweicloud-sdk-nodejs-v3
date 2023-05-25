
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetVaultResourceResponse extends SdkResponse {
    private 'set_resource_ids'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withSetResourceIds(setResourceIds: Array<string>): SetVaultResourceResponse {
        this['set_resource_ids'] = setResourceIds;
        return this;
    }
    public set setResourceIds(setResourceIds: Array<string> | undefined) {
        this['set_resource_ids'] = setResourceIds;
    }
    public get setResourceIds() {
        return this['set_resource_ids'];
    }
}