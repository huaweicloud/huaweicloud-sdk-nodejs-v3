

export class DeleteTagsOption {
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteTagsOption {
        this['key'] = key;
        return this;
    }
}