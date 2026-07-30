

export class ErrorInfo {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'setting_name'?: string;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): ErrorInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ErrorInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withSettingName(settingName: string): ErrorInfo {
        this['setting_name'] = settingName;
        return this;
    }
    public set settingName(settingName: string  | undefined) {
        this['setting_name'] = settingName;
    }
    public get settingName(): string | undefined {
        return this['setting_name'];
    }
    public withRegionId(regionId: string): ErrorInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}