

export class DeleteSubscriptionUserRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteSubscriptionUserRequest {
        this['id'] = id;
        return this;
    }
}