

export class WordFluency {
    public score: number;
    public rhythm: number;
    public constructor(score?: any, rhythm?: any) { 
        this['score'] = score;
        this['rhythm'] = rhythm;
    }
    public withScore(score: number): WordFluency {
        this['score'] = score;
        return this;
    }
    public withRhythm(rhythm: number): WordFluency {
        this['rhythm'] = rhythm;
        return this;
    }
}