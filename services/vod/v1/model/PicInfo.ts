

export class PicInfo {
    private 'object_key'?: string;
    public constructor() { 
    }
    public withObjectKey(objectKey: string): PicInfo {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: string  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): string | undefined {
        return this['object_key'];
    }
}