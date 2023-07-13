

export class ShowVocabulariesParams {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowVocabulariesParams {
        this['name'] = name;
        return this;
    }
}