

export class FileEventResponseInfo {
    public id?: number;
    private 'file_name'?: string;
    private 'file_path'?: string;
    public status?: FileEventResponseInfoStatusEnum | string;
    private 'host_name'?: string;
    private 'change_type'?: FileEventResponseInfoChangeTypeEnum | string;
    private 'change_category'?: FileEventResponseInfoChangeCategoryEnum | string;
    private 'after_change'?: string;
    private 'before_change'?: string;
    private 'latest_time'?: number;
    public constructor() { 
    }
    public withId(id: number): FileEventResponseInfo {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): FileEventResponseInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): FileEventResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withStatus(status: FileEventResponseInfoStatusEnum | string): FileEventResponseInfo {
        this['status'] = status;
        return this;
    }
    public withHostName(hostName: string): FileEventResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withChangeType(changeType: FileEventResponseInfoChangeTypeEnum | string): FileEventResponseInfo {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: FileEventResponseInfoChangeTypeEnum | string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): FileEventResponseInfoChangeTypeEnum | string | undefined {
        return this['change_type'];
    }
    public withChangeCategory(changeCategory: FileEventResponseInfoChangeCategoryEnum | string): FileEventResponseInfo {
        this['change_category'] = changeCategory;
        return this;
    }
    public set changeCategory(changeCategory: FileEventResponseInfoChangeCategoryEnum | string  | undefined) {
        this['change_category'] = changeCategory;
    }
    public get changeCategory(): FileEventResponseInfoChangeCategoryEnum | string | undefined {
        return this['change_category'];
    }
    public withAfterChange(afterChange: string): FileEventResponseInfo {
        this['after_change'] = afterChange;
        return this;
    }
    public set afterChange(afterChange: string  | undefined) {
        this['after_change'] = afterChange;
    }
    public get afterChange(): string | undefined {
        return this['after_change'];
    }
    public withBeforeChange(beforeChange: string): FileEventResponseInfo {
        this['before_change'] = beforeChange;
        return this;
    }
    public set beforeChange(beforeChange: string  | undefined) {
        this['before_change'] = beforeChange;
    }
    public get beforeChange(): string | undefined {
        return this['before_change'];
    }
    public withLatestTime(latestTime: number): FileEventResponseInfo {
        this['latest_time'] = latestTime;
        return this;
    }
    public set latestTime(latestTime: number  | undefined) {
        this['latest_time'] = latestTime;
    }
    public get latestTime(): number | undefined {
        return this['latest_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FileEventResponseInfoStatusEnum {
    ALL = 'all',
    TRUST = 'trust',
    UNTRUST = 'untrust',
    UNKNOWN = 'unknown'
}
/**
    * @export
    * @enum {string}
    */
export enum FileEventResponseInfoChangeTypeEnum {
    ALL = 'all',
    REGISTRY = 'registry',
    FILE = 'file'
}
/**
    * @export
    * @enum {string}
    */
export enum FileEventResponseInfoChangeCategoryEnum {
    ALL = 'all',
    MODIFY = 'modify',
    ADD = 'add',
    DELETE = 'delete'
}
