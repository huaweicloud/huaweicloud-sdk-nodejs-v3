

export class HostAuthorizationBody {
    public username?: string;
    public password?: string;
    private 'private_key'?: string;
    private 'trusted_type'?: HostAuthorizationBodyTrustedTypeEnum | number;
    public constructor(username?: string, trustedType?: number) { 
        this['username'] = username;
        this['trusted_type'] = trustedType;
    }
    public withUsername(username: string): HostAuthorizationBody {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): HostAuthorizationBody {
        this['password'] = password;
        return this;
    }
    public withPrivateKey(privateKey: string): HostAuthorizationBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withTrustedType(trustedType: HostAuthorizationBodyTrustedTypeEnum | number): HostAuthorizationBody {
        this['trusted_type'] = trustedType;
        return this;
    }
    public set trustedType(trustedType: HostAuthorizationBodyTrustedTypeEnum | number  | undefined) {
        this['trusted_type'] = trustedType;
    }
    public get trustedType(): HostAuthorizationBodyTrustedTypeEnum | number | undefined {
        return this['trusted_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HostAuthorizationBodyTrustedTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
