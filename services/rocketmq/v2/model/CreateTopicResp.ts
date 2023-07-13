

export class CreateTopicResp {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): CreateTopicResp {
        this['id'] = id;
        return this;
    }
}