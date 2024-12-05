

export class RedisDisabledCommandsDetail {
    private 'db_id'?: string;
    public key?: string;
    public commands?: Array<string>;
    public constructor(dbId?: string, key?: string, commands?: Array<string>) { 
        this['db_id'] = dbId;
        this['key'] = key;
        this['commands'] = commands;
    }
    public withDbId(dbId: string): RedisDisabledCommandsDetail {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withKey(key: string): RedisDisabledCommandsDetail {
        this['key'] = key;
        return this;
    }
    public withCommands(commands: Array<string>): RedisDisabledCommandsDetail {
        this['commands'] = commands;
        return this;
    }
}