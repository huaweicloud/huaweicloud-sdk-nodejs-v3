

export class AiguardCustomAnswersUpdateBody {
    public name?: string;
    public description?: string;
    public answers?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): AiguardCustomAnswersUpdateBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiguardCustomAnswersUpdateBody {
        this['description'] = description;
        return this;
    }
    public withAnswers(answers: Array<string>): AiguardCustomAnswersUpdateBody {
        this['answers'] = answers;
        return this;
    }
}