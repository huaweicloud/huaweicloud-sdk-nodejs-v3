import { ApplicationConfigConfiguration } from './ApplicationConfigConfiguration';


export class ApplicationConfigConfiguration1 {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public configuration?: ApplicationConfigConfiguration;
    public constructor() { 
    }
    public withApplicationId(applicationId: string): ApplicationConfigConfiguration1 {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ApplicationConfigConfiguration1 {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withConfiguration(configuration: ApplicationConfigConfiguration): ApplicationConfigConfiguration1 {
        this['configuration'] = configuration;
        return this;
    }
}