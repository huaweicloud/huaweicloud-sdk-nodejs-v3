

export class StarRocksInstanceInfoPortInfo {
    private 'mysql_port'?: number;
    public constructor() { 
    }
    public withMysqlPort(mysqlPort: number): StarRocksInstanceInfoPortInfo {
        this['mysql_port'] = mysqlPort;
        return this;
    }
    public set mysqlPort(mysqlPort: number  | undefined) {
        this['mysql_port'] = mysqlPort;
    }
    public get mysqlPort(): number | undefined {
        return this['mysql_port'];
    }
}