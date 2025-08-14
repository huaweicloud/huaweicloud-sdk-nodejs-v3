

export class BearerToken {
    private 'creation_time'?: number;
    private 'expiration_time'?: number;
    private 'token_id'?: string;
    public constructor(creationTime?: number, expirationTime?: number, tokenId?: string) { 
        this['creation_time'] = creationTime;
        this['expiration_time'] = expirationTime;
        this['token_id'] = tokenId;
    }
    public withCreationTime(creationTime: number): BearerToken {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withExpirationTime(expirationTime: number): BearerToken {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): number | undefined {
        return this['expiration_time'];
    }
    public withTokenId(tokenId: string): BearerToken {
        this['token_id'] = tokenId;
        return this;
    }
    public set tokenId(tokenId: string  | undefined) {
        this['token_id'] = tokenId;
    }
    public get tokenId(): string | undefined {
        return this['token_id'];
    }
}