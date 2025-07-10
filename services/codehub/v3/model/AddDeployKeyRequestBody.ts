

export class AddDeployKeyRequestBody {
    public application?: string;
    private 'can_push'?: boolean;
    public key?: string;
    private 'key_title'?: string;
    public constructor(application?: string, canPush?: boolean, key?: string, keyTitle?: string) { 
        this['application'] = application;
        this['can_push'] = canPush;
        this['key'] = key;
        this['key_title'] = keyTitle;
    }
    public withApplication(application: string): AddDeployKeyRequestBody {
        this['application'] = application;
        return this;
    }
    public withCanPush(canPush: boolean): AddDeployKeyRequestBody {
        this['can_push'] = canPush;
        return this;
    }
    public set canPush(canPush: boolean  | undefined) {
        this['can_push'] = canPush;
    }
    public get canPush(): boolean | undefined {
        return this['can_push'];
    }
    public withKey(key: string): AddDeployKeyRequestBody {
        this['key'] = key;
        return this;
    }
    public withKeyTitle(keyTitle: string): AddDeployKeyRequestBody {
        this['key_title'] = keyTitle;
        return this;
    }
    public set keyTitle(keyTitle: string  | undefined) {
        this['key_title'] = keyTitle;
    }
    public get keyTitle(): string | undefined {
        return this['key_title'];
    }
}