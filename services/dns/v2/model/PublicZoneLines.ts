

export class PublicZoneLines {
    public line?: string;
    private 'line_name'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withLine(line: string): PublicZoneLines {
        this['line'] = line;
        return this;
    }
    public withLineName(lineName: string): PublicZoneLines {
        this['line_name'] = lineName;
        return this;
    }
    public set lineName(lineName: string  | undefined) {
        this['line_name'] = lineName;
    }
    public get lineName(): string | undefined {
        return this['line_name'];
    }
    public withCreateTime(createTime: string): PublicZoneLines {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}