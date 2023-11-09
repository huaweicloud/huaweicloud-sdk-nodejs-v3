import { ComponentStorage } from './ComponentStorage';
import { ConfigurationEnvParam } from './ConfigurationEnvParam';
import { ConfigurationLifecycle } from './ConfigurationLifecycle';
import { ConfigurationProbes } from './ConfigurationProbes';
import { ConfigurationScheduler } from './ConfigurationScheduler';
import { ConfigurationStrategy } from './ConfigurationStrategy';


export class InstanceConfiguration {
    public env?: Array<ConfigurationEnvParam>;
    public storage?: Array<ComponentStorage>;
    public strategy?: ConfigurationStrategy;
    public lifecycle?: ConfigurationLifecycle;
    public scheduler?: ConfigurationScheduler;
    public probes?: ConfigurationProbes;
    public constructor() { 
    }
    public withEnv(env: Array<ConfigurationEnvParam>): InstanceConfiguration {
        this['env'] = env;
        return this;
    }
    public withStorage(storage: Array<ComponentStorage>): InstanceConfiguration {
        this['storage'] = storage;
        return this;
    }
    public withStrategy(strategy: ConfigurationStrategy): InstanceConfiguration {
        this['strategy'] = strategy;
        return this;
    }
    public withLifecycle(lifecycle: ConfigurationLifecycle): InstanceConfiguration {
        this['lifecycle'] = lifecycle;
        return this;
    }
    public withScheduler(scheduler: ConfigurationScheduler): InstanceConfiguration {
        this['scheduler'] = scheduler;
        return this;
    }
    public withProbes(probes: ConfigurationProbes): InstanceConfiguration {
        this['probes'] = probes;
        return this;
    }
}