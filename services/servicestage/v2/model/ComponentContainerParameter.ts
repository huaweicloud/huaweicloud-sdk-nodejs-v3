import { ComponentContainerSize } from './ComponentContainerSize';
import { ComponentStorage } from './ComponentStorage';
import { ConfigurationEnvParam } from './ConfigurationEnvParam';
import { ConfigurationLifecycle } from './ConfigurationLifecycle';
import { ConfigurationProbes } from './ConfigurationProbes';


export class ComponentContainerParameter {
    public name?: string;
    public size?: ComponentContainerSize;
    public env?: Array<ConfigurationEnvParam>;
    public storage?: Array<ComponentStorage>;
    public lifecycle?: ConfigurationLifecycle;
    public probes?: ConfigurationProbes;
    public constructor() { 
    }
    public withName(name: string): ComponentContainerParameter {
        this['name'] = name;
        return this;
    }
    public withSize(size: ComponentContainerSize): ComponentContainerParameter {
        this['size'] = size;
        return this;
    }
    public withEnv(env: Array<ConfigurationEnvParam>): ComponentContainerParameter {
        this['env'] = env;
        return this;
    }
    public withStorage(storage: Array<ComponentStorage>): ComponentContainerParameter {
        this['storage'] = storage;
        return this;
    }
    public withLifecycle(lifecycle: ConfigurationLifecycle): ComponentContainerParameter {
        this['lifecycle'] = lifecycle;
        return this;
    }
    public withProbes(probes: ConfigurationProbes): ComponentContainerParameter {
        this['probes'] = probes;
        return this;
    }
}