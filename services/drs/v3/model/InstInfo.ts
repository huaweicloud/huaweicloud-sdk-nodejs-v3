

export class InstInfo {
    private 'engine_type'?: InstInfoEngineTypeEnum | undefined;
    private 'inst_type'?: InstInfoInstTypeEnum | undefined;
    public ip?: string;
    private 'public_ip'?: string | undefined;
    private 'start_time'?: string | undefined;
    public status?: InstInfoStatusEnum;
    private 'volume_size'?: number | undefined;
    public constructor() { 
    }
    public withEngineType(engineType: InstInfoEngineTypeEnum): InstInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: InstInfoEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withInstType(instType: InstInfoInstTypeEnum): InstInfo {
        this['inst_type'] = instType;
        return this;
    }
    public set instType(instType: InstInfoInstTypeEnum | undefined) {
        this['inst_type'] = instType;
    }
    public get instType() {
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
    public set publicIp(publicIp: string | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withStartTime(startTime: string): InstInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withStatus(status: InstInfoStatusEnum): InstInfo {
        this['status'] = status;
        return this;
    }
    public withVolumeSize(volumeSize: number): InstInfo {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize() {
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
    CLOUDDATAGUARD_MYSQL = 'cloudDataGuard-mysql'
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
