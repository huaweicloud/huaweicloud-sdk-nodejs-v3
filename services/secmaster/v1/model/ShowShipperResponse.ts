import { ShowShipperResponseBodyData } from './ShowShipperResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShipperResponse extends SdkResponse {
    public code?: number;
    public data?: ShowShipperResponseBodyData;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): ShowShipperResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: ShowShipperResponseBodyData): ShowShipperResponse {
        this['data'] = data;
        return this;
    }
    public withMsg(msg: string): ShowShipperResponse {
        this['msg'] = msg;
        return this;
    }
}