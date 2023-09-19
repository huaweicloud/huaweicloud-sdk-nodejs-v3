

export class LogConfiguration {
    public id?: string;
    public clusterId?: string;
    public obsBucket?: string;
    public agency?: string;
    public updateAt?: number;
    public basePath?: string;
    public autoEnable?: boolean;
    public period?: string;
    public logSwitch?: boolean;
    public constructor() { 
    }
    public withId(id: string): LogConfiguration {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): LogConfiguration {
        this['clusterId'] = clusterId;
        return this;
    }
    public withObsBucket(obsBucket: string): LogConfiguration {
        this['obsBucket'] = obsBucket;
        return this;
    }
    public withAgency(agency: string): LogConfiguration {
        this['agency'] = agency;
        return this;
    }
    public withUpdateAt(updateAt: number): LogConfiguration {
        this['updateAt'] = updateAt;
        return this;
    }
    public withBasePath(basePath: string): LogConfiguration {
        this['basePath'] = basePath;
        return this;
    }
    public withAutoEnable(autoEnable: boolean): LogConfiguration {
        this['autoEnable'] = autoEnable;
        return this;
    }
    public withPeriod(period: string): LogConfiguration {
        this['period'] = period;
        return this;
    }
    public withLogSwitch(logSwitch: boolean): LogConfiguration {
        this['logSwitch'] = logSwitch;
        return this;
    }
}