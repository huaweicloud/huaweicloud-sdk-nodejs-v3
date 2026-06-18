
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectTenantSettingsResponse extends SdkResponse {
    private 'default_encryption_enabled'?: boolean;
    private 'encryption_type'?: string;
    private 'permit_public'?: string;
    public constructor() { 
        super();
    }
    public withDefaultEncryptionEnabled(defaultEncryptionEnabled: boolean): ShowProjectTenantSettingsResponse {
        this['default_encryption_enabled'] = defaultEncryptionEnabled;
        return this;
    }
    public set defaultEncryptionEnabled(defaultEncryptionEnabled: boolean  | undefined) {
        this['default_encryption_enabled'] = defaultEncryptionEnabled;
    }
    public get defaultEncryptionEnabled(): boolean | undefined {
        return this['default_encryption_enabled'];
    }
    public withEncryptionType(encryptionType: string): ShowProjectTenantSettingsResponse {
        this['encryption_type'] = encryptionType;
        return this;
    }
    public set encryptionType(encryptionType: string  | undefined) {
        this['encryption_type'] = encryptionType;
    }
    public get encryptionType(): string | undefined {
        return this['encryption_type'];
    }
    public withPermitPublic(permitPublic: string): ShowProjectTenantSettingsResponse {
        this['permit_public'] = permitPublic;
        return this;
    }
    public set permitPublic(permitPublic: string  | undefined) {
        this['permit_public'] = permitPublic;
    }
    public get permitPublic(): string | undefined {
        return this['permit_public'];
    }
}