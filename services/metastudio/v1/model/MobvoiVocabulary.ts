

export class MobvoiVocabulary {
    public content?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withContent(content: string): MobvoiVocabulary {
        this['content'] = content;
        return this;
    }
}