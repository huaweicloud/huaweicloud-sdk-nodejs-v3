

export class DeletingResourceTag {
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): DeletingResourceTag {
        this['key'] = key;
        return this;
    }
}