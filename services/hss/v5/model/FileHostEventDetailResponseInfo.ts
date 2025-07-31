

export class FileHostEventDetailResponseInfo {
    public id?: number;
    private 'file_name'?: string;
    private 'file_path'?: string;
    public status?: FileHostEventDetailResponseInfoStatusEnum | string;
    private 'change_type'?: FileHostEventDetailResponseInfoChangeTypeEnum | string;
    private 'change_category'?: FileHostEventDetailResponseInfoChangeCategoryEnum | string;
    private 'after_change'?: string;
    private 'before_change'?: string;
    private 'latest_time'?: number;
    public constructor() { 
    }
    public withId(id: number): FileHostEventDetailResponseInfo {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): FileHostEventDetailResponseInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): FileHostEventDetailResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withStatus(status: FileHostEventDetailResponseInfoStatusEnum | string): FileHostEventDetailResponseInfo {
        this['status'] = status;
        return this;
    }
    public withChangeType(changeType: FileHostEventDetailResponseInfoChangeTypeEnum | string): FileHostEventDetailResponseInfo {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: FileHostEventDetailResponseInfoChangeTypeEnum | string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): FileHostEventDetailResponseInfoChangeTypeEnum | string | undefined {
        return this['change_type'];
    }
    public withChangeCategory(changeCategory: FileHostEventDetailResponseInfoChangeCategoryEnum | string): FileHostEventDetailResponseInfo {
        this['change_category'] = changeCategory;
        return this;
    }
    public set changeCategory(changeCategory: FileHostEventDetailResponseInfoChangeCategoryEnum | string  | undefined) {
        this['change_category'] = changeCategory;
    }
    public get changeCategory(): FileHostEventDetailResponseInfoChangeCategoryEnum | string | undefined {
        return this['change_category'];
    }
    public withAfterChange(afterChange: string): FileHostEventDetailResponseInfo {
        this['after_change'] = afterChange;
        return this;
    }
    public set afterChange(afterChange: string  | undefined) {
        this['after_change'] = afterChange;
    }
    public get afterChange(): string | undefined {
        return this['after_change'];
    }
    public withBeforeChange(beforeChange: string): FileHostEventDetailResponseInfo {
        this['before_change'] = beforeChange;
        return this;
    }
    public set beforeChange(beforeChange: string  | undefined) {
        this['before_change'] = beforeChange;
    }
    public get beforeChange(): string | undefined {
        return this['before_change'];
    }
    public withLatestTime(latestTime: number): FileHostEventDetailResponseInfo {
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
export enum FileHostEventDetailResponseInfoStatusEnum {
    ALL = 'all',
    TRUST = 'trust',
    UNTRUST = 'untrust',
    UNKNOWN = 'unknown'
}
/**
    * @export
    * @enum {string}
    */
export enum FileHostEventDetailResponseInfoChangeTypeEnum {
    ALL = 'all',
    REGISTRY = 'registry',
    FILE = 'file'
}
/**
    * @export
    * @enum {string}
    */
export enum FileHostEventDetailResponseInfoChangeCategoryEnum {
    ALL = 'all',
    MODIFY = 'modify',
    ADD = 'add',
    DELETE = 'delete'
}
