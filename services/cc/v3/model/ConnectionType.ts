import { ConnectionTypeEnum } from './ConnectionTypeEnum';


export class ConnectionType {
    private 'connection_type'?: ConnectionTypeEnum;
    public constructor(connectionType?: ConnectionTypeEnum) { 
        this['connection_type'] = connectionType;
    }
    public withConnectionType(connectionType: ConnectionTypeEnum): ConnectionType {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: ConnectionTypeEnum  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): ConnectionTypeEnum | undefined {
        return this['connection_type'];
    }
}