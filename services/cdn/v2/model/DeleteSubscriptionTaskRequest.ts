

export class DeleteSubscriptionTaskRequest {
    public id?: number;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): DeleteSubscriptionTaskRequest {
        this['id'] = id;
        return this;
    }
}