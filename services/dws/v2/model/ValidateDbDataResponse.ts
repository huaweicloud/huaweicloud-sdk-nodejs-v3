
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateDbDataResponse extends SdkResponse {
    public total?: number;
    public success?: number;
    public failure?: number;
    public type?: string;
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ValidateDbDataResponse {
        this['total'] = total;
        return this;
    }
    public withSuccess(success: number): ValidateDbDataResponse {
        this['success'] = success;
        return this;
    }
    public withFailure(failure: number): ValidateDbDataResponse {
        this['failure'] = failure;
        return this;
    }
    public withType(type: string): ValidateDbDataResponse {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<string>): ValidateDbDataResponse {
        this['data'] = data;
        return this;
    }
}