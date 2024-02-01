

export class ShowGlobalConnectionBandwidthRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowGlobalConnectionBandwidthRequest {
        this['id'] = id;
        return this;
    }
}