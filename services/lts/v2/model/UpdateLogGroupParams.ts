

export class UpdateLogGroupParams {
    private 'ttl_in_days': number | undefined;
    public constructor(ttlInDays?: any) { 
        this['ttl_in_days'] = ttlInDays;
    }
    public withTtlInDays(ttlInDays: number): UpdateLogGroupParams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays() {
        return this['ttl_in_days'];
    }
}