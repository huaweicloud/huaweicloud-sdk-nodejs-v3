

export class DeleteBinlogMergeRequestBody {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteBinlogMergeRequestBody {
        this['id'] = id;
        return this;
    }
}