

export class ShowRecordCallbackConfigRequest {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ShowRecordCallbackConfigRequest {
        this['id'] = id;
        return this;
    }
}