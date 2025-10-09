

export class ListAccessKeysV5Request {
    private 'user_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): ListAccessKeysV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withLimit(limit: number): ListAccessKeysV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccessKeysV5Request {
        this['marker'] = marker;
        return this;
    }
}