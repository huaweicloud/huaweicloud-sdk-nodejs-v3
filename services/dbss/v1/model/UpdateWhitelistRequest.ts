

export class UpdateWhitelistRequest {
    private 'db_ids'?: Array<string>;
    public desc?: string;
    public enabled?: boolean;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withDbIds(dbIds: Array<string>): UpdateWhitelistRequest {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: Array<string>  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): Array<string> | undefined {
        return this['db_ids'];
    }
    public withDesc(desc: string): UpdateWhitelistRequest {
        this['desc'] = desc;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateWhitelistRequest {
        this['enabled'] = enabled;
        return this;
    }
}