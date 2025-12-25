

export class SearchPolicyRequestBodyGroupByGroupByHit {
    public source?: string;
    public dest?: string;
    public constructor() { 
    }
    public withSource(source: string): SearchPolicyRequestBodyGroupByGroupByHit {
        this['source'] = source;
        return this;
    }
    public withDest(dest: string): SearchPolicyRequestBodyGroupByGroupByHit {
        this['dest'] = dest;
        return this;
    }
}