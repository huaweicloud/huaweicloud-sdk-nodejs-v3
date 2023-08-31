

export class ResourceDeleteTag {
    public key?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceDeleteTag {
        this['key'] = key;
        return this;
    }
}