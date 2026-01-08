

export class IdpMetadataInfo {
    public id?: string;
    private 'file_name'?: string;
    public content?: string;
    private 'content_length'?: number;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withId(id: string): IdpMetadataInfo {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): IdpMetadataInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withContent(content: string): IdpMetadataInfo {
        this['content'] = content;
        return this;
    }
    public withContentLength(contentLength: number): IdpMetadataInfo {
        this['content_length'] = contentLength;
        return this;
    }
    public set contentLength(contentLength: number  | undefined) {
        this['content_length'] = contentLength;
    }
    public get contentLength(): number | undefined {
        return this['content_length'];
    }
    public withCreateTime(createTime: number): IdpMetadataInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): IdpMetadataInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}