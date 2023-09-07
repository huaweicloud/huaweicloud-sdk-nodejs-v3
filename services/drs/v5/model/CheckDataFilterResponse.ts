
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDataFilterResponse extends SdkResponse {
    public id?: string;
    public status?: CheckDataFilterResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): CheckDataFilterResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CheckDataFilterResponseStatusEnum | string): CheckDataFilterResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckDataFilterResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
