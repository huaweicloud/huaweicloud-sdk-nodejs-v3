

export class DdlLogInfo {
    public id?: string;
    private 'file_name'?: string;
    private 'file_size'?: number;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    public constructor(id?: string, fileName?: string, fileSize?: number, createTime?: string, endTime?: string, status?: string) { 
        this['id'] = id;
        this['file_name'] = fileName;
        this['file_size'] = fileSize;
        this['create_time'] = createTime;
        this['end_time'] = endTime;
        this['status'] = status;
    }
    public withId(id: string): DdlLogInfo {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): DdlLogInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSize(fileSize: number): DdlLogInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withCreateTime(createTime: string): DdlLogInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): DdlLogInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): DdlLogInfo {
        this['status'] = status;
        return this;
    }
}