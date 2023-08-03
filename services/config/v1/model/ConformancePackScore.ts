

export class ConformancePackScore {
    public id?: string;
    public name?: string;
    public score?: string;
    public constructor() { 
    }
    public withId(id: string): ConformancePackScore {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConformancePackScore {
        this['name'] = name;
        return this;
    }
    public withScore(score: string): ConformancePackScore {
        this['score'] = score;
        return this;
    }
}