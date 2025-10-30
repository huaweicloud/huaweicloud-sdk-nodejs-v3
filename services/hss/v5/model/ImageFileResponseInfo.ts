

export class ImageFileResponseInfo {
    private 'file_name'?: string;
    private 'file_path'?: string;
    public size?: number;
    public constructor() { 
    }
    public withFileName(fileName: string): ImageFileResponseInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): ImageFileResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withSize(size: number): ImageFileResponseInfo {
        this['size'] = size;
        return this;
    }
}