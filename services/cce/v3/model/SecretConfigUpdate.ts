

export class SecretConfigUpdate {
    public disableDefaultAddonCredSecret?: boolean;
    public disableNodeAgencyCredSecret?: boolean;
    public disableDefaultImagePullSecret?: boolean;
    public constructor() { 
    }
    public withDisableDefaultAddonCredSecret(disableDefaultAddonCredSecret: boolean): SecretConfigUpdate {
        this['disableDefaultAddonCredSecret'] = disableDefaultAddonCredSecret;
        return this;
    }
    public withDisableNodeAgencyCredSecret(disableNodeAgencyCredSecret: boolean): SecretConfigUpdate {
        this['disableNodeAgencyCredSecret'] = disableNodeAgencyCredSecret;
        return this;
    }
    public withDisableDefaultImagePullSecret(disableDefaultImagePullSecret: boolean): SecretConfigUpdate {
        this['disableDefaultImagePullSecret'] = disableDefaultImagePullSecret;
        return this;
    }
}