

export class KeySpace {
    private 'db_idx'?: string;
    public keys?: string;
    public expires?: string;
    private 'avg_ttl'?: string;
    public constructor() { 
    }
    public withDbIdx(dbIdx: string): KeySpace {
        this['db_idx'] = dbIdx;
        return this;
    }
    public set dbIdx(dbIdx: string  | undefined) {
        this['db_idx'] = dbIdx;
    }
    public get dbIdx(): string | undefined {
        return this['db_idx'];
    }
    public withKeys(keys: string): KeySpace {
        this['keys'] = keys;
        return this;
    }
    public withExpires(expires: string): KeySpace {
        this['expires'] = expires;
        return this;
    }
    public withAvgTtl(avgTtl: string): KeySpace {
        this['avg_ttl'] = avgTtl;
        return this;
    }
    public set avgTtl(avgTtl: string  | undefined) {
        this['avg_ttl'] = avgTtl;
    }
    public get avgTtl(): string | undefined {
        return this['avg_ttl'];
    }
}