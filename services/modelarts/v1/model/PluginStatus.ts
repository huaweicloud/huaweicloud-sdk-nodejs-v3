import { PluginResources } from './PluginResources';


export class PluginStatus {
    public phase?: string;
    public version?: string;
    public reason?: string;
    public values?: string;
    public resources?: Array<PluginResources>;
    public constructor() { 
    }
    public withPhase(phase: string): PluginStatus {
        this['phase'] = phase;
        return this;
    }
    public withVersion(version: string): PluginStatus {
        this['version'] = version;
        return this;
    }
    public withReason(reason: string): PluginStatus {
        this['reason'] = reason;
        return this;
    }
    public withValues(values: string): PluginStatus {
        this['values'] = values;
        return this;
    }
    public withResources(resources: Array<PluginResources>): PluginStatus {
        this['resources'] = resources;
        return this;
    }
}