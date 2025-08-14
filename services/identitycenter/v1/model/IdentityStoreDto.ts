

export class IdentityStoreDto {
    private 'identity_store_id'?: string;
    private 'identity_store_type'?: IdentityStoreDtoIdentityStoreTypeEnum | string;
    private 'authentication_type'?: IdentityStoreDtoAuthenticationTypeEnum | string;
    private 'provisioning_type'?: Array<IdentityStoreDtoProvisioningTypeEnum> | Array<string>;
    public status?: IdentityStoreDtoStatusEnum | string;
    public constructor(identityStoreId?: string, identityStoreType?: string, authenticationType?: string, provisioningType?: Array<string>, status?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['identity_store_type'] = identityStoreType;
        this['authentication_type'] = authenticationType;
        this['provisioning_type'] = provisioningType;
        this['status'] = status;
    }
    public withIdentityStoreId(identityStoreId: string): IdentityStoreDto {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withIdentityStoreType(identityStoreType: IdentityStoreDtoIdentityStoreTypeEnum | string): IdentityStoreDto {
        this['identity_store_type'] = identityStoreType;
        return this;
    }
    public set identityStoreType(identityStoreType: IdentityStoreDtoIdentityStoreTypeEnum | string  | undefined) {
        this['identity_store_type'] = identityStoreType;
    }
    public get identityStoreType(): IdentityStoreDtoIdentityStoreTypeEnum | string | undefined {
        return this['identity_store_type'];
    }
    public withAuthenticationType(authenticationType: IdentityStoreDtoAuthenticationTypeEnum | string): IdentityStoreDto {
        this['authentication_type'] = authenticationType;
        return this;
    }
    public set authenticationType(authenticationType: IdentityStoreDtoAuthenticationTypeEnum | string  | undefined) {
        this['authentication_type'] = authenticationType;
    }
    public get authenticationType(): IdentityStoreDtoAuthenticationTypeEnum | string | undefined {
        return this['authentication_type'];
    }
    public withProvisioningType(provisioningType: Array<IdentityStoreDtoProvisioningTypeEnum> | Array<string>): IdentityStoreDto {
        this['provisioning_type'] = provisioningType;
        return this;
    }
    public set provisioningType(provisioningType: Array<IdentityStoreDtoProvisioningTypeEnum> | Array<string>  | undefined) {
        this['provisioning_type'] = provisioningType;
    }
    public get provisioningType(): Array<IdentityStoreDtoProvisioningTypeEnum> | Array<string> | undefined {
        return this['provisioning_type'];
    }
    public withStatus(status: IdentityStoreDtoStatusEnum | string): IdentityStoreDto {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IdentityStoreDtoIdentityStoreTypeEnum {
    USERPOOL = 'UserPool'
}
/**
    * @export
    * @enum {string}
    */
export enum IdentityStoreDtoAuthenticationTypeEnum {
    SAML_2_0 = 'SAML_2.0',
    DEFAULT = 'DEFAULT'
}
/**
    * @export
    * @enum {string}
    */
export enum IdentityStoreDtoProvisioningTypeEnum {
    DEFAULT = 'DEFAULT',
    SCIM = 'SCIM'
}
/**
    * @export
    * @enum {string}
    */
export enum IdentityStoreDtoStatusEnum {
    DISABLED = 'DISABLED',
    ENABLED = 'ENABLED'
}
