import { MqttConnectionInfo } from './MqttConnectionInfo';


export class CreateExternalEntityReqDTO {
    private 'external_id'?: string;
    public protocol?: string;
    private 'connection_type'?: string;
    private 'mqtt_connection_info'?: MqttConnectionInfo;
    private 'space_id'?: string;
    public constructor(externalId?: string, protocol?: string, connectionType?: string) { 
        this['external_id'] = externalId;
        this['protocol'] = protocol;
        this['connection_type'] = connectionType;
    }
    public withExternalId(externalId: string): CreateExternalEntityReqDTO {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
    public withProtocol(protocol: string): CreateExternalEntityReqDTO {
        this['protocol'] = protocol;
        return this;
    }
    public withConnectionType(connectionType: string): CreateExternalEntityReqDTO {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): string | undefined {
        return this['connection_type'];
    }
    public withMqttConnectionInfo(mqttConnectionInfo: MqttConnectionInfo): CreateExternalEntityReqDTO {
        this['mqtt_connection_info'] = mqttConnectionInfo;
        return this;
    }
    public set mqttConnectionInfo(mqttConnectionInfo: MqttConnectionInfo  | undefined) {
        this['mqtt_connection_info'] = mqttConnectionInfo;
    }
    public get mqttConnectionInfo(): MqttConnectionInfo | undefined {
        return this['mqtt_connection_info'];
    }
    public withSpaceId(spaceId: string): CreateExternalEntityReqDTO {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
}