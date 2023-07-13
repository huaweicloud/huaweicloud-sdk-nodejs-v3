

export class NetworkCheckInfoRequestBody {
    private 'network_delay': number | undefined;
    private 'network_jitter': number | undefined;
    private 'migration_speed': number | undefined;
    private 'loss_percentage': number | undefined;
    private 'cpu_usage': number | undefined;
    private 'mem_usage': number | undefined;
    private 'evaluation_result': string | undefined;
    public constructor(networkDelay?: any, networkJitter?: any, migrationSpeed?: any, lossPercentage?: any, cpuUsage?: any, memUsage?: any, evaluationResult?: any) { 
        this['network_delay'] = networkDelay;
        this['network_jitter'] = networkJitter;
        this['migration_speed'] = migrationSpeed;
        this['loss_percentage'] = lossPercentage;
        this['cpu_usage'] = cpuUsage;
        this['mem_usage'] = memUsage;
        this['evaluation_result'] = evaluationResult;
    }
    public withNetworkDelay(networkDelay: number): NetworkCheckInfoRequestBody {
        this['network_delay'] = networkDelay;
        return this;
    }
    public set networkDelay(networkDelay: number | undefined) {
        this['network_delay'] = networkDelay;
    }
    public get networkDelay() {
        return this['network_delay'];
    }
    public withNetworkJitter(networkJitter: number): NetworkCheckInfoRequestBody {
        this['network_jitter'] = networkJitter;
        return this;
    }
    public set networkJitter(networkJitter: number | undefined) {
        this['network_jitter'] = networkJitter;
    }
    public get networkJitter() {
        return this['network_jitter'];
    }
    public withMigrationSpeed(migrationSpeed: number): NetworkCheckInfoRequestBody {
        this['migration_speed'] = migrationSpeed;
        return this;
    }
    public set migrationSpeed(migrationSpeed: number | undefined) {
        this['migration_speed'] = migrationSpeed;
    }
    public get migrationSpeed() {
        return this['migration_speed'];
    }
    public withLossPercentage(lossPercentage: number): NetworkCheckInfoRequestBody {
        this['loss_percentage'] = lossPercentage;
        return this;
    }
    public set lossPercentage(lossPercentage: number | undefined) {
        this['loss_percentage'] = lossPercentage;
    }
    public get lossPercentage() {
        return this['loss_percentage'];
    }
    public withCpuUsage(cpuUsage: number): NetworkCheckInfoRequestBody {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage() {
        return this['cpu_usage'];
    }
    public withMemUsage(memUsage: number): NetworkCheckInfoRequestBody {
        this['mem_usage'] = memUsage;
        return this;
    }
    public set memUsage(memUsage: number | undefined) {
        this['mem_usage'] = memUsage;
    }
    public get memUsage() {
        return this['mem_usage'];
    }
    public withEvaluationResult(evaluationResult: string): NetworkCheckInfoRequestBody {
        this['evaluation_result'] = evaluationResult;
        return this;
    }
    public set evaluationResult(evaluationResult: string | undefined) {
        this['evaluation_result'] = evaluationResult;
    }
    public get evaluationResult() {
        return this['evaluation_result'];
    }
}