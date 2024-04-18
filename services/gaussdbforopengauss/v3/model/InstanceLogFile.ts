

export class InstanceLogFile {
    public status?: string;
    private 'file_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'file_size'?: string;
    private 'file_link'?: string;
    public constructor() { 
    }
    public withStatus(status: string): InstanceLogFile {
        this['status'] = status;
        return this;
    }
    public withFileName(fileName: string): InstanceLogFile {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStartTime(startTime: string): InstanceLogFile {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): InstanceLogFile {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withFileSize(fileSize: string): InstanceLogFile {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLink(fileLink: string): InstanceLogFile {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
}