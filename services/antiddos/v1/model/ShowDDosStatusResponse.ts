
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDDosStatusResponse extends SdkResponse {
    public status?: ShowDDosStatusResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowDDosStatusResponseStatusEnum | string): ShowDDosStatusResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDDosStatusResponseStatusEnum {
    NORMAL = 'normal',
    CONFIGGING = 'configging',
    NOTCONFIG = 'notConfig',
    PACKETCLEANING = 'packetcleaning',
    PACKETDROPPING = 'packetdropping'
}
