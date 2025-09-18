

export class SecurityOptions {
    private 'secure_boot_enabled'?: boolean;
    private 'tpm_enabled'?: boolean;
    public constructor(secureBootEnabled?: boolean, tpmEnabled?: boolean) { 
        this['secure_boot_enabled'] = secureBootEnabled;
        this['tpm_enabled'] = tpmEnabled;
    }
    public withSecureBootEnabled(secureBootEnabled: boolean): SecurityOptions {
        this['secure_boot_enabled'] = secureBootEnabled;
        return this;
    }
    public set secureBootEnabled(secureBootEnabled: boolean  | undefined) {
        this['secure_boot_enabled'] = secureBootEnabled;
    }
    public get secureBootEnabled(): boolean | undefined {
        return this['secure_boot_enabled'];
    }
    public withTpmEnabled(tpmEnabled: boolean): SecurityOptions {
        this['tpm_enabled'] = tpmEnabled;
        return this;
    }
    public set tpmEnabled(tpmEnabled: boolean  | undefined) {
        this['tpm_enabled'] = tpmEnabled;
    }
    public get tpmEnabled(): boolean | undefined {
        return this['tpm_enabled'];
    }
}