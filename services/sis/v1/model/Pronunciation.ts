

export class Pronunciation {
    public score: number;
    public gop: number;
    public constructor(score?: any, gop?: any) { 
        this['score'] = score;
        this['gop'] = gop;
    }
    public withScore(score: number): Pronunciation {
        this['score'] = score;
        return this;
    }
    public withGop(gop: number): Pronunciation {
        this['gop'] = gop;
        return this;
    }
}