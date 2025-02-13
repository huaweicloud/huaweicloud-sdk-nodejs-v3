

export class MonitorSystemRequestBodySpec {
    public type?: MonitorSystemRequestBodySpecTypeEnum | string;
    public instrumentation?: MonitorSystemRequestBodySpecInstrumentationEnum | string;
    private 'access_key'?: string;
    private 'access_value'?: string;
    private 'access_token'?: string;
    private 'apm_application'?: string;
    public version?: string;
    private 'image_pull_policy'?: MonitorSystemRequestBodySpecImagePullPolicyEnum | string;
    public constructor(type?: string, instrumentation?: string, apmApplication?: string, version?: string, imagePullPolicy?: string) { 
        this['type'] = type;
        this['instrumentation'] = instrumentation;
        this['apm_application'] = apmApplication;
        this['version'] = version;
        this['image_pull_policy'] = imagePullPolicy;
    }
    public withType(type: MonitorSystemRequestBodySpecTypeEnum | string): MonitorSystemRequestBodySpec {
        this['type'] = type;
        return this;
    }
    public withInstrumentation(instrumentation: MonitorSystemRequestBodySpecInstrumentationEnum | string): MonitorSystemRequestBodySpec {
        this['instrumentation'] = instrumentation;
        return this;
    }
    public withAccessKey(accessKey: string): MonitorSystemRequestBodySpec {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withAccessValue(accessValue: string): MonitorSystemRequestBodySpec {
        this['access_value'] = accessValue;
        return this;
    }
    public set accessValue(accessValue: string  | undefined) {
        this['access_value'] = accessValue;
    }
    public get accessValue(): string | undefined {
        return this['access_value'];
    }
    public withAccessToken(accessToken: string): MonitorSystemRequestBodySpec {
        this['access_token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access_token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access_token'];
    }
    public withApmApplication(apmApplication: string): MonitorSystemRequestBodySpec {
        this['apm_application'] = apmApplication;
        return this;
    }
    public set apmApplication(apmApplication: string  | undefined) {
        this['apm_application'] = apmApplication;
    }
    public get apmApplication(): string | undefined {
        return this['apm_application'];
    }
    public withVersion(version: string): MonitorSystemRequestBodySpec {
        this['version'] = version;
        return this;
    }
    public withImagePullPolicy(imagePullPolicy: MonitorSystemRequestBodySpecImagePullPolicyEnum | string): MonitorSystemRequestBodySpec {
        this['image_pull_policy'] = imagePullPolicy;
        return this;
    }
    public set imagePullPolicy(imagePullPolicy: MonitorSystemRequestBodySpecImagePullPolicyEnum | string  | undefined) {
        this['image_pull_policy'] = imagePullPolicy;
    }
    public get imagePullPolicy(): MonitorSystemRequestBodySpecImagePullPolicyEnum | string | undefined {
        return this['image_pull_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MonitorSystemRequestBodySpecTypeEnum {
    OPENTELEMETRY = 'opentelemetry',
    APM2 = 'apm2'
}
/**
    * @export
    * @enum {string}
    */
export enum MonitorSystemRequestBodySpecInstrumentationEnum {
    MANUAL = 'manual',
    AUTOMATIC = 'automatic'
}
/**
    * @export
    * @enum {string}
    */
export enum MonitorSystemRequestBodySpecImagePullPolicyEnum {
    ALWAYS = 'Always',
    IFNOTPRESENT = 'IfNotPresent'
}
