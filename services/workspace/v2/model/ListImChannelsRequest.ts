

export class ListImChannelsRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ListImChannelsRequest {
        this['id'] = id;
        return this;
    }
}