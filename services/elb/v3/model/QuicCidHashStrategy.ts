

export class QuicCidHashStrategy {
    public len?: number;
    public offset?: number;
    public constructor(len?: number, offset?: number) { 
        this['len'] = len;
        this['offset'] = offset;
    }
    public withLen(len: number): QuicCidHashStrategy {
        this['len'] = len;
        return this;
    }
    public withOffset(offset: number): QuicCidHashStrategy {
        this['offset'] = offset;
        return this;
    }
}