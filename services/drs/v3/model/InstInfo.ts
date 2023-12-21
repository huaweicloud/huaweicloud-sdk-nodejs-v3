

export class InstInfo {
    private 'engine_type'?: InstInfoEngineTypeEnum | string;
    private 'inst_type'?: InstInfoInstTypeEnum | string;
    public ip?: string;
    private 'public_ip'?: string;
    private 'start_time'?: string;
    public status?: InstInfoStatusEnum | string;
    private 'volume_size'?: number;
    public constructor() { 
    }
    public withEngineType(engineType: InstInfoEngineTypeEnum | string): InstInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: InstInfoEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): InstInfoEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withInstType(instType: InstInfoInstTypeEnum | string): InstInfo {
        this['inst_type'] = instType;
        return this;
    }
    public set instType(instType: InstInfoInstTypeEnum | string  | undefined) {
        this['inst_type'] = instType;
    }
    public get instType(): InstInfoInstTypeEnum | string | undefined {
        return this['inst_type'];
    }
    public withIp(ip: string): InstInfo {
        this['ip'] = ip;
        return this;
    }
    public withPublicIp(publicIp: string): InstInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withStartTime(startTime: string): InstInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStatus(status: InstInfoStatusEnum | string): InstInfo {
        this['status'] = status;
        return this;
    }
    public withVolumeSize(volumeSize: number): InstInfo {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstInfoEngineTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb',
    CLOUDDATAGUARD_MYSQL = 'cloudDataGuard-mysql',
    GAUSSDBV5 = 'gaussdbv5',
    POSTGRESQL = 'postgresql',
    MYSQL_TO_KAFKA = 'mysql-to-kafka',
    TAURUS_TO_KAFKA = 'taurus-to-kafka',
    GAUSSDBV5HA_TO_KAFKA = 'gaussdbv5ha-to-kafka'
}
/**
    * @export
    * @enum {string}
    */
export enum InstInfoInstTypeEnum {
    HIGH = 'high'
}
/**
    * @export
    * @enum {string}
    */
export enum InstInfoStatusEnum {
    ACTIVE = 'active',
    DELETED = 'deleted'
}
