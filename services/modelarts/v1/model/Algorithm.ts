import { AlgorithmAdvancedConfig } from './AlgorithmAdvancedConfig';
import { AlgorithmJobConfig } from './AlgorithmJobConfig';
import { AlgorithmMetadata } from './AlgorithmMetadata';
import { ResourceRequirement } from './ResourceRequirement';


export class Algorithm {
    public metadata?: AlgorithmMetadata;
    private 'job_config'?: AlgorithmJobConfig;
    private 'resource_requirements'?: Array<ResourceRequirement>;
    private 'advanced_config'?: AlgorithmAdvancedConfig;
    public constructor() { 
    }
    public withMetadata(metadata: AlgorithmMetadata): Algorithm {
        this['metadata'] = metadata;
        return this;
    }
    public withJobConfig(jobConfig: AlgorithmJobConfig): Algorithm {
        this['job_config'] = jobConfig;
        return this;
    }
    public set jobConfig(jobConfig: AlgorithmJobConfig  | undefined) {
        this['job_config'] = jobConfig;
    }
    public get jobConfig(): AlgorithmJobConfig | undefined {
        return this['job_config'];
    }
    public withResourceRequirements(resourceRequirements: Array<ResourceRequirement>): Algorithm {
        this['resource_requirements'] = resourceRequirements;
        return this;
    }
    public set resourceRequirements(resourceRequirements: Array<ResourceRequirement>  | undefined) {
        this['resource_requirements'] = resourceRequirements;
    }
    public get resourceRequirements(): Array<ResourceRequirement> | undefined {
        return this['resource_requirements'];
    }
    public withAdvancedConfig(advancedConfig: AlgorithmAdvancedConfig): Algorithm {
        this['advanced_config'] = advancedConfig;
        return this;
    }
    public set advancedConfig(advancedConfig: AlgorithmAdvancedConfig  | undefined) {
        this['advanced_config'] = advancedConfig;
    }
    public get advancedConfig(): AlgorithmAdvancedConfig | undefined {
        return this['advanced_config'];
    }
}