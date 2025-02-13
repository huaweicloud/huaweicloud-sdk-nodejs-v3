

export class ShowMonitorSystemResponseBodySpec {
    public id?: string;
    public type?: ShowMonitorSystemResponseBodySpecTypeEnum | string;
    public instrumentation?: ShowMonitorSystemResponseBodySpecInstrumentationEnum | string;
    private 'access_key'?: string;
    private 'access_value'?: string;
    private 'access_token'?: string;
    private 'master_address'?: string;
    private 'apm_application'?: string;
    public version?: string;
    private 'image_pull_policy'?: ShowMonitorSystemResponseBodySpecImagePullPolicyEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): ShowMonitorSystemResponseBodySpec {
        this['id'] = id;
        return this;
    }
    public withType(type: ShowMonitorSystemResponseBodySpecTypeEnum | string): ShowMonitorSystemResponseBodySpec {
        this['type'] = type;
        return this;
    }
    public withInstrumentation(instrumentation: ShowMonitorSystemResponseBodySpecInstrumentationEnum | string): ShowMonitorSystemResponseBodySpec {
        this['instrumentation'] = instrumentation;
        return this;
    }
    public withAccessKey(accessKey: string): ShowMonitorSystemResponseBodySpec {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withAccessValue(accessValue: string): ShowMonitorSystemResponseBodySpec {
        this['access_value'] = accessValue;
        return this;
    }
    public set accessValue(accessValue: string  | undefined) {
        this['access_value'] = accessValue;
    }
    public get accessValue(): string | undefined {
        return this['access_value'];
    }
    public withAccessToken(accessToken: string): ShowMonitorSystemResponseBodySpec {
        this['access_token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access_token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access_token'];
    }
    public withMasterAddress(masterAddress: string): ShowMonitorSystemResponseBodySpec {
        this['master_address'] = masterAddress;
        return this;
    }
    public set masterAddress(masterAddress: string  | undefined) {
        this['master_address'] = masterAddress;
    }
    public get masterAddress(): string | undefined {
        return this['master_address'];
    }
    public withApmApplication(apmApplication: string): ShowMonitorSystemResponseBodySpec {
        this['apm_application'] = apmApplication;
        return this;
    }
    public set apmApplication(apmApplication: string  | undefined) {
        this['apm_application'] = apmApplication;
    }
    public get apmApplication(): string | undefined {
        return this['apm_application'];
    }
    public withVersion(version: string): ShowMonitorSystemResponseBodySpec {
        this['version'] = version;
        return this;
    }
    public withImagePullPolicy(imagePullPolicy: ShowMonitorSystemResponseBodySpecImagePullPolicyEnum | string): ShowMonitorSystemResponseBodySpec {
        this['image_pull_policy'] = imagePullPolicy;
        return this;
    }
    public set imagePullPolicy(imagePullPolicy: ShowMonitorSystemResponseBodySpecImagePullPolicyEnum | string  | undefined) {
        this['image_pull_policy'] = imagePullPolicy;
    }
    public get imagePullPolicy(): ShowMonitorSystemResponseBodySpecImagePullPolicyEnum | string | undefined {
        return this['image_pull_policy'];
    }
    public withCreatedAt(createdAt: string): ShowMonitorSystemResponseBodySpec {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowMonitorSystemResponseBodySpec {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMonitorSystemResponseBodySpecTypeEnum {
    OPENTELEMETRY = 'opentelemetry',
    APM2 = 'apm2'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMonitorSystemResponseBodySpecInstrumentationEnum {
    MANUAL = 'manual',
    AUTOMATIC = 'automatic'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMonitorSystemResponseBodySpecImagePullPolicyEnum {
    ALWAYS = 'Always',
    IFNOTPRESENT = 'IfNotPresent'
}
