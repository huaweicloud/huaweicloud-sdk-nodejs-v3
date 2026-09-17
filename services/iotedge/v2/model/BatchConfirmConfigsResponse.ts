
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchConfirmConfigsResponse extends SdkResponse {
    public ids?: object;
    public constructor() { 
        super();
    }
    public withIds(ids: object): BatchConfirmConfigsResponse {
        this['ids'] = ids;
        return this;
    }
}