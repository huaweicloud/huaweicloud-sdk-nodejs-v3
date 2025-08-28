

export class UpdateKnowledgeLibraryReq {
    public name?: string;
    public topk?: number;
    public score?: number;
    public constructor() { 
    }
    public withName(name: string): UpdateKnowledgeLibraryReq {
        this['name'] = name;
        return this;
    }
    public withTopk(topk: number): UpdateKnowledgeLibraryReq {
        this['topk'] = topk;
        return this;
    }
    public withScore(score: number): UpdateKnowledgeLibraryReq {
        this['score'] = score;
        return this;
    }
}