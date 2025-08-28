

export class ListDdmFlavorsRequest {
    public offset?: number;
    public limit?: number;
    private 'engine_id'?: string;
    private 'engine_version'?: string;
    private 'available_zones'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListDdmFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdmFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEngineId(engineId: string): ListDdmFlavorsRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withEngineVersion(engineVersion: string): ListDdmFlavorsRequest {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withAvailableZones(availableZones: string): ListDdmFlavorsRequest {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: string  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): string | undefined {
        return this['available_zones'];
    }
}