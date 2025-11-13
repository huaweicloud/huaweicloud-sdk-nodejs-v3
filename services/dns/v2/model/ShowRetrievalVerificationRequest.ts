

export class ShowRetrievalVerificationRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowRetrievalVerificationRequest {
        this['id'] = id;
        return this;
    }
}