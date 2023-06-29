

export class QueryDeviceTypeResultDTO {
    public type?: string;
    public model?: string;
    public enableActiveCode?: boolean;
    public resolution?: string;
    public supportProjectionCode?: boolean;
    public supportSVC?: boolean;
    public constructor() { 
    }
    public withType(type: string): QueryDeviceTypeResultDTO {
        this['type'] = type;
        return this;
    }
    public withModel(model: string): QueryDeviceTypeResultDTO {
        this['model'] = model;
        return this;
    }
    public withEnableActiveCode(enableActiveCode: boolean): QueryDeviceTypeResultDTO {
        this['enableActiveCode'] = enableActiveCode;
        return this;
    }
    public withResolution(resolution: string): QueryDeviceTypeResultDTO {
        this['resolution'] = resolution;
        return this;
    }
    public withSupportProjectionCode(supportProjectionCode: boolean): QueryDeviceTypeResultDTO {
        this['supportProjectionCode'] = supportProjectionCode;
        return this;
    }
    public withSupportSVC(supportSVC: boolean): QueryDeviceTypeResultDTO {
        this['supportSVC'] = supportSVC;
        return this;
    }
}