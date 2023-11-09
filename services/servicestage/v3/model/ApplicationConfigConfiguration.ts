import { ApplicationConfigConfigurationEnv } from './ApplicationConfigConfigurationEnv';


export class ApplicationConfigConfiguration {
    public env?: Array<ApplicationConfigConfigurationEnv>;
    public constructor() { 
    }
    public withEnv(env: Array<ApplicationConfigConfigurationEnv>): ApplicationConfigConfiguration {
        this['env'] = env;
        return this;
    }
}