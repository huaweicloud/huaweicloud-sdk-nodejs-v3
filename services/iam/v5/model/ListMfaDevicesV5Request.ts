

export class ListMfaDevicesV5Request {
    private 'user_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withUserId(userId: string): ListMfaDevicesV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withLimit(limit: number): ListMfaDevicesV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListMfaDevicesV5Request {
        this['marker'] = marker;
        return this;
    }
}