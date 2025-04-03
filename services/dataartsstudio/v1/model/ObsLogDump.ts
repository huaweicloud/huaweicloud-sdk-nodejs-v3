

export class ObsLogDump {
    private 'log_dump'?: boolean;
    public constructor() { 
    }
    public withLogDump(logDump: boolean): ObsLogDump {
        this['log_dump'] = logDump;
        return this;
    }
    public set logDump(logDump: boolean  | undefined) {
        this['log_dump'] = logDump;
    }
    public get logDump(): boolean | undefined {
        return this['log_dump'];
    }
}