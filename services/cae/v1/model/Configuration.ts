import { ListComponentConfigurationsResponseData } from './ListComponentConfigurationsResponseData';


export class Configuration {
    public data?: ListComponentConfigurationsResponseData;
    private 'operated_at'?: Date;
    private 'operation_id'?: string;
    public type?: ConfigurationTypeEnum | string;
    private 'is_activated'?: boolean;
    private 'is_using'?: boolean;
    public constructor() { 
    }
    public withData(data: ListComponentConfigurationsResponseData): Configuration {
        this['data'] = data;
        return this;
    }
    public withOperatedAt(operatedAt: Date): Configuration {
        this['operated_at'] = operatedAt;
        return this;
    }
    public set operatedAt(operatedAt: Date  | undefined) {
        this['operated_at'] = operatedAt;
    }
    public get operatedAt(): Date | undefined {
        return this['operated_at'];
    }
    public withOperationId(operationId: string): Configuration {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withType(type: ConfigurationTypeEnum | string): Configuration {
        this['type'] = type;
        return this;
    }
    public withIsActivated(isActivated: boolean): Configuration {
        this['is_activated'] = isActivated;
        return this;
    }
    public set isActivated(isActivated: boolean  | undefined) {
        this['is_activated'] = isActivated;
    }
    public get isActivated(): boolean | undefined {
        return this['is_activated'];
    }
    public withIsUsing(isUsing: boolean): Configuration {
        this['is_using'] = isUsing;
        return this;
    }
    public set isUsing(isUsing: boolean  | undefined) {
        this['is_using'] = isUsing;
    }
    public get isUsing(): boolean | undefined {
        return this['is_using'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationTypeEnum {
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
