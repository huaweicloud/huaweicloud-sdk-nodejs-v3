

export class HotInfo {
    public title?: string;
    private 'update_time'?: number;
    private 'severity_level'?: string;
    public constructor() { 
    }
    public withTitle(title: string): HotInfo {
        this['title'] = title;
        return this;
    }
    public withUpdateTime(updateTime: number): HotInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withSeverityLevel(severityLevel: string): HotInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
}