
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectPositionAsyncResponse extends SdkResponse {
    public id?: string;
    public status?: CollectPositionAsyncResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectPositionAsyncResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectPositionAsyncResponseStatusEnum | string): CollectPositionAsyncResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectPositionAsyncResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
