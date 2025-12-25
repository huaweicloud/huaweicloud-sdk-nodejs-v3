import { ShowShipperAuthorizeResponseBodyData } from './ShowShipperAuthorizeResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShipperAuthorizationsResponse extends SdkResponse {
    public code?: number;
    public data?: ShowShipperAuthorizeResponseBodyData;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): ListShipperAuthorizationsResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: ShowShipperAuthorizeResponseBodyData): ListShipperAuthorizationsResponse {
        this['data'] = data;
        return this;
    }
    public withMsg(msg: string): ListShipperAuthorizationsResponse {
        this['msg'] = msg;
        return this;
    }
}