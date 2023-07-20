

export class UpdateWebHookConfigStatusRequest {
    public id?: string;
    public status?: number;
    public constructor(id?: string, status?: number) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): UpdateWebHookConfigStatusRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): UpdateWebHookConfigStatusRequest {
        this['status'] = status;
        return this;
    }
}