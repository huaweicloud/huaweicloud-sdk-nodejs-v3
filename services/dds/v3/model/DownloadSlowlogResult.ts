

export class DownloadSlowlogResult {
    private 'node_name'?: string;
    private 'file_name'?: string;
    public status?: string;
    private 'file_size'?: string;
    private 'file_link'?: string;
    private 'update_at'?: number;
    public constructor(nodeName?: string, fileName?: string, status?: string, fileSize?: string, fileLink?: string, updateAt?: number) { 
        this['node_name'] = nodeName;
        this['file_name'] = fileName;
        this['status'] = status;
        this['file_size'] = fileSize;
        this['file_link'] = fileLink;
        this['update_at'] = updateAt;
    }
    public withNodeName(nodeName: string): DownloadSlowlogResult {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withFileName(fileName: string): DownloadSlowlogResult {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStatus(status: string): DownloadSlowlogResult {
        this['status'] = status;
        return this;
    }
    public withFileSize(fileSize: string): DownloadSlowlogResult {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLink(fileLink: string): DownloadSlowlogResult {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
    public withUpdateAt(updateAt: number): DownloadSlowlogResult {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}