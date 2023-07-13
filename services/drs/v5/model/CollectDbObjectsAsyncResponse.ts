
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectDbObjectsAsyncResponse extends SdkResponse {
    public id?: string;
    public status?: CollectDbObjectsAsyncResponseStatusEnum;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectDbObjectsAsyncResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectDbObjectsAsyncResponseStatusEnum): CollectDbObjectsAsyncResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectDbObjectsAsyncResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
