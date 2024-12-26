

export class DeleteTtscVocabularyConfigsRequestBody {
    public id?: Array<string>;
    public constructor() { 
    }
    public withId(id: Array<string>): DeleteTtscVocabularyConfigsRequestBody {
        this['id'] = id;
        return this;
    }
}