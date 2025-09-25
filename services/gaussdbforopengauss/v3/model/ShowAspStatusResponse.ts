
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAspStatusResponse extends SdkResponse {
    public status?: ShowAspStatusResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowAspStatusResponseStatusEnum | string): ShowAspStatusResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAspStatusResponseStatusEnum {
    ON = 'ON',
    OFF = 'OFF'
}
