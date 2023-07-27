

export class MetadataInfos {
    public key?: string;
    public constructor() { 
    }
    public withKey(key: string): MetadataInfos {
        this['key'] = key;
        return this;
    }
}