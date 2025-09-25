

export class SqlTypeRangeConfigResult {
    private 'is_open'?: boolean;
    private 'begin_time'?: string;
    public constructor() { 
    }
    public withIsOpen(isOpen: boolean): SqlTypeRangeConfigResult {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean  | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen(): boolean | undefined {
        return this['is_open'];
    }
    public withBeginTime(beginTime: string): SqlTypeRangeConfigResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
}