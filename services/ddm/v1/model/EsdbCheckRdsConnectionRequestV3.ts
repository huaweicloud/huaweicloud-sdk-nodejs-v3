

export class EsdbCheckRdsConnectionRequestV3 {
    public endpoint?: string;
    public username?: string;
    public password?: string;
    private 'rds_instance_id'?: string;
    public constructor(endpoint?: string, username?: string, password?: string, rdsInstanceId?: string) { 
        this['endpoint'] = endpoint;
        this['username'] = username;
        this['password'] = password;
        this['rds_instance_id'] = rdsInstanceId;
    }
    public withEndpoint(endpoint: string): EsdbCheckRdsConnectionRequestV3 {
        this['endpoint'] = endpoint;
        return this;
    }
    public withUsername(username: string): EsdbCheckRdsConnectionRequestV3 {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): EsdbCheckRdsConnectionRequestV3 {
        this['password'] = password;
        return this;
    }
    public withRdsInstanceId(rdsInstanceId: string): EsdbCheckRdsConnectionRequestV3 {
        this['rds_instance_id'] = rdsInstanceId;
        return this;
    }
    public set rdsInstanceId(rdsInstanceId: string  | undefined) {
        this['rds_instance_id'] = rdsInstanceId;
    }
    public get rdsInstanceId(): string | undefined {
        return this['rds_instance_id'];
    }
}