

export class WorkloadStatisticsInfo {
    public infer?: number;
    public notebook?: number;
    public train?: number;
    public warmUpTask?: number;
    private 'x-infer'?: number;
    public sum?: number;
    public constructor() { 
    }
    public withInfer(infer: number): WorkloadStatisticsInfo {
        this['infer'] = infer;
        return this;
    }
    public withNotebook(notebook: number): WorkloadStatisticsInfo {
        this['notebook'] = notebook;
        return this;
    }
    public withTrain(train: number): WorkloadStatisticsInfo {
        this['train'] = train;
        return this;
    }
    public withWarmUpTask(warmUpTask: number): WorkloadStatisticsInfo {
        this['warmUpTask'] = warmUpTask;
        return this;
    }
    public withXInfer(xInfer: number): WorkloadStatisticsInfo {
        this['x-infer'] = xInfer;
        return this;
    }
    public set xInfer(xInfer: number  | undefined) {
        this['x-infer'] = xInfer;
    }
    public get xInfer(): number | undefined {
        return this['x-infer'];
    }
    public withSum(sum: number): WorkloadStatisticsInfo {
        this['sum'] = sum;
        return this;
    }
}