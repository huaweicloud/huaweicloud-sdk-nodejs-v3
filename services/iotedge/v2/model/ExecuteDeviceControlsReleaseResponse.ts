
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteDeviceControlsReleaseResponse extends SdkResponse {
    private 'result_code'?: number;
    private 'result_desc'?: string;
    public constructor() { 
        super();
    }
    public withResultCode(resultCode: number): ExecuteDeviceControlsReleaseResponse {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: number  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): number | undefined {
        return this['result_code'];
    }
    public withResultDesc(resultDesc: string): ExecuteDeviceControlsReleaseResponse {
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