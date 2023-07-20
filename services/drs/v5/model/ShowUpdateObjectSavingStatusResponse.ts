
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpdateObjectSavingStatusResponse extends SdkResponse {
    public id?: string;
    public status?: ShowUpdateObjectSavingStatusResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowUpdateObjectSavingStatusResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ShowUpdateObjectSavingStatusResponseStatusEnum | string): ShowUpdateObjectSavingStatusResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUpdateObjectSavingStatusResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
