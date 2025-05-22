

export class MigrateAZRequestBody {
    private 'new_available_zones'?: Array<string>;
    private 'execute_immediately'?: boolean;
    public constructor() { 
    }
    public withNewAvailableZones(newAvailableZones: Array<string>): MigrateAZRequestBody {
        this['new_available_zones'] = newAvailableZones;
        return this;
    }
    public set newAvailableZones(newAvailableZones: Array<string>  | undefined) {
        this['new_available_zones'] = newAvailableZones;
    }
    public get newAvailableZones(): Array<string> | undefined {
        return this['new_available_zones'];
    }
    public withExecuteImmediately(executeImmediately: boolean): MigrateAZRequestBody {
        this['execute_immediately'] = executeImmediately;
        return this;
    }
    public set executeImmediately(executeImmediately: boolean  | undefined) {
        this['execute_immediately'] = executeImmediately;
    }
    public get executeImmediately(): boolean | undefined {
        return this['execute_immediately'];
    }
}