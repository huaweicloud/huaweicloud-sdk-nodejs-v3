

export class BatchDeleteBody {
    public name?: Array<string>;
    public constructor(name?: Array<string>) { 
        this['name'] = name;
    }
    public withName(name: Array<string>): BatchDeleteBody {
        this['name'] = name;
        return this;
    }
}