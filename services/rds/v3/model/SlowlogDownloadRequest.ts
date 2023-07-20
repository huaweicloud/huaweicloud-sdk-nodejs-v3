

export class SlowlogDownloadRequest {
    private 'file_name'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): SlowlogDownloadRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}