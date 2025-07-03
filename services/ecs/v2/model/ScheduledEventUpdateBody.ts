

export class ScheduledEventUpdateBody {
    private 'not_before'?: string;
    public constructor(notBefore?: string) { 
        this['not_before'] = notBefore;
    }
    public withNotBefore(notBefore: string): ScheduledEventUpdateBody {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
}