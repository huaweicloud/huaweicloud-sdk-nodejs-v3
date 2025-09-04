

export class MqttConnectionInfo {
    private 'server_address'?: string;
    private 'client_id'?: string;
    private 'auth_type'?: string;
    private 'private_key'?: string;
    public certificate?: string;
    private 'user_name'?: string;
    public password?: string;
    public qos?: number;
    public constructor() { 
    }
    public withServerAddress(serverAddress: string): MqttConnectionInfo {
        this['server_address'] = serverAddress;
        return this;
    }
    public set serverAddress(serverAddress: string  | undefined) {
        this['server_address'] = serverAddress;
    }
    public get serverAddress(): string | undefined {
        return this['server_address'];
    }
    public withClientId(clientId: string): MqttConnectionInfo {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withAuthType(authType: string): MqttConnectionInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withPrivateKey(privateKey: string): MqttConnectionInfo {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificate(certificate: string): MqttConnectionInfo {
        this['certificate'] = certificate;
        return this;
    }
    public withUserName(userName: string): MqttConnectionInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): MqttConnectionInfo {
        this['password'] = password;
        return this;
    }
    public withQos(qos: number): MqttConnectionInfo {
        this['qos'] = qos;
        return this;
    }
}