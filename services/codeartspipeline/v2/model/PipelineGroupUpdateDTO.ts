

export class PipelineGroupUpdateDTO {
    public name?: string;
    public id?: string;
    public constructor(name?: string, id?: string) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): PipelineGroupUpdateDTO {
        this['name'] = name;
        return this;
    }
    public withId(id: string): PipelineGroupUpdateDTO {
        this['id'] = id;
        return this;
    }
}