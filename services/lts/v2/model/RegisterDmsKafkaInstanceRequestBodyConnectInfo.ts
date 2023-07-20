

export class RegisterDmsKafkaInstanceRequestBodyConnectInfo {
    private 'user_name'?: string;
    public pwd?: string;
    public constructor() { 
    }
    public withUserName(userName: string): RegisterDmsKafkaInstanceRequestBodyConnectInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPwd(pwd: string): RegisterDmsKafkaInstanceRequestBodyConnectInfo {
        this['pwd'] = pwd;
        return this;
    }
}