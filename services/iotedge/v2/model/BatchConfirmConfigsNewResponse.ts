
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchConfirmConfigsNewResponse extends SdkResponse {
    public ids?: object;
    public constructor() { 
        super();
    }
    public withIds(ids: object): BatchConfirmConfigsNewResponse {
        this['ids'] = ids;
        return this;
    }
}