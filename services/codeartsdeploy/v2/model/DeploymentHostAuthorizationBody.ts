

export class DeploymentHostAuthorizationBody {
    public username?: string;
    public password?: string;
    private 'private_key'?: string;
    private 'trusted_type'?: DeploymentHostAuthorizationBodyTrustedTypeEnum | number;
    public constructor(username?: string, trustedType?: number) { 
        this['username'] = username;
        this['trusted_type'] = trustedType;
    }
    public withUsername(username: string): DeploymentHostAuthorizationBody {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): DeploymentHostAuthorizationBody {
        this['password'] = password;
        return this;
    }
    public withPrivateKey(privateKey: string): DeploymentHostAuthorizationBody {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withTrustedType(trustedType: DeploymentHostAuthorizationBodyTrustedTypeEnum | number): DeploymentHostAuthorizationBody {
        this['trusted_type'] = trustedType;
        return this;
    }
    public set trustedType(trustedType: DeploymentHostAuthorizationBodyTrustedTypeEnum | number  | undefined) {
        this['trusted_type'] = trustedType;
    }
    public get trustedType(): DeploymentHostAuthorizationBodyTrustedTypeEnum | number | undefined {
        return this['trusted_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentHostAuthorizationBodyTrustedTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
