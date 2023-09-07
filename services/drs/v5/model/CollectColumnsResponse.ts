
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectColumnsResponse extends SdkResponse {
    public id?: string;
    public status?: CollectColumnsResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectColumnsResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectColumnsResponseStatusEnum | string): CollectColumnsResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectColumnsResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
