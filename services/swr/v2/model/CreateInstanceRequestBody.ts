import { CreateInstanceRequestBodyResourceTags } from './CreateInstanceRequestBodyResourceTags';


export class CreateInstanceRequestBody {
    public name?: string;
    public description?: string;
    public spec?: CreateInstanceRequestBodySpecEnum | string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'project_id'?: string;
    private 'charge_mode'?: CreateInstanceRequestBodyChargeModeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'resource_tags'?: Array<CreateInstanceRequestBodyResourceTags>;
    private 'obs_encrypt'?: boolean;
    private 'encrypt_type'?: CreateInstanceRequestBodyEncryptTypeEnum | string;
    private 'obs_bucket_name'?: string;
    private 'obs_enc_kms_key_id'?: string;
    public constructor(name?: string, spec?: string, vpcId?: string, subnetId?: string, projectId?: string, chargeMode?: string, enterpriseProjectId?: string) { 
        this['name'] = name;
        this['spec'] = spec;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['project_id'] = projectId;
        this['charge_mode'] = chargeMode;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withName(name: string): CreateInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateInstanceRequestBody {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: CreateInstanceRequestBodySpecEnum | string): CreateInstanceRequestBody {
        this['spec'] = spec;
        return this;
    }
    public withVpcId(vpcId: string): CreateInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withProjectId(projectId: string): CreateInstanceRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withChargeMode(chargeMode: CreateInstanceRequestBodyChargeModeEnum | string): CreateInstanceRequestBody {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateInstanceRequestBodyChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateInstanceRequestBodyChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResourceTags(resourceTags: Array<CreateInstanceRequestBodyResourceTags>): CreateInstanceRequestBody {
        this['resource_tags'] = resourceTags;
        return this;
    }
    public set resourceTags(resourceTags: Array<CreateInstanceRequestBodyResourceTags>  | undefined) {
        this['resource_tags'] = resourceTags;
    }
    public get resourceTags(): Array<CreateInstanceRequestBodyResourceTags> | undefined {
        return this['resource_tags'];
    }
    public withObsEncrypt(obsEncrypt: boolean): CreateInstanceRequestBody {
        this['obs_encrypt'] = obsEncrypt;
        return this;
    }
    public set obsEncrypt(obsEncrypt: boolean  | undefined) {
        this['obs_encrypt'] = obsEncrypt;
    }
    public get obsEncrypt(): boolean | undefined {
        return this['obs_encrypt'];
    }
    public withEncryptType(encryptType: CreateInstanceRequestBodyEncryptTypeEnum | string): CreateInstanceRequestBody {
        this['encrypt_type'] = encryptType;
        return this;
    }
    public set encryptType(encryptType: CreateInstanceRequestBodyEncryptTypeEnum | string  | undefined) {
        this['encrypt_type'] = encryptType;
    }
    public get encryptType(): CreateInstanceRequestBodyEncryptTypeEnum | string | undefined {
        return this['encrypt_type'];
    }
    public withObsBucketName(obsBucketName: string): CreateInstanceRequestBody {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsEncKmsKeyId(obsEncKmsKeyId: string): CreateInstanceRequestBody {
        this['obs_enc_kms_key_id'] = obsEncKmsKeyId;
        return this;
    }
    public set obsEncKmsKeyId(obsEncKmsKeyId: string  | undefined) {
        this['obs_enc_kms_key_id'] = obsEncKmsKeyId;
    }
    public get obsEncKmsKeyId(): string | undefined {
        return this['obs_enc_kms_key_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceRequestBodySpecEnum {
    SWR_EE_BASIC = 'swr.ee.basic',
    SWR_EE_PROFESSIONAL = 'swr.ee.professional'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceRequestBodyChargeModeEnum {
    POSTPAID = 'postPaid'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceRequestBodyEncryptTypeEnum {
    GM = 'gm'
}
