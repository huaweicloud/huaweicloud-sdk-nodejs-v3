import { MqttConnectionInfo } from './MqttConnectionInfo';


export class UpdateExternalEntityReqDTO {
    public protocol?: string;
    private 'connection_type'?: string;
    private 'mqtt_connection_info'?: MqttConnectionInfo;
    public constructor(protocol?: string, connectionType?: string) { 
        this['protocol'] = protocol;
        this['connection_type'] = connectionType;
    }
    public withProtocol(protocol: string): UpdateExternalEntityReqDTO {
        this['protocol'] = protocol;
        return this;
    }
    public withConnectionType(connectionType: string): UpdateExternalEntityReqDTO {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): string | undefined {
        return this['connection_type'];
    }
    public withMqttConnectionInfo(mqttConnectionInfo: MqttConnectionInfo): UpdateExternalEntityReqDTO {
        this['mqtt_connection_info'] = mqttConnectionInfo;
        return this;
    }
    public set mqttConnectionInfo(mqttConnectionInfo: MqttConnectionInfo  | undefined) {
        this['mqtt_connection_info'] = mqttConnectionInfo;
    }
    public get mqttConnectionInfo(): MqttConnectionInfo | undefined {
        return this['mqtt_connection_info'];
    }
}