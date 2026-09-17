

export class SecretConfig {
    public disableDefaultAddonCredSecret?: boolean;
    public disableNodeAgencyCredSecret?: boolean;
    public disableDefaultImagePullSecret?: boolean;
    public constructor() { 
    }
    public withDisableDefaultAddonCredSecret(disableDefaultAddonCredSecret: boolean): SecretConfig {
        this['disableDefaultAddonCredSecret'] = disableDefaultAddonCredSecret;
        return this;
    }
    public withDisableNodeAgencyCredSecret(disableNodeAgencyCredSecret: boolean): SecretConfig {
        this['disableNodeAgencyCredSecret'] = disableNodeAgencyCredSecret;
        return this;
    }
    public withDisableDefaultImagePullSecret(disableDefaultImagePullSecret: boolean): SecretConfig {
        this['disableDefaultImagePullSecret'] = disableDefaultImagePullSecret;
        return this;
    }
}