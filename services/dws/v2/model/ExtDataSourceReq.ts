

export class ExtDataSourceReq {
    private 'data_source_id'?: string | undefined;
    public type: string;
    private 'data_source_name': string | undefined;
    private 'user_name': string | undefined;
    private 'user_pwd'?: string | undefined;
    public description?: string;
    public reboot?: boolean;
    private 'connect_info'?: string | undefined;
    public constructor(type?: any, dataSourceName?: any, userName?: any) { 
        this['type'] = type;
        this['data_source_name'] = dataSourceName;
        this['user_name'] = userName;
    }
    public withDataSourceId(dataSourceId: string): ExtDataSourceReq {
        this['data_source_id'] = dataSourceId;
        return this;
    }
    public set dataSourceId(dataSourceId: string | undefined) {
        this['data_source_id'] = dataSourceId;
    }
    public get dataSourceId() {
        return this['data_source_id'];
    }
    public withType(type: string): ExtDataSourceReq {
        this['type'] = type;
        return this;
    }
    public withDataSourceName(dataSourceName: string): ExtDataSourceReq {
        this['data_source_name'] = dataSourceName;
        return this;
    }
    public set dataSourceName(dataSourceName: string | undefined) {
        this['data_source_name'] = dataSourceName;
    }
    public get dataSourceName() {
        return this['data_source_name'];
    }
    public withUserName(userName: string): ExtDataSourceReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withUserPwd(userPwd: string): ExtDataSourceReq {
        this['user_pwd'] = userPwd;
        return this;
    }
    public set userPwd(userPwd: string | undefined) {
        this['user_pwd'] = userPwd;
    }
    public get userPwd() {
        return this['user_pwd'];
    }
    public withDescription(description: string): ExtDataSourceReq {
        this['description'] = description;
        return this;
    }
    public withReboot(reboot: boolean): ExtDataSourceReq {
        this['reboot'] = reboot;
        return this;
    }
    public withConnectInfo(connectInfo: string): ExtDataSourceReq {
        this['connect_info'] = connectInfo;
        return this;
    }
    public set connectInfo(connectInfo: string | undefined) {
        this['connect_info'] = connectInfo;
    }
    public get connectInfo() {
        return this['connect_info'];
    }
}