

export class CinderAcceptVolumeTransferOption {
    private 'auth_key': string | undefined;
    public constructor(authKey?: any) { 
        this['auth_key'] = authKey;
    }
    public withAuthKey(authKey: string): CinderAcceptVolumeTransferOption {
        this['auth_key'] = authKey;
        return this;
    }
    public set authKey(authKey: string | undefined) {
        this['auth_key'] = authKey;
    }
    public get authKey() {
        return this['auth_key'];
    }
}