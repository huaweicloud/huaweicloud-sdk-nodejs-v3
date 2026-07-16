import { ObjectReference } from './ObjectReference';


export class PluginResources {
    public involvedObject?: ObjectReference;
    public replicas?: number;
    public limits?: { [key: string]: string; };
    public requests?: { [key: string]: string; };
    public constructor() { 
    }
    public withInvolvedObject(involvedObject: ObjectReference): PluginResources {
        this['involvedObject'] = involvedObject;
        return this;
    }
    public withReplicas(replicas: number): PluginResources {
        this['replicas'] = replicas;
        return this;
    }
    public withLimits(limits: { [key: string]: string; }): PluginResources {
        this['limits'] = limits;
        return this;
    }
    public withRequests(requests: { [key: string]: string; }): PluginResources {
        this['requests'] = requests;
        return this;
    }
}