

export class ScheduledEventAcceptBody {
    private 'not_before'?: string;
    public constructor() { 
    }
    public withNotBefore(notBefore: string): ScheduledEventAcceptBody {
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