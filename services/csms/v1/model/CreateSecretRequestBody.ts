

export class CreateSecretRequestBody {
    public name?: string;
    private 'kms_key_id'?: string;
    public description?: string;
    private 'secret_binary'?: string;
    private 'secret_string'?: string;
    private 'secret_type'?: CreateSecretRequestBodySecretTypeEnum | string;
    private 'auto_rotation'?: boolean;
    private 'rotation_period'?: string;
    private 'rotation_config'?: string;
    private 'event_subscriptions'?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'rotation_func_urn'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateSecretRequestBody {
        this['name'] = name;
        return this;
    }
    public withKmsKeyId(kmsKeyId: string): CreateSecretRequestBody {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withDescription(description: string): CreateSecretRequestBody {
        this['description'] = description;
        return this;
    }
    public withSecretBinary(secretBinary: string): CreateSecretRequestBody {
        this['secret_binary'] = secretBinary;
        return this;
    }
    public set secretBinary(secretBinary: string  | undefined) {
        this['secret_binary'] = secretBinary;
    }
    public get secretBinary(): string | undefined {
        return this['secret_binary'];
    }
    public withSecretString(secretString: string): CreateSecretRequestBody {
        this['secret_string'] = secretString;
        return this;
    }
    public set secretString(secretString: string  | undefined) {
        this['secret_string'] = secretString;
    }
    public get secretString(): string | undefined {
        return this['secret_string'];
    }
    public withSecretType(secretType: CreateSecretRequestBodySecretTypeEnum | string): CreateSecretRequestBody {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: CreateSecretRequestBodySecretTypeEnum | string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): CreateSecretRequestBodySecretTypeEnum | string | undefined {
        return this['secret_type'];
    }
    public withAutoRotation(autoRotation: boolean): CreateSecretRequestBody {
        this['auto_rotation'] = autoRotation;
        return this;
    }
    public set autoRotation(autoRotation: boolean  | undefined) {
        this['auto_rotation'] = autoRotation;
    }
    public get autoRotation(): boolean | undefined {
        return this['auto_rotation'];
    }
    public withRotationPeriod(rotationPeriod: string): CreateSecretRequestBody {
        this['rotation_period'] = rotationPeriod;
        return this;
    }
    public set rotationPeriod(rotationPeriod: string  | undefined) {
        this['rotation_period'] = rotationPeriod;
    }
    public get rotationPeriod(): string | undefined {
        return this['rotation_period'];
    }
    public withRotationConfig(rotationConfig: string): CreateSecretRequestBody {
        this['rotation_config'] = rotationConfig;
        return this;
    }
    public set rotationConfig(rotationConfig: string  | undefined) {
        this['rotation_config'] = rotationConfig;
    }
    public get rotationConfig(): string | undefined {
        return this['rotation_config'];
    }
    public withEventSubscriptions(eventSubscriptions: Array<string>): CreateSecretRequestBody {
        this['event_subscriptions'] = eventSubscriptions;
        return this;
    }
    public set eventSubscriptions(eventSubscriptions: Array<string>  | undefined) {
        this['event_subscriptions'] = eventSubscriptions;
    }
    public get eventSubscriptions(): Array<string> | undefined {
        return this['event_subscriptions'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSecretRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRotationFuncUrn(rotationFuncUrn: string): CreateSecretRequestBody {
        this['rotation_func_urn'] = rotationFuncUrn;
        return this;
    }
    public set rotationFuncUrn(rotationFuncUrn: string  | undefined) {
        this['rotation_func_urn'] = rotationFuncUrn;
    }
    public get rotationFuncUrn(): string | undefined {
        return this['rotation_func_urn'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSecretRequestBodySecretTypeEnum {
    COMMON = 'COMMON',
    RDS_FG = 'RDS-FG',
    GAUSSDB_FG = 'GaussDB-FG'
}
