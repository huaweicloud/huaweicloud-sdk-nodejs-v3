

export class SlowLogArchiveDto {
    public id?: number;
    private 'file_name'?: string;
    private 'log_start_time'?: number;
    private 'log_end_time'?: number;
    private 'file_size'?: number;
    public constructor() { 
    }
    public withId(id: number): SlowLogArchiveDto {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): SlowLogArchiveDto {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLogStartTime(logStartTime: number): SlowLogArchiveDto {
        this['log_start_time'] = logStartTime;
        return this;
    }
    public set logStartTime(logStartTime: number  | undefined) {
        this['log_start_time'] = logStartTime;
    }
    public get logStartTime(): number | undefined {
        return this['log_start_time'];
    }
    public withLogEndTime(logEndTime: number): SlowLogArchiveDto {
        this['log_end_time'] = logEndTime;
        return this;
    }
    public set logEndTime(logEndTime: number  | undefined) {
        this['log_end_time'] = logEndTime;
    }
    public get logEndTime(): number | undefined {
        return this['log_end_time'];
    }
    public withFileSize(fileSize: number): SlowLogArchiveDto {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
}