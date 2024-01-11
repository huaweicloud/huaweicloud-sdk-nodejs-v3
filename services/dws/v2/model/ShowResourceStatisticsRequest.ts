

export class ShowResourceStatisticsRequest {
    public namespace?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): ShowResourceStatisticsRequest {
        this['namespace'] = namespace;
        return this;
    }
}