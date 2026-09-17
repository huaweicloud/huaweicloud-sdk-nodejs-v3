

export class IoTDBConnectionInfo {
    public username?: string;
    public password?: string;
    public constructor(username?: string, password?: string) { 
        this['username'] = username;
        this['password'] = password;
    }
    public withUsername(username: string): IoTDBConnectionInfo {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): IoTDBConnectionInfo {
        this['password'] = password;
        return this;
    }
}