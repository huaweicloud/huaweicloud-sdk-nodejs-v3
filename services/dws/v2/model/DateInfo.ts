

export class DateInfo {
    private 'date_type'?: string;
    private 'date_start'?: string;
    private 'date_end'?: string;
    public constructor() { 
    }
    public withDateType(dateType: string): DateInfo {
        this['date_type'] = dateType;
        return this;
    }
    public set dateType(dateType: string  | undefined) {
        this['date_type'] = dateType;
    }
    public get dateType(): string | undefined {
        return this['date_type'];
    }
    public withDateStart(dateStart: string): DateInfo {
        this['date_start'] = dateStart;
        return this;
    }
    public set dateStart(dateStart: string  | undefined) {
        this['date_start'] = dateStart;
    }
    public get dateStart(): string | undefined {
        return this['date_start'];
    }
    public withDateEnd(dateEnd: string): DateInfo {
        this['date_end'] = dateEnd;
        return this;
    }
    public set dateEnd(dateEnd: string  | undefined) {
        this['date_end'] = dateEnd;
    }
    public get dateEnd(): string | undefined {
        return this['date_end'];
    }
}