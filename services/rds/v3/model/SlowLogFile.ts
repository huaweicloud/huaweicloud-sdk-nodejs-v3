

export class SlowLogFile {
    private 'file_name'?: string;
    private 'file_size'?: string;
    public constructor(fileName?: string, fileSize?: string) { 
        this['file_name'] = fileName;
        this['file_size'] = fileSize;
    }
    public withFileName(fileName: string): SlowLogFile {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSize(fileSize: string): SlowLogFile {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
}