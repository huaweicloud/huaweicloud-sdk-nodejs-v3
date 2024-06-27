

export class CaptureFile {
    private 'file_name'?: string;
    public url?: string;
    private 'file_path'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): CaptureFile {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withUrl(url: string): CaptureFile {
        this['url'] = url;
        return this;
    }
    public withFilePath(filePath: string): CaptureFile {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}