import { LifeCycleConfigurationExec } from './LifeCycleConfigurationExec';


export class ConfigurationResponseDataSpecPreStop {
    public exec?: LifeCycleConfigurationExec;
    public constructor() { 
    }
    public withExec(exec: LifeCycleConfigurationExec): ConfigurationResponseDataSpecPreStop {
        this['exec'] = exec;
        return this;
    }
}