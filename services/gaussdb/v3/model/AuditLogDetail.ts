

export class AuditLogDetail {
    public id?: string;
    public name?: string;
    public size?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withId(id: string): AuditLogDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AuditLogDetail {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): AuditLogDetail {
        this['size'] = size;
        return this;
    }
    public withBeginTime(beginTime: string): AuditLogDetail {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): AuditLogDetail {
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