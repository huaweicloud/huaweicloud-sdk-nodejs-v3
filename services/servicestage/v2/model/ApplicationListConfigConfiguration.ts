import { ApplicationListConfigConfigurationEnv } from './ApplicationListConfigConfigurationEnv';


export class ApplicationListConfigConfiguration {
    public env?: Array<ApplicationListConfigConfigurationEnv>;
    public constructor() { 
    }
    public withEnv(env: Array<ApplicationListConfigConfigurationEnv>): ApplicationListConfigConfiguration {
        this['env'] = env;
        return this;
    }
}