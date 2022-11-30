

export class WordPronunciation {
    public score: number;
    public gop: number;
    public constructor(score?: any, gop?: any) { 
        this['score'] = score;
        this['gop'] = gop;
    }
    public withScore(score: number): WordPronunciation {
        this['score'] = score;
        return this;
    }
    public withGop(gop: number): WordPronunciation {
        this['gop'] = gop;
        return this;
    }
}