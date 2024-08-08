

export class Port {
    private 'app_https_port'?: number;
    private 'app_amqps_port'?: number;
    private 'device_coap_port'?: number;
    private 'device_coaps_port'?: number;
    private 'device_mqtt_port'?: number;
    private 'device_mqtts_port'?: number;
    private 'device_https_port'?: number;
    public constructor() { 
    }
    public withAppHttpsPort(appHttpsPort: number): Port {
        this['app_https_port'] = appHttpsPort;
        return this;
    }
    public set appHttpsPort(appHttpsPort: number  | undefined) {
        this['app_https_port'] = appHttpsPort;
    }
    public get appHttpsPort(): number | undefined {
        return this['app_https_port'];
    }
    public withAppAmqpsPort(appAmqpsPort: number): Port {
        this['app_amqps_port'] = appAmqpsPort;
        return this;
    }
    public set appAmqpsPort(appAmqpsPort: number  | undefined) {
        this['app_amqps_port'] = appAmqpsPort;
    }
    public get appAmqpsPort(): number | undefined {
        return this['app_amqps_port'];
    }
    public withDeviceCoapPort(deviceCoapPort: number): Port {
        this['device_coap_port'] = deviceCoapPort;
        return this;
    }
    public set deviceCoapPort(deviceCoapPort: number  | undefined) {
        this['device_coap_port'] = deviceCoapPort;
    }
    public get deviceCoapPort(): number | undefined {
        return this['device_coap_port'];
    }
    public withDeviceCoapsPort(deviceCoapsPort: number): Port {
        this['device_coaps_port'] = deviceCoapsPort;
        return this;
    }
    public set deviceCoapsPort(deviceCoapsPort: number  | undefined) {
        this['device_coaps_port'] = deviceCoapsPort;
    }
    public get deviceCoapsPort(): number | undefined {
        return this['device_coaps_port'];
    }
    public withDeviceMqttPort(deviceMqttPort: number): Port {
        this['device_mqtt_port'] = deviceMqttPort;
        return this;
    }
    public set deviceMqttPort(deviceMqttPort: number  | undefined) {
        this['device_mqtt_port'] = deviceMqttPort;
    }
    public get deviceMqttPort(): number | undefined {
        return this['device_mqtt_port'];
    }
    public withDeviceMqttsPort(deviceMqttsPort: number): Port {
        this['device_mqtts_port'] = deviceMqttsPort;
        return this;
    }
    public set deviceMqttsPort(deviceMqttsPort: number  | undefined) {
        this['device_mqtts_port'] = deviceMqttsPort;
    }
    public get deviceMqttsPort(): number | undefined {
        return this['device_mqtts_port'];
    }
    public withDeviceHttpsPort(deviceHttpsPort: number): Port {
        this['device_https_port'] = deviceHttpsPort;
        return this;
    }
    public set deviceHttpsPort(deviceHttpsPort: number  | undefined) {
        this['device_https_port'] = deviceHttpsPort;
    }
    public get deviceHttpsPort(): number | undefined {
        return this['device_https_port'];
    }
}