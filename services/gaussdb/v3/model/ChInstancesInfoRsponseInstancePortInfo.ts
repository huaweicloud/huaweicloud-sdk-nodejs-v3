

export class ChInstancesInfoRsponseInstancePortInfo {
    private 'tep_port'?: number;
    private 'http_port'?: number;
    private 'mysql_port'?: number;
    private 'https_port'?: number;
    private 'tep_secure_port'?: number;
    public constructor(tepPort?: number, httpPort?: number, mysqlPort?: number, httpsPort?: number, tepSecurePort?: number) { 
        this['tep_port'] = tepPort;
        this['http_port'] = httpPort;
        this['mysql_port'] = mysqlPort;
        this['https_port'] = httpsPort;
        this['tep_secure_port'] = tepSecurePort;
    }
    public withTepPort(tepPort: number): ChInstancesInfoRsponseInstancePortInfo {
        this['tep_port'] = tepPort;
        return this;
    }
    public set tepPort(tepPort: number  | undefined) {
        this['tep_port'] = tepPort;
    }
    public get tepPort(): number | undefined {
        return this['tep_port'];
    }
    public withHttpPort(httpPort: number): ChInstancesInfoRsponseInstancePortInfo {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number  | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort(): number | undefined {
        return this['http_port'];
    }
    public withMysqlPort(mysqlPort: number): ChInstancesInfoRsponseInstancePortInfo {
        this['mysql_port'] = mysqlPort;
        return this;
    }
    public set mysqlPort(mysqlPort: number  | undefined) {
        this['mysql_port'] = mysqlPort;
    }
    public get mysqlPort(): number | undefined {
        return this['mysql_port'];
    }
    public withHttpsPort(httpsPort: number): ChInstancesInfoRsponseInstancePortInfo {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number  | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort(): number | undefined {
        return this['https_port'];
    }
    public withTepSecurePort(tepSecurePort: number): ChInstancesInfoRsponseInstancePortInfo {
        this['tep_secure_port'] = tepSecurePort;
        return this;
    }
    public set tepSecurePort(tepSecurePort: number  | undefined) {
        this['tep_secure_port'] = tepSecurePort;
    }
    public get tepSecurePort(): number | undefined {
        return this['tep_secure_port'];
    }
}