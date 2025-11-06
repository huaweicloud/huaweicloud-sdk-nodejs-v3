

export class FilesResponseInfo {
    private 'file_name'?: string;
    private 'file_path'?: string;
    public size?: string;
    public encoding?: string;
    public ref?: string;
    private 'blob_id'?: string;
    private 'file_type'?: string;
    public content?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): FilesResponseInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): FilesResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withSize(size: string): FilesResponseInfo {
        this['size'] = size;
        return this;
    }
    public withEncoding(encoding: string): FilesResponseInfo {
        this['encoding'] = encoding;
        return this;
    }
    public withRef(ref: string): FilesResponseInfo {
        this['ref'] = ref;
        return this;
    }
    public withBlobId(blobId: string): FilesResponseInfo {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withFileType(fileType: string): FilesResponseInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withContent(content: string): FilesResponseInfo {
        this['content'] = content;
        return this;
    }
}