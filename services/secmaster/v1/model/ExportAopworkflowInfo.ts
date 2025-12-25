

export class ExportAopworkflowInfo {
    public id?: Array<string>;
    public constructor(id?: Array<string>) { 
        this['id'] = id;
    }
    public withId(id: Array<string>): ExportAopworkflowInfo {
        this['id'] = id;
        return this;
    }
}