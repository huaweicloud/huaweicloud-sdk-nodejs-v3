import { CatalogMetaDataEventInfo } from './CatalogMetaDataEventInfo';


export class CatalogMetaDataEventRequest {
    public engine?: CatalogMetaDataEventRequestEngineEnum | string;
    private 'engine_version'?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    public events?: Array<CatalogMetaDataEventInfo>;
    public constructor() { 
    }
    public withEngine(engine: CatalogMetaDataEventRequestEngineEnum | string): CatalogMetaDataEventRequest {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): CatalogMetaDataEventRequest {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withInstanceId(instanceId: string): CatalogMetaDataEventRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): CatalogMetaDataEventRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEvents(events: Array<CatalogMetaDataEventInfo>): CatalogMetaDataEventRequest {
        this['events'] = events;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CatalogMetaDataEventRequestEngineEnum {
    DLI = 'DLI',
    MRS = 'MRS',
    DWS = 'DWS'
}
