

export class DatasetConfig {
    private 'dataset_name'?: string;
    private 'dataset_source'?: string;
    private 'dataset_id'?: string;
    private 'split_ratio'?: number;
    private 'used_step'?: string;
    private 'dataset_proportion'?: number;
    public constructor() { 
    }
    public withDatasetName(datasetName: string): DatasetConfig {
        this['dataset_name'] = datasetName;
        return this;
    }
    public set datasetName(datasetName: string  | undefined) {
        this['dataset_name'] = datasetName;
    }
    public get datasetName(): string | undefined {
        return this['dataset_name'];
    }
    public withDatasetSource(datasetSource: string): DatasetConfig {
        this['dataset_source'] = datasetSource;
        return this;
    }
    public set datasetSource(datasetSource: string  | undefined) {
        this['dataset_source'] = datasetSource;
    }
    public get datasetSource(): string | undefined {
        return this['dataset_source'];
    }
    public withDatasetId(datasetId: string): DatasetConfig {
        this['dataset_id'] = datasetId;
        return this;
    }
    public set datasetId(datasetId: string  | undefined) {
        this['dataset_id'] = datasetId;
    }
    public get datasetId(): string | undefined {
        return this['dataset_id'];
    }
    public withSplitRatio(splitRatio: number): DatasetConfig {
        this['split_ratio'] = splitRatio;
        return this;
    }
    public set splitRatio(splitRatio: number  | undefined) {
        this['split_ratio'] = splitRatio;
    }
    public get splitRatio(): number | undefined {
        return this['split_ratio'];
    }
    public withUsedStep(usedStep: string): DatasetConfig {
        this['used_step'] = usedStep;
        return this;
    }
    public set usedStep(usedStep: string  | undefined) {
        this['used_step'] = usedStep;
    }
    public get usedStep(): string | undefined {
        return this['used_step'];
    }
    public withDatasetProportion(datasetProportion: number): DatasetConfig {
        this['dataset_proportion'] = datasetProportion;
        return this;
    }
    public set datasetProportion(datasetProportion: number  | undefined) {
        this['dataset_proportion'] = datasetProportion;
    }
    public get datasetProportion(): number | undefined {
        return this['dataset_proportion'];
    }
}