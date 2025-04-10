

export class ResultDetailResponseInfo {
    public keyword?: string;
    public hash?: string;
    public constructor() { 
    }
    public withKeyword(keyword: string): ResultDetailResponseInfo {
        this['keyword'] = keyword;
        return this;
    }
    public withHash(hash: string): ResultDetailResponseInfo {
        this['hash'] = hash;
        return this;
    }
}