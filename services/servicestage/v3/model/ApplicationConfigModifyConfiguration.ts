import { ApplicationConfigModifyConfigurationEnv } from './ApplicationConfigModifyConfigurationEnv';


export class ApplicationConfigModifyConfiguration {
    public env?: Array<ApplicationConfigModifyConfigurationEnv>;
    public constructor(env?: Array<ApplicationConfigModifyConfigurationEnv>) { 
        this['env'] = env;
    }
    public withEnv(env: Array<ApplicationConfigModifyConfigurationEnv>): ApplicationConfigModifyConfiguration {
        this['env'] = env;
        return this;
    }
}