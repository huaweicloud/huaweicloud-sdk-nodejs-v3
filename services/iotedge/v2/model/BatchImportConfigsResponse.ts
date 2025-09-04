
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchImportConfigsResponse extends SdkResponse {
    public ids?: object;
    public constructor() { 
        super();
    }
    public withIds(ids: object): BatchImportConfigsResponse {
        this['ids'] = ids;
        return this;
    }
}