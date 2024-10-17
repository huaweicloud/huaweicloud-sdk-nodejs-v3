

export class CreateDatabaseRequestDatabase {
    private 'db_classification'?: string;
    public name?: string;
    public type?: string;
    public version?: string;
    public charset?: CreateDatabaseRequestDatabaseCharsetEnum | string;
    public ip?: string;
    public port?: string;
    public os?: string;
    private 'instance_name'?: string;
    public constructor(dbClassification?: string, name?: string, type?: string, version?: string, charset?: string, ip?: string, port?: string, os?: string) { 
        this['db_classification'] = dbClassification;
        this['name'] = name;
        this['type'] = type;
        this['version'] = version;
        this['charset'] = charset;
        this['ip'] = ip;
        this['port'] = port;
        this['os'] = os;
    }
    public withDbClassification(dbClassification: string): CreateDatabaseRequestDatabase {
        this['db_classification'] = dbClassification;
        return this;
    }
    public set dbClassification(dbClassification: string  | undefined) {
        this['db_classification'] = dbClassification;
    }
    public get dbClassification(): string | undefined {
        return this['db_classification'];
    }
    public withName(name: string): CreateDatabaseRequestDatabase {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateDatabaseRequestDatabase {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): CreateDatabaseRequestDatabase {
        this['version'] = version;
        return this;
    }
    public withCharset(charset: CreateDatabaseRequestDatabaseCharsetEnum | string): CreateDatabaseRequestDatabase {
        this['charset'] = charset;
        return this;
    }
    public withIp(ip: string): CreateDatabaseRequestDatabase {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: string): CreateDatabaseRequestDatabase {
        this['port'] = port;
        return this;
    }
    public withOs(os: string): CreateDatabaseRequestDatabase {
        this['os'] = os;
        return this;
    }
    public withInstanceName(instanceName: string): CreateDatabaseRequestDatabase {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDatabaseRequestDatabaseCharsetEnum {
    GBK = 'GBK',
    UTF8 = 'UTF8'
}
