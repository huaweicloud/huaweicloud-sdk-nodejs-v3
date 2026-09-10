

export class TaskLogFile {
    private 'file_name'?: string;
    private 'file_type'?: TaskLogFileFileTypeEnum | string;
    private 'file_size'?: number;
    private 'display_name'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): TaskLogFile {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: TaskLogFileFileTypeEnum | string): TaskLogFile {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: TaskLogFileFileTypeEnum | string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): TaskLogFileFileTypeEnum | string | undefined {
        return this['file_type'];
    }
    public withFileSize(fileSize: number): TaskLogFile {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withDisplayName(displayName: string): TaskLogFile {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskLogFileFileTypeEnum {
    DIRECTORY = 'DIRECTORY',
    FILE = 'FILE'
}
