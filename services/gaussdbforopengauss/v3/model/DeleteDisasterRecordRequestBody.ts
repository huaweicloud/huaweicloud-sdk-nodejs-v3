

export class DeleteDisasterRecordRequestBody {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteDisasterRecordRequestBody {
        this['id'] = id;
        return this;
    }
}