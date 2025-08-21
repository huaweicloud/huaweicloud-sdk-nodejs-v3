

export class GpgKeyDto {
    private 'gpg_name'?: string;
    private 'open_gpg_verified'?: boolean;
    private 'verification_status'?: number;
    private 'gpg_primary_key_id'?: string;
    private 'gpg_nick_name'?: string;
    private 'gpg_tenant_name'?: string;
    private 'gpg_user_name'?: string;
    public constructor() { 
    }
    public withGpgName(gpgName: string): GpgKeyDto {
        this['gpg_name'] = gpgName;
        return this;
    }
    public set gpgName(gpgName: string  | undefined) {
        this['gpg_name'] = gpgName;
    }
    public get gpgName(): string | undefined {
        return this['gpg_name'];
    }
    public withOpenGpgVerified(openGpgVerified: boolean): GpgKeyDto {
        this['open_gpg_verified'] = openGpgVerified;
        return this;
    }
    public set openGpgVerified(openGpgVerified: boolean  | undefined) {
        this['open_gpg_verified'] = openGpgVerified;
    }
    public get openGpgVerified(): boolean | undefined {
        return this['open_gpg_verified'];
    }
    public withVerificationStatus(verificationStatus: number): GpgKeyDto {
        this['verification_status'] = verificationStatus;
        return this;
    }
    public set verificationStatus(verificationStatus: number  | undefined) {
        this['verification_status'] = verificationStatus;
    }
    public get verificationStatus(): number | undefined {
        return this['verification_status'];
    }
    public withGpgPrimaryKeyId(gpgPrimaryKeyId: string): GpgKeyDto {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
        return this;
    }
    public set gpgPrimaryKeyId(gpgPrimaryKeyId: string  | undefined) {
        this['gpg_primary_key_id'] = gpgPrimaryKeyId;
    }
    public get gpgPrimaryKeyId(): string | undefined {
        return this['gpg_primary_key_id'];
    }
    public withGpgNickName(gpgNickName: string): GpgKeyDto {
        this['gpg_nick_name'] = gpgNickName;
        return this;
    }
    public set gpgNickName(gpgNickName: string  | undefined) {
        this['gpg_nick_name'] = gpgNickName;
    }
    public get gpgNickName(): string | undefined {
        return this['gpg_nick_name'];
    }
    public withGpgTenantName(gpgTenantName: string): GpgKeyDto {
        this['gpg_tenant_name'] = gpgTenantName;
        return this;
    }
    public set gpgTenantName(gpgTenantName: string  | undefined) {
        this['gpg_tenant_name'] = gpgTenantName;
    }
    public get gpgTenantName(): string | undefined {
        return this['gpg_tenant_name'];
    }
    public withGpgUserName(gpgUserName: string): GpgKeyDto {
        this['gpg_user_name'] = gpgUserName;
        return this;
    }
    public set gpgUserName(gpgUserName: string  | undefined) {
        this['gpg_user_name'] = gpgUserName;
    }
    public get gpgUserName(): string | undefined {
        return this['gpg_user_name'];
    }
}