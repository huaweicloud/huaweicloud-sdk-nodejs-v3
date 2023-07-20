

export class ShowSha256Request {
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): ShowSha256Request {
        this['key'] = key;
        return this;
    }
}