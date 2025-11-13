

export class ShowRetrievalRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ShowRetrievalRequest {
        this['name'] = name;
        return this;
    }
}