
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFullSpeedRecordConfigResponse extends SdkResponse {
    private 'result_code'?: string;
    private 'result_desc'?: string;
    public constructor() { 
        super();
    }
    public withResultCode(resultCode: string): UpdateFullSpeedRecordConfigResponse {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withResultDesc(resultDesc: string): UpdateFullSpeedRecordConfigResponse {
        this['result_desc'] = resultDesc;
        return this;
    }
    public set resultDesc(resultDesc: string  | undefined) {
        this['result_desc'] = resultDesc;
    }
    public get resultDesc(): string | undefined {
        return this['result_desc'];
    }
}