

export class ObsObjectInfo {
    private 'object_key'?: string;
    private 'content_length'?: number;
    public constructor() { 
    }
    public withObjectKey(objectKey: string): ObsObjectInfo {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: string  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): string | undefined {
        return this['object_key'];
    }
    public withContentLength(contentLength: number): ObsObjectInfo {
        this['content_length'] = contentLength;
        return this;
    }
    public set contentLength(contentLength: number  | undefined) {
        this['content_length'] = contentLength;
    }
    public get contentLength(): number | undefined {
        return this['content_length'];
    }
}