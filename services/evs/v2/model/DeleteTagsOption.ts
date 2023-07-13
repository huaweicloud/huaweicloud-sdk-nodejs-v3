

export class DeleteTagsOption {
    public key: string;
    public constructor(key?: any) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteTagsOption {
        this['key'] = key;
        return this;
    }
}