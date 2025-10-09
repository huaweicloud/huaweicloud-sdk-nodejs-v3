import { Runtime } from './Runtime';


export class ReinstallRuntimeConfig {
    public dockerBaseSize?: number;
    public containerBaseSize?: number;
    public runtime?: Runtime;
    public constructor() { 
    }
    public withDockerBaseSize(dockerBaseSize: number): ReinstallRuntimeConfig {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    public withContainerBaseSize(containerBaseSize: number): ReinstallRuntimeConfig {
        this['containerBaseSize'] = containerBaseSize;
        return this;
    }
    public withRuntime(runtime: Runtime): ReinstallRuntimeConfig {
        this['runtime'] = runtime;
        return this;
    }
}