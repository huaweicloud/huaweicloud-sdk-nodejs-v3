

export class ListTemplatesRequest {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): ListTemplatesRequest {
        this['type'] = type;
        return this;
    }
}