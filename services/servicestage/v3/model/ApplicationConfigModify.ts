import { ApplicationConfigModifyConfiguration } from './ApplicationConfigModifyConfiguration';


export class ApplicationConfigModify {
    private 'environment_id'?: string;
    public configuration?: ApplicationConfigModifyConfiguration;
    public constructor(environmentId?: string, configuration?: ApplicationConfigModifyConfiguration) { 
        this['environment_id'] = environmentId;
        this['configuration'] = configuration;
    }
    public withEnvironmentId(environmentId: string): ApplicationConfigModify {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withConfiguration(configuration: ApplicationConfigModifyConfiguration): ApplicationConfigModify {
        this['configuration'] = configuration;
        return this;
    }
}