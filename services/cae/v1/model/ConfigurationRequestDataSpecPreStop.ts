import { LifeCycleConfigurationExec } from './LifeCycleConfigurationExec';


export class ConfigurationRequestDataSpecPreStop {
    public exec?: LifeCycleConfigurationExec;
    public constructor() { 
    }
    public withExec(exec: LifeCycleConfigurationExec): ConfigurationRequestDataSpecPreStop {
        this['exec'] = exec;
        return this;
    }
}