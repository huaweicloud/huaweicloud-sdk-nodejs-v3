

export class DeleteStructTemplateReqBody {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteStructTemplateReqBody {
        this['id'] = id;
        return this;
    }
}