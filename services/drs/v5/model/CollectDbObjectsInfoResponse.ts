
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectDbObjectsInfoResponse extends SdkResponse {
    public id?: string;
    public status?: CollectDbObjectsInfoResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectDbObjectsInfoResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectDbObjectsInfoResponseStatusEnum | string): CollectDbObjectsInfoResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectDbObjectsInfoResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
