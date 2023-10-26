

export class CleanLimitDict {
    private 'cleaning_access_pos_id'?: number;
    private 'new_connection_limited'?: number;
    private 'total_connection_limited'?: number;
    public constructor(cleaningAccessPosId?: number, newConnectionLimited?: number, totalConnectionLimited?: number) { 
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
        this['new_connection_limited'] = newConnectionLimited;
        this['total_connection_limited'] = totalConnectionLimited;
    }
    public withCleaningAccessPosId(cleaningAccessPosId: number): CleanLimitDict {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
        return this;
    }
    public set cleaningAccessPosId(cleaningAccessPosId: number  | undefined) {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
    }
    public get cleaningAccessPosId(): number | undefined {
        return this['cleaning_access_pos_id'];
    }
    public withNewConnectionLimited(newConnectionLimited: number): CleanLimitDict {
        this['new_connection_limited'] = newConnectionLimited;
        return this;
    }
    public set newConnectionLimited(newConnectionLimited: number  | undefined) {
        this['new_connection_limited'] = newConnectionLimited;
    }
    public get newConnectionLimited(): number | undefined {
        return this['new_connection_limited'];
    }
    public withTotalConnectionLimited(totalConnectionLimited: number): CleanLimitDict {
        this['total_connection_limited'] = totalConnectionLimited;
        return this;
    }
    public set totalConnectionLimited(totalConnectionLimited: number  | undefined) {
        this['total_connection_limited'] = totalConnectionLimited;
    }
    public get totalConnectionLimited(): number | undefined {
        return this['total_connection_limited'];
    }
}