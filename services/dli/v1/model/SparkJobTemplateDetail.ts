import { JobResource } from './JobResource';
import { JobResourcesGroup } from './JobResourcesGroup';


export class SparkJobTemplateDetail {
    public file?: string;
    public className?: string;
    private 'cluster_name'?: string;
    public args?: Array<string>;
    private 'sc_type'?: string;
    public jars?: Array<string>;
    public pyFiles?: Array<string>;
    public files?: Array<string>;
    public modules?: Array<string>;
    public resources?: Array<JobResource>;
    public groups?: Array<JobResourcesGroup>;
    public conf?: { [key: string]: object; };
    public name?: string;
    public driverMemory?: string;
    public driverCores?: number;
    public executorMemory?: string;
    public executorCores?: number;
    public numExecutors?: number;
    public feature?: SparkJobTemplateDetailFeatureEnum | string;
    private 'spark_version'?: string;
    public queue?: string;
    private 'auto_recovery'?: boolean;
    private 'max_retry_times'?: number;
    public image?: string;
    private 'obs_bucket'?: string;
    private 'catalog_name'?: string;
    public constructor(file?: string, className?: string) { 
        this['file'] = file;
        this['className'] = className;
    }
    public withFile(file: string): SparkJobTemplateDetail {
        this['file'] = file;
        return this;
    }
    public withClassName(className: string): SparkJobTemplateDetail {
        this['className'] = className;
        return this;
    }
    public withClusterName(clusterName: string): SparkJobTemplateDetail {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withArgs(args: Array<string>): SparkJobTemplateDetail {
        this['args'] = args;
        return this;
    }
    public withScType(scType: string): SparkJobTemplateDetail {
        this['sc_type'] = scType;
        return this;
    }
    public set scType(scType: string  | undefined) {
        this['sc_type'] = scType;
    }
    public get scType(): string | undefined {
        return this['sc_type'];
    }
    public withJars(jars: Array<string>): SparkJobTemplateDetail {
        this['jars'] = jars;
        return this;
    }
    public withPyFiles(pyFiles: Array<string>): SparkJobTemplateDetail {
        this['pyFiles'] = pyFiles;
        return this;
    }
    public withFiles(files: Array<string>): SparkJobTemplateDetail {
        this['files'] = files;
        return this;
    }
    public withModules(modules: Array<string>): SparkJobTemplateDetail {
        this['modules'] = modules;
        return this;
    }
    public withResources(resources: Array<JobResource>): SparkJobTemplateDetail {
        this['resources'] = resources;
        return this;
    }
    public withGroups(groups: Array<JobResourcesGroup>): SparkJobTemplateDetail {
        this['groups'] = groups;
        return this;
    }
    public withConf(conf: { [key: string]: object; }): SparkJobTemplateDetail {
        this['conf'] = conf;
        return this;
    }
    public withName(name: string): SparkJobTemplateDetail {
        this['name'] = name;
        return this;
    }
    public withDriverMemory(driverMemory: string): SparkJobTemplateDetail {
        this['driverMemory'] = driverMemory;
        return this;
    }
    public withDriverCores(driverCores: number): SparkJobTemplateDetail {
        this['driverCores'] = driverCores;
        return this;
    }
    public withExecutorMemory(executorMemory: string): SparkJobTemplateDetail {
        this['executorMemory'] = executorMemory;
        return this;
    }
    public withExecutorCores(executorCores: number): SparkJobTemplateDetail {
        this['executorCores'] = executorCores;
        return this;
    }
    public withNumExecutors(numExecutors: number): SparkJobTemplateDetail {
        this['numExecutors'] = numExecutors;
        return this;
    }
    public withFeature(feature: SparkJobTemplateDetailFeatureEnum | string): SparkJobTemplateDetail {
        this['feature'] = feature;
        return this;
    }
    public withSparkVersion(sparkVersion: string): SparkJobTemplateDetail {
        this['spark_version'] = sparkVersion;
        return this;
    }
    public set sparkVersion(sparkVersion: string  | undefined) {
        this['spark_version'] = sparkVersion;
    }
    public get sparkVersion(): string | undefined {
        return this['spark_version'];
    }
    public withQueue(queue: string): SparkJobTemplateDetail {
        this['queue'] = queue;
        return this;
    }
    public withAutoRecovery(autoRecovery: boolean): SparkJobTemplateDetail {
        this['auto_recovery'] = autoRecovery;
        return this;
    }
    public set autoRecovery(autoRecovery: boolean  | undefined) {
        this['auto_recovery'] = autoRecovery;
    }
    public get autoRecovery(): boolean | undefined {
        return this['auto_recovery'];
    }
    public withMaxRetryTimes(maxRetryTimes: number): SparkJobTemplateDetail {
        this['max_retry_times'] = maxRetryTimes;
        return this;
    }
    public set maxRetryTimes(maxRetryTimes: number  | undefined) {
        this['max_retry_times'] = maxRetryTimes;
    }
    public get maxRetryTimes(): number | undefined {
        return this['max_retry_times'];
    }
    public withImage(image: string): SparkJobTemplateDetail {
        this['image'] = image;
        return this;
    }
    public withObsBucket(obsBucket: string): SparkJobTemplateDetail {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withCatalogName(catalogName: string): SparkJobTemplateDetail {
        this['catalog_name'] = catalogName;
        return this;
    }
    public set catalogName(catalogName: string  | undefined) {
        this['catalog_name'] = catalogName;
    }
    public get catalogName(): string | undefined {
        return this['catalog_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SparkJobTemplateDetailFeatureEnum {
    BASIC = 'basic',
    AI = 'ai',
    CUSTOM = 'custom'
}
