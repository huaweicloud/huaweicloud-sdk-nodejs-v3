

export class IoTDBConnectionInfoResp {
    public username?: string;
    public password?: string;
    public constructor() { 
    }
    public withUsername(username: string): IoTDBConnectionInfoResp {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): IoTDBConnectionInfoResp {
        this['password'] = password;
        return this;
    }
}