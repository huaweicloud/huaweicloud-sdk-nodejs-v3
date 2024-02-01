

export class DeleteGlobalConnectionBandwidthRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteGlobalConnectionBandwidthRequest {
        this['id'] = id;
        return this;
    }
}