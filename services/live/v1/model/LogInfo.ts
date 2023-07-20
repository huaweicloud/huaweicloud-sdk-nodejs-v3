

export class LogInfo {
    public name?: string;
    public url?: string;
    public size?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(name?: string, url?: string, size?: number, startTime?: string, endTime?: string) { 
        this['name'] = name;
        this['url'] = url;
        this['size'] = size;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withName(name: string): LogInfo {
        this['name'] = name;
        return this;
    }
    public withUrl(url: string): LogInfo {
        this['url'] = url;
        return this;
    }
    public withSize(size: number): LogInfo {
        this['size'] = size;
        return this;
    }
    public withStartTime(startTime: string): LogInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): LogInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}