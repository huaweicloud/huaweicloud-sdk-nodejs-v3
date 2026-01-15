import { Taint } from './Taint';


export class ReinstallK8sOptionsConfig {
    public labels?: { [key: string]: string; };
    public taints?: Array<Taint>;
    public maxPods?: number;
    public nicMultiqueue?: string;
    public nicThreshold?: string;
    public constructor() { 
    }
    public withLabels(labels: { [key: string]: string; }): ReinstallK8sOptionsConfig {
        this['labels'] = labels;
        return this;
    }
    public withTaints(taints: Array<Taint>): ReinstallK8sOptionsConfig {
        this['taints'] = taints;
        return this;
    }
    public withMaxPods(maxPods: number): ReinstallK8sOptionsConfig {
        this['maxPods'] = maxPods;
        return this;
    }
    public withNicMultiqueue(nicMultiqueue: string): ReinstallK8sOptionsConfig {
        this['nicMultiqueue'] = nicMultiqueue;
        return this;
    }
    public withNicThreshold(nicThreshold: string): ReinstallK8sOptionsConfig {
        this['nicThreshold'] = nicThreshold;
        return this;
    }
}