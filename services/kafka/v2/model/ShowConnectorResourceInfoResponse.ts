
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConnectorResourceInfoResponse extends SdkResponse {
    public soldOut?: boolean;
    public constructor() { 
        super();
    }
    public withSoldOut(soldOut: boolean): ShowConnectorResourceInfoResponse {
        this['soldOut'] = soldOut;
        return this;
    }
}