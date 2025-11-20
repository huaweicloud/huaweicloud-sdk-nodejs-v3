
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNotificationSettingResponse extends SdkResponse {
    public id?: string;
    public urn?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateNotificationSettingResponse {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): CreateNotificationSettingResponse {
        this['urn'] = urn;
        return this;
    }
}