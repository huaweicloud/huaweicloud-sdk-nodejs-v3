

export class ReportEventBody {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): ReportEventBody {
        this['type'] = type;
        return this;
    }
}