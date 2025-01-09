

export class DesktopUsedInfo {
    public date?: string;
    private 'use_time'?: string;
    public constructor() { 
    }
    public withDate(date: string): DesktopUsedInfo {
        this['date'] = date;
        return this;
    }
    public withUseTime(useTime: string): DesktopUsedInfo {
        this['use_time'] = useTime;
        return this;
    }
    public set useTime(useTime: string  | undefined) {
        this['use_time'] = useTime;
    }
    public get useTime(): string | undefined {
        return this['use_time'];
    }
}