

export class AppRequestDTO {
    private 'app_type'?: AppRequestDTOAppTypeEnum | string;
    public name?: string;
    public description?: string;
    private 'apig_type'?: AppRequestDTOApigTypeEnum | string;
    private 'apig_instance_id'?: string;
    public constructor() { 
    }
    public withAppType(appType: AppRequestDTOAppTypeEnum | string): AppRequestDTO {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppRequestDTOAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppRequestDTOAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withName(name: string): AppRequestDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AppRequestDTO {
        this['description'] = description;
        return this;
    }
    public withApigType(apigType: AppRequestDTOApigTypeEnum | string): AppRequestDTO {
        this['apig_type'] = apigType;
        return this;
    }
    public set apigType(apigType: AppRequestDTOApigTypeEnum | string  | undefined) {
        this['apig_type'] = apigType;
    }
    public get apigType(): AppRequestDTOApigTypeEnum | string | undefined {
        return this['apig_type'];
    }
    public withApigInstanceId(apigInstanceId: string): AppRequestDTO {
        this['apig_instance_id'] = apigInstanceId;
        return this;
    }
    public set apigInstanceId(apigInstanceId: string  | undefined) {
        this['apig_instance_id'] = apigInstanceId;
    }
    public get apigInstanceId(): string | undefined {
        return this['apig_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppRequestDTOAppTypeEnum {
    APIG = 'APIG',
    IAM = 'IAM',
    APIGW = 'APIGW',
    DLM = 'DLM',
    ROMA_APIC = 'ROMA_APIC'
}
/**
    * @export
    * @enum {string}
    */
export enum AppRequestDTOApigTypeEnum {
    APIG = 'APIG',
    APIGW = 'APIGW',
    ROMA_APIC = 'ROMA_APIC'
}
