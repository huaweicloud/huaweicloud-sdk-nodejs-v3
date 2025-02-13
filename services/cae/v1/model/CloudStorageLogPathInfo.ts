

export class CloudStorageLogPathInfo {
    private 'dir_path'?: string;
    private 'file_name_pattern'?: string;
    public constructor() { 
    }
    public withDirPath(dirPath: string): CloudStorageLogPathInfo {
        this['dir_path'] = dirPath;
        return this;
    }
    public set dirPath(dirPath: string  | undefined) {
        this['dir_path'] = dirPath;
    }
    public get dirPath(): string | undefined {
        return this['dir_path'];
    }
    public withFileNamePattern(fileNamePattern: string): CloudStorageLogPathInfo {
        this['file_name_pattern'] = fileNamePattern;
        return this;
    }
    public set fileNamePattern(fileNamePattern: string  | undefined) {
        this['file_name_pattern'] = fileNamePattern;
    }
    public get fileNamePattern(): string | undefined {
        return this['file_name_pattern'];
    }
}