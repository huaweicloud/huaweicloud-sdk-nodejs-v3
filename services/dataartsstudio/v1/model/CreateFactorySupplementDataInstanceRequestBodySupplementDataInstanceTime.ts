

export class CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime {
    public days?: Array<string>;
    private 'time_of_day'?: string;
    public constructor() { 
    }
    public withDays(days: Array<string>): CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime {
        this['days'] = days;
        return this;
    }
    public withTimeOfDay(timeOfDay: string): CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime {
        this['time_of_day'] = timeOfDay;
        return this;
    }
    public set timeOfDay(timeOfDay: string  | undefined) {
        this['time_of_day'] = timeOfDay;
    }
    public get timeOfDay(): string | undefined {
        return this['time_of_day'];
    }
}