
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstantQueryAomPromGetResponse extends SdkResponse {
    public status?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListInstantQueryAomPromGetResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: object): ListInstantQueryAomPromGetResponse {
        this['data'] = data;
        return this;
    }
}