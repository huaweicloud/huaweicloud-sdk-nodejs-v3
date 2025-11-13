

export class CreateRetrievalVerificationRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): CreateRetrievalVerificationRequest {
        this['id'] = id;
        return this;
    }
}