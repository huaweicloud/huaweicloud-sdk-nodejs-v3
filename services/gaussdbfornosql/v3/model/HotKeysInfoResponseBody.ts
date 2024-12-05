

export class HotKeysInfoResponseBody {
    public name?: string;
    public type?: string;
    public command?: string;
    public qps?: number;
    private 'db_id'?: number;
    public constructor() { 
    }
    public withName(name: string): HotKeysInfoResponseBody {
        this['name'] = name;
        return this;
    }
    public withType(type: string): HotKeysInfoResponseBody {
        this['type'] = type;
        return this;
    }
    public withCommand(command: string): HotKeysInfoResponseBody {
        this['command'] = command;
        return this;
    }
    public withQps(qps: number): HotKeysInfoResponseBody {
        this['qps'] = qps;
        return this;
    }
    public withDbId(dbId: number): HotKeysInfoResponseBody {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: number  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): number | undefined {
        return this['db_id'];
    }
}