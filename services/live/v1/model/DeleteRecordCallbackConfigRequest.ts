

export class DeleteRecordCallbackConfigRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteRecordCallbackConfigRequest {
        this['id'] = id;
        return this;
    }
}