

export class HotKeyInfo {
    public name?: string;
    public type?: HotKeyInfoTypeEnum | string;
    public command?: string;
    public qps?: number;
    private 'traffic_in'?: number;
    private 'traffic_out'?: number;
    private 'db_id'?: string;
    public constructor() { 
    }
    public withName(name: string): HotKeyInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: HotKeyInfoTypeEnum | string): HotKeyInfo {
        this['type'] = type;
        return this;
    }
    public withCommand(command: string): HotKeyInfo {
        this['command'] = command;
        return this;
    }
    public withQps(qps: number): HotKeyInfo {
        this['qps'] = qps;
        return this;
    }
    public withTrafficIn(trafficIn: number): HotKeyInfo {
        this['traffic_in'] = trafficIn;
        return this;
    }
    public set trafficIn(trafficIn: number  | undefined) {
        this['traffic_in'] = trafficIn;
    }
    public get trafficIn(): number | undefined {
        return this['traffic_in'];
    }
    public withTrafficOut(trafficOut: number): HotKeyInfo {
        this['traffic_out'] = trafficOut;
        return this;
    }
    public set trafficOut(trafficOut: number  | undefined) {
        this['traffic_out'] = trafficOut;
    }
    public get trafficOut(): number | undefined {
        return this['traffic_out'];
    }
    public withDbId(dbId: string): HotKeyInfo {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HotKeyInfoTypeEnum {
    STRING = 'string',
    HASH = 'hash',
    LIST = 'list',
    ZSET = 'zset',
    SET = 'set',
    STREAM = 'stream',
    EXHASH = 'exhash'
}
