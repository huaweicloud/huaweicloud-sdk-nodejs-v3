import { ComponentProbe } from './ComponentProbe';


export class ConfigurationProbes {
    public livenessProbe?: ComponentProbe;
    public readinessProbe?: ComponentProbe;
    public constructor() { 
    }
    public withLivenessProbe(livenessProbe: ComponentProbe): ConfigurationProbes {
        this['livenessProbe'] = livenessProbe;
        return this;
    }
    public withReadinessProbe(readinessProbe: ComponentProbe): ConfigurationProbes {
        this['readinessProbe'] = readinessProbe;
        return this;
    }
}