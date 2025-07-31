

export class SecurityCheckTaskCondition {
    public type?: string;
    private 'day_of_week'?: Array<string>;
    public hour?: number;
    public minute?: number;
    private 'random_offset'?: number;
    public constructor() { 
    }
    public withType(type: string): SecurityCheckTaskCondition {
        this['type'] = type;
        return this;
    }
    public withDayOfWeek(dayOfWeek: Array<string>): SecurityCheckTaskCondition {
        this['day_of_week'] = dayOfWeek;
        return this;
    }
    public set dayOfWeek(dayOfWeek: Array<string>  | undefined) {
        this['day_of_week'] = dayOfWeek;
    }
    public get dayOfWeek(): Array<string> | undefined {
        return this['day_of_week'];
    }
    public withHour(hour: number): SecurityCheckTaskCondition {
        this['hour'] = hour;
        return this;
    }
    public withMinute(minute: number): SecurityCheckTaskCondition {
        this['minute'] = minute;
        return this;
    }
    public withRandomOffset(randomOffset: number): SecurityCheckTaskCondition {
        this['random_offset'] = randomOffset;
        return this;
    }
    public set randomOffset(randomOffset: number  | undefined) {
        this['random_offset'] = randomOffset;
    }
    public get randomOffset(): number | undefined {
        return this['random_offset'];
    }
}