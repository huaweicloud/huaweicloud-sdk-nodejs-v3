

export class NetworkCheckInfoRequestBody {
    private 'domain_connectivity'?: boolean;
    private 'destination_connectivity'?: boolean;
    private 'network_delay'?: number;
    private 'network_jitter'?: number;
    private 'migration_speed'?: number;
    private 'loss_percentage'?: number;
    private 'cpu_usage'?: number;
    private 'mem_usage'?: number;
    private 'evaluation_result'?: string;
    public constructor(networkDelay?: number, networkJitter?: number, migrationSpeed?: number, lossPercentage?: number, cpuUsage?: number, memUsage?: number, evaluationResult?: string) { 
        this['network_delay'] = networkDelay;
        this['network_jitter'] = networkJitter;
        this['migration_speed'] = migrationSpeed;
        this['loss_percentage'] = lossPercentage;
        this['cpu_usage'] = cpuUsage;
        this['mem_usage'] = memUsage;
        this['evaluation_result'] = evaluationResult;
    }
    public withDomainConnectivity(domainConnectivity: boolean): NetworkCheckInfoRequestBody {
        this['domain_connectivity'] = domainConnectivity;
        return this;
    }
    public set domainConnectivity(domainConnectivity: boolean  | undefined) {
        this['domain_connectivity'] = domainConnectivity;
    }
    public get domainConnectivity(): boolean | undefined {
        return this['domain_connectivity'];
    }
    public withDestinationConnectivity(destinationConnectivity: boolean): NetworkCheckInfoRequestBody {
        this['destination_connectivity'] = destinationConnectivity;
        return this;
    }
    public set destinationConnectivity(destinationConnectivity: boolean  | undefined) {
        this['destination_connectivity'] = destinationConnectivity;
    }
    public get destinationConnectivity(): boolean | undefined {
        return this['destination_connectivity'];
    }
    public withNetworkDelay(networkDelay: number): NetworkCheckInfoRequestBody {
        this['network_delay'] = networkDelay;
        return this;
    }
    public set networkDelay(networkDelay: number  | undefined) {
        this['network_delay'] = networkDelay;
    }
    public get networkDelay(): number | undefined {
        return this['network_delay'];
    }
    public withNetworkJitter(networkJitter: number): NetworkCheckInfoRequestBody {
        this['network_jitter'] = networkJitter;
        return this;
    }
    public set networkJitter(networkJitter: number  | undefined) {
        this['network_jitter'] = networkJitter;
    }
    public get networkJitter(): number | undefined {
        return this['network_jitter'];
    }
    public withMigrationSpeed(migrationSpeed: number): NetworkCheckInfoRequestBody {
        this['migration_speed'] = migrationSpeed;
        return this;
    }
    public set migrationSpeed(migrationSpeed: number  | undefined) {
        this['migration_speed'] = migrationSpeed;
    }
    public get migrationSpeed(): number | undefined {
        return this['migration_speed'];
    }
    public withLossPercentage(lossPercentage: number): NetworkCheckInfoRequestBody {
        this['loss_percentage'] = lossPercentage;
        return this;
    }
    public set lossPercentage(lossPercentage: number  | undefined) {
        this['loss_percentage'] = lossPercentage;
    }
    public get lossPercentage(): number | undefined {
        return this['loss_percentage'];
    }
    public withCpuUsage(cpuUsage: number): NetworkCheckInfoRequestBody {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withMemUsage(memUsage: number): NetworkCheckInfoRequestBody {
        this['mem_usage'] = memUsage;
        return this;
    }
    public set memUsage(memUsage: number  | undefined) {
        this['mem_usage'] = memUsage;
    }
    public get memUsage(): number | undefined {
        return this['mem_usage'];
    }
    public withEvaluationResult(evaluationResult: string): NetworkCheckInfoRequestBody {
        this['evaluation_result'] = evaluationResult;
        return this;
    }
    public set evaluationResult(evaluationResult: string  | undefined) {
        this['evaluation_result'] = evaluationResult;
    }
    public get evaluationResult(): string | undefined {
        return this['evaluation_result'];
    }
}