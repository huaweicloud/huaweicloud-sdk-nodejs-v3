
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDataProgressResponse extends SdkResponse {
    public id?: string;
    public status?: UpdateDataProgressResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateDataProgressResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: UpdateDataProgressResponseStatusEnum | string): UpdateDataProgressResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDataProgressResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
