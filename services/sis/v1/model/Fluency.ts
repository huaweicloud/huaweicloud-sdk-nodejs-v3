

export class Fluency {
    public score?: number;
    public rhythm?: number;
    public cohesion?: number;
    public constructor(score?: number, rhythm?: number, cohesion?: number) { 
        this['score'] = score;
        this['rhythm'] = rhythm;
        this['cohesion'] = cohesion;
    }
    public withScore(score: number): Fluency {
        this['score'] = score;
        return this;
    }
    public withRhythm(rhythm: number): Fluency {
        this['rhythm'] = rhythm;
        return this;
    }
    public withCohesion(cohesion: number): Fluency {
        this['cohesion'] = cohesion;
        return this;
    }
}