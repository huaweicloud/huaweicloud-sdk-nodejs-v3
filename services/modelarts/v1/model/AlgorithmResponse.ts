import { AlgorithmResponseAdvancedConfig } from './AlgorithmResponseAdvancedConfig';
import { AlgorithmResponseJobConfig } from './AlgorithmResponseJobConfig';
import { AlgorithmResponseMetadata } from './AlgorithmResponseMetadata';
import { AlgorithmResponseResourceRequirements } from './AlgorithmResponseResourceRequirements';


export class AlgorithmResponse {
    public metadata?: AlgorithmResponseMetadata;
    private 'job_config'?: AlgorithmResponseJobConfig;
    private 'resource_requirements'?: Array<AlgorithmResponseResourceRequirements>;
    private 'advanced_config'?: AlgorithmResponseAdvancedConfig;
    public constructor() { 
    }
    public withMetadata(metadata: AlgorithmResponseMetadata): AlgorithmResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withJobConfig(jobConfig: AlgorithmResponseJobConfig): AlgorithmResponse {
        this['job_config'] = jobConfig;
        return this;
    }
    public set jobConfig(jobConfig: AlgorithmResponseJobConfig  | undefined) {
        this['job_config'] = jobConfig;
    }
    public get jobConfig(): AlgorithmResponseJobConfig | undefined {
        return this['job_config'];
    }
    public withResourceRequirements(resourceRequirements: Array<AlgorithmResponseResourceRequirements>): AlgorithmResponse {
        this['resource_requirements'] = resourceRequirements;
        return this;
    }
    public set resourceRequirements(resourceRequirements: Array<AlgorithmResponseResourceRequirements>  | undefined) {
        this['resource_requirements'] = resourceRequirements;
    }
    public get resourceRequirements(): Array<AlgorithmResponseResourceRequirements> | undefined {
        return this['resource_requirements'];
    }
    public withAdvancedConfig(advancedConfig: AlgorithmResponseAdvancedConfig): AlgorithmResponse {
        this['advanced_config'] = advancedConfig;
        return this;
    }
    public set advancedConfig(advancedConfig: AlgorithmResponseAdvancedConfig  | undefined) {
        this['advanced_config'] = advancedConfig;
    }
    public get advancedConfig(): AlgorithmResponseAdvancedConfig | undefined {
        return this['advanced_config'];
    }
}