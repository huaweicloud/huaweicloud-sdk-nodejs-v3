

export class ExceptionalDates {
    private 'valid_dates'?: Array<string>;
    private 'invalid_dates'?: Array<string>;
    public constructor() { 
    }
    public withValidDates(validDates: Array<string>): ExceptionalDates {
        this['valid_dates'] = validDates;
        return this;
    }
    public set validDates(validDates: Array<string>  | undefined) {
        this['valid_dates'] = validDates;
    }
    public get validDates(): Array<string> | undefined {
        return this['valid_dates'];
    }
    public withInvalidDates(invalidDates: Array<string>): ExceptionalDates {
        this['invalid_dates'] = invalidDates;
        return this;
    }
    public set invalidDates(invalidDates: Array<string>  | undefined) {
        this['invalid_dates'] = invalidDates;
    }
    public get invalidDates(): Array<string> | undefined {
        return this['invalid_dates'];
    }
}