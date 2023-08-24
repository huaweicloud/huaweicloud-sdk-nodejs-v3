
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBackupPolicyInfoResponse extends SdkResponse {
    private 'error_code'?: number;
    private 'error_description'?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: number): UpdateBackupPolicyInfoResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: number  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): number | undefined {
        return this['error_code'];
    }
    public withErrorDescription(errorDescription: string): UpdateBackupPolicyInfoResponse {
        this['error_description'] = errorDescription;
        return this;
    }
    public set errorDescription(errorDescription: string  | undefined) {
        this['error_description'] = errorDescription;
    }
    public get errorDescription(): string | undefined {
        return this['error_description'];
    }
}