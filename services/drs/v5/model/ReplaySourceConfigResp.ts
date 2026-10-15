

export class ReplaySourceConfigResp {
    private 'engine_type'?: string;
    private 'source_endpoint_type'?: string;
    private 'source_db_origin'?: string;
    private 'traffic_source'?: string;
    private 'support_traffic_types'?: Array<string>;
    private 'support_os_types'?: Array<string>;
    private 'support_mirror_database_types'?: Array<string>;
    public constructor() { 
    }
    public withEngineType(engineType: string): ReplaySourceConfigResp {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withSourceEndpointType(sourceEndpointType: string): ReplaySourceConfigResp {
        this['source_endpoint_type'] = sourceEndpointType;
        return this;
    }
    public set sourceEndpointType(sourceEndpointType: string  | undefined) {
        this['source_endpoint_type'] = sourceEndpointType;
    }
    public get sourceEndpointType(): string | undefined {
        return this['source_endpoint_type'];
    }
    public withSourceDbOrigin(sourceDbOrigin: string): ReplaySourceConfigResp {
        this['source_db_origin'] = sourceDbOrigin;
        return this;
    }
    public set sourceDbOrigin(sourceDbOrigin: string  | undefined) {
        this['source_db_origin'] = sourceDbOrigin;
    }
    public get sourceDbOrigin(): string | undefined {
        return this['source_db_origin'];
    }
    public withTrafficSource(trafficSource: string): ReplaySourceConfigResp {
        this['traffic_source'] = trafficSource;
        return this;
    }
    public set trafficSource(trafficSource: string  | undefined) {
        this['traffic_source'] = trafficSource;
    }
    public get trafficSource(): string | undefined {
        return this['traffic_source'];
    }
    public withSupportTrafficTypes(supportTrafficTypes: Array<string>): ReplaySourceConfigResp {
        this['support_traffic_types'] = supportTrafficTypes;
        return this;
    }
    public set supportTrafficTypes(supportTrafficTypes: Array<string>  | undefined) {
        this['support_traffic_types'] = supportTrafficTypes;
    }
    public get supportTrafficTypes(): Array<string> | undefined {
        return this['support_traffic_types'];
    }
    public withSupportOsTypes(supportOsTypes: Array<string>): ReplaySourceConfigResp {
        this['support_os_types'] = supportOsTypes;
        return this;
    }
    public set supportOsTypes(supportOsTypes: Array<string>  | undefined) {
        this['support_os_types'] = supportOsTypes;
    }
    public get supportOsTypes(): Array<string> | undefined {
        return this['support_os_types'];
    }
    public withSupportMirrorDatabaseTypes(supportMirrorDatabaseTypes: Array<string>): ReplaySourceConfigResp {
        this['support_mirror_database_types'] = supportMirrorDatabaseTypes;
        return this;
    }
    public set supportMirrorDatabaseTypes(supportMirrorDatabaseTypes: Array<string>  | undefined) {
        this['support_mirror_database_types'] = supportMirrorDatabaseTypes;
    }
    public get supportMirrorDatabaseTypes(): Array<string> | undefined {
        return this['support_mirror_database_types'];
    }
}