
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostInfoResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateHostInfoResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): UpdateHostInfoResponse {
        this['id'] = id;
        return this;
    }
}