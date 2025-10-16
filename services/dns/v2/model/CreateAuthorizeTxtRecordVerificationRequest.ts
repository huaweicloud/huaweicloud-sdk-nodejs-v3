

export class CreateAuthorizeTxtRecordVerificationRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): CreateAuthorizeTxtRecordVerificationRequest {
        this['id'] = id;
        return this;
    }
}