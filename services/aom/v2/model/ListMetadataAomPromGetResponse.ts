
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetadataAomPromGetResponse extends SdkResponse {
    public status?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListMetadataAomPromGetResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: object): ListMetadataAomPromGetResponse {
        this['data'] = data;
        return this;
    }
}