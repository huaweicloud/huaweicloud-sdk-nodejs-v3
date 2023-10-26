
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstantQueryAomPromPostResponse extends SdkResponse {
    public status?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListInstantQueryAomPromPostResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: object): ListInstantQueryAomPromPostResponse {
        this['data'] = data;
        return this;
    }
}