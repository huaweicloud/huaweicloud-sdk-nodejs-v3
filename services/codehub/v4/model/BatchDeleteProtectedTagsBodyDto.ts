

export class BatchDeleteProtectedTagsBodyDto {
    public names?: Array<string>;
    public constructor() { 
    }
    public withNames(names: Array<string>): BatchDeleteProtectedTagsBodyDto {
        this['names'] = names;
        return this;
    }
}