

export class RealtimeScaleDimensionValue {
    public dimension?: string;
    private 'online_users'?: number;
    public constructor() { 
    }
    public withDimension(dimension: string): RealtimeScaleDimensionValue {
        this['dimension'] = dimension;
        return this;
    }
    public withOnlineUsers(onlineUsers: number): RealtimeScaleDimensionValue {
        this['online_users'] = onlineUsers;
        return this;
    }
    public set onlineUsers(onlineUsers: number  | undefined) {
        this['online_users'] = onlineUsers;
    }
    public get onlineUsers(): number | undefined {
        return this['online_users'];
    }
}