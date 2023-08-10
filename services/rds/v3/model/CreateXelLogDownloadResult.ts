

export class CreateXelLogDownloadResult {
    private 'file_name'?: string;
    public status?: string;
    private 'file_size'?: string;
    private 'file_link'?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public constructor(fileName?: string, status?: string, fileSize?: string, fileLink?: string, createAt?: string, updateAt?: string) { 
        this['file_name'] = fileName;
        this['status'] = status;
        this['file_size'] = fileSize;
        this['file_link'] = fileLink;
        this['create_at'] = createAt;
        this['update_at'] = updateAt;
    }
    public withFileName(fileName: string): CreateXelLogDownloadResult {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStatus(status: string): CreateXelLogDownloadResult {
        this['status'] = status;
        return this;
    }
    public withFileSize(fileSize: string): CreateXelLogDownloadResult {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLink(fileLink: string): CreateXelLogDownloadResult {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
    public withCreateAt(createAt: string): CreateXelLogDownloadResult {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): CreateXelLogDownloadResult {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
}