

export class ExportPlaybook {
    public id?: Array<string>;
    public constructor() { 
    }
    public withId(id: Array<string>): ExportPlaybook {
        this['id'] = id;
        return this;
    }
}