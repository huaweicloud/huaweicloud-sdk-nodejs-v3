

export class FileInfo {
    private 'file_name'?: string;
    public size?: number;
    private 'content_type'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): FileInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withSize(size: number): FileInfo {
        this['size'] = size;
        return this;
    }
    public withContentType(contentType: string): FileInfo {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content_type'];
    }
}