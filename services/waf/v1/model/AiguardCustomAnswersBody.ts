

export class AiguardCustomAnswersBody {
    public name?: string;
    public description?: string;
    public answers?: Array<string>;
    public constructor(name?: string, answers?: Array<string>) { 
        this['name'] = name;
        this['answers'] = answers;
    }
    public withName(name: string): AiguardCustomAnswersBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiguardCustomAnswersBody {
        this['description'] = description;
        return this;
    }
    public withAnswers(answers: Array<string>): AiguardCustomAnswersBody {
        this['answers'] = answers;
        return this;
    }
}