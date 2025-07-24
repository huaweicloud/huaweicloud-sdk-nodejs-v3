
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticByIdResponse extends SdkResponse {
    public code?: string;
    public data?: { [key: string]: number; };
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowStatisticByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: { [key: string]: number; }): ShowStatisticByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowStatisticByIdResponse {
        this['message'] = message;
        return this;
    }
}