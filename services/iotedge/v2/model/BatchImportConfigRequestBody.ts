

export class BatchImportConfigRequestBody {
    public id?: string;
    public name?: string;
    public value?: string;
    public description?: string;
    public constructor(id?: string, name?: string, value?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['value'] = value;
    }
    public withId(id: string): BatchImportConfigRequestBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchImportConfigRequestBody {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): BatchImportConfigRequestBody {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): BatchImportConfigRequestBody {
        this['description'] = description;
        return this;
    }
}