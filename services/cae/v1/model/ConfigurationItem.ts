import { ConfigurationData } from './ConfigurationData';


export class ConfigurationItem {
    public type?: ConfigurationItemTypeEnum | string;
    public data?: ConfigurationData;
    public constructor(type?: string, data?: ConfigurationData) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: ConfigurationItemTypeEnum | string): ConfigurationItem {
        this['type'] = type;
        return this;
    }
    public withData(data: ConfigurationData): ConfigurationItem {
        this['data'] = data;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationItemTypeEnum {
    RDS = 'rds',
    CSE = 'cse',
    ENV = 'env',
    ACCESS = 'access',
    SCALING = 'scaling',
    VOLUME = 'volume',
    HEALTHCHECK = 'healthCheck',
    LIFECYCLE = 'lifecycle',
    APM2 = 'apm2',
    LOG = 'log',
    CUSTOMMETRIC = 'customMetric'
}
