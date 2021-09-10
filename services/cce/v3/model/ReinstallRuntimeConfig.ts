import { Runtime } from './Runtime';


export class ReinstallRuntimeConfig {
    public dockerBaseSize?: number;
    public runtime?: Runtime;
    public constructor() { 
    }
    public withDockerBaseSize(dockerBaseSize: number): ReinstallRuntimeConfig {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    public withRuntime(runtime: Runtime): ReinstallRuntimeConfig {
        this['runtime'] = runtime;
        return this;
    }
}