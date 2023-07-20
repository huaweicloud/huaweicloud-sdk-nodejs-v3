

export class DeleteWebHookConfigRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteWebHookConfigRequest {
        this['id'] = id;
        return this;
    }
}