

export class DataConnector {
    private 'connector_name'?: string;
    private 'source_type'?: DataConnectorSourceTypeEnum | string;
    private 'source_info'?: string;
    public constructor(connectorName?: string, sourceType?: string, sourceInfo?: string) { 
        this['connector_name'] = connectorName;
        this['source_type'] = sourceType;
        this['source_info'] = sourceInfo;
    }
    public withConnectorName(connectorName: string): DataConnector {
        this['connector_name'] = connectorName;
        return this;
    }
    public set connectorName(connectorName: string  | undefined) {
        this['connector_name'] = connectorName;
    }
    public get connectorName(): string | undefined {
        return this['connector_name'];
    }
    public withSourceType(sourceType: DataConnectorSourceTypeEnum | string): DataConnector {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: DataConnectorSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): DataConnectorSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withSourceInfo(sourceInfo: string): DataConnector {
        this['source_info'] = sourceInfo;
        return this;
    }
    public set sourceInfo(sourceInfo: string  | undefined) {
        this['source_info'] = sourceInfo;
    }
    public get sourceInfo(): string | undefined {
        return this['source_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataConnectorSourceTypeEnum {
    RDS_MYSQL = 'RDS_MYSQL',
    RDS_POSTGRES = 'RDS_POSTGRES',
    GAUSSDB_MYSQL = 'gaussdb-mysql'
}
