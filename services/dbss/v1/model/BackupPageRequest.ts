

export class BackupPageRequest {
    private 'end_time'?: Date;
    public page?: number;
    public size?: number;
    private 'start_time'?: Date;
    public constructor(page?: number, size?: number) { 
        this['page'] = page;
        this['size'] = size;
    }
    public withEndTime(endTime: Date): BackupPageRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withPage(page: number): BackupPageRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): BackupPageRequest {
        this['size'] = size;
        return this;
    }
    public withStartTime(startTime: Date): BackupPageRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
}