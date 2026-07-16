

export class EventUpdate {
    public notBefore?: string;
    public constructor() { 
    }
    public withNotBefore(notBefore: string): EventUpdate {
        this['notBefore'] = notBefore;
        return this;
    }
}