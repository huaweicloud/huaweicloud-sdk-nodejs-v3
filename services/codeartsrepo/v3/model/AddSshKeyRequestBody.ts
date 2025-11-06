

export class AddSshKeyRequestBody {
    public key?: string;
    public title?: string;
    public constructor(key?: string, title?: string) { 
        this['key'] = key;
        this['title'] = title;
    }
    public withKey(key: string): AddSshKeyRequestBody {
        this['key'] = key;
        return this;
    }
    public withTitle(title: string): AddSshKeyRequestBody {
        this['title'] = title;
        return this;
    }
}