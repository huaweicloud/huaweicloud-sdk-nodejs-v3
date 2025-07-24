
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteFacotrByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteFacotrByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): DeleteFacotrByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DeleteFacotrByIdResponse {
        this['message'] = message;
        return this;
    }
}