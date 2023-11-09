import { ApplicationListConfigConfiguration } from './ApplicationListConfigConfiguration';


export class ApplicationListConfigConfiguration1 {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public configuration?: ApplicationListConfigConfiguration;
    public constructor() { 
    }
    public withApplicationId(applicationId: string): ApplicationListConfigConfiguration1 {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ApplicationListConfigConfiguration1 {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withConfiguration(configuration: ApplicationListConfigConfiguration): ApplicationListConfigConfiguration1 {
        this['configuration'] = configuration;
        return this;
    }
}