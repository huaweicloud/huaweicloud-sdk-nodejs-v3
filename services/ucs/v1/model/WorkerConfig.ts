import { NodeUpgradeStrategy } from './NodeUpgradeStrategy';


export class WorkerConfig {
    public replicas?: number;
    public strategy?: NodeUpgradeStrategy;
    public constructor() { 
    }
    public withReplicas(replicas: number): WorkerConfig {
        this['replicas'] = replicas;
        return this;
    }
    public withStrategy(strategy: NodeUpgradeStrategy): WorkerConfig {
        this['strategy'] = strategy;
        return this;
    }
}