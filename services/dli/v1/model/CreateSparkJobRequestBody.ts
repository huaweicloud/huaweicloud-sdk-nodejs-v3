import { JobResource } from './JobResource';
import { JobResourcesGroup } from './JobResourcesGroup';


export class CreateSparkJobRequestBody {
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
    public feature?: CreateSparkJobRequestBodyFeatureEnum | string;
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
    public withFile(file: string): CreateSparkJobRequestBody {
        this['file'] = file;
        return this;
    }
    public withClassName(className: string): CreateSparkJobRequestBody {
        this['className'] = className;
        return this;
    }
    public withClusterName(clusterName: string): CreateSparkJobRequestBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withArgs(args: Array<string>): CreateSparkJobRequestBody {
        this['args'] = args;
        return this;
    }
    public withScType(scType: string): CreateSparkJobRequestBody {
        this['sc_type'] = scType;
        return this;
    }
    public set scType(scType: string  | undefined) {
        this['sc_type'] = scType;
    }
    public get scType(): string | undefined {
        return this['sc_type'];
    }
    public withJars(jars: Array<string>): CreateSparkJobRequestBody {
        this['jars'] = jars;
        return this;
    }
    public withPyFiles(pyFiles: Array<string>): CreateSparkJobRequestBody {
        this['pyFiles'] = pyFiles;
        return this;
    }
    public withFiles(files: Array<string>): CreateSparkJobRequestBody {
        this['files'] = files;
        return this;
    }
    public withModules(modules: Array<string>): CreateSparkJobRequestBody {
        this['modules'] = modules;
        return this;
    }
    public withResources(resources: Array<JobResource>): CreateSparkJobRequestBody {
        this['resources'] = resources;
        return this;
    }
    public withGroups(groups: Array<JobResourcesGroup>): CreateSparkJobRequestBody {
        this['groups'] = groups;
        return this;
    }
    public withConf(conf: { [key: string]: object; }): CreateSparkJobRequestBody {
        this['conf'] = conf;
        return this;
    }
    public withName(name: string): CreateSparkJobRequestBody {
        this['name'] = name;
        return this;
    }
    public withDriverMemory(driverMemory: string): CreateSparkJobRequestBody {
        this['driverMemory'] = driverMemory;
        return this;
    }
    public withDriverCores(driverCores: number): CreateSparkJobRequestBody {
        this['driverCores'] = driverCores;
        return this;
    }
    public withExecutorMemory(executorMemory: string): CreateSparkJobRequestBody {
        this['executorMemory'] = executorMemory;
        return this;
    }
    public withExecutorCores(executorCores: number): CreateSparkJobRequestBody {
        this['executorCores'] = executorCores;
        return this;
    }
    public withNumExecutors(numExecutors: number): CreateSparkJobRequestBody {
        this['numExecutors'] = numExecutors;
        return this;
    }
    public withFeature(feature: CreateSparkJobRequestBodyFeatureEnum | string): CreateSparkJobRequestBody {
        this['feature'] = feature;
        return this;
    }
    public withSparkVersion(sparkVersion: string): CreateSparkJobRequestBody {
        this['spark_version'] = sparkVersion;
        return this;
    }
    public set sparkVersion(sparkVersion: string  | undefined) {
        this['spark_version'] = sparkVersion;
    }
    public get sparkVersion(): string | undefined {
        return this['spark_version'];
    }
    public withQueue(queue: string): CreateSparkJobRequestBody {
        this['queue'] = queue;
        return this;
    }
    public withAutoRecovery(autoRecovery: boolean): CreateSparkJobRequestBody {
        this['auto_recovery'] = autoRecovery;
        return this;
    }
    public set autoRecovery(autoRecovery: boolean  | undefined) {
        this['auto_recovery'] = autoRecovery;
    }
    public get autoRecovery(): boolean | undefined {
        return this['auto_recovery'];
    }
    public withMaxRetryTimes(maxRetryTimes: number): CreateSparkJobRequestBody {
        this['max_retry_times'] = maxRetryTimes;
        return this;
    }
    public set maxRetryTimes(maxRetryTimes: number  | undefined) {
        this['max_retry_times'] = maxRetryTimes;
    }
    public get maxRetryTimes(): number | undefined {
        return this['max_retry_times'];
    }
    public withImage(image: string): CreateSparkJobRequestBody {
        this['image'] = image;
        return this;
    }
    public withObsBucket(obsBucket: string): CreateSparkJobRequestBody {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withCatalogName(catalogName: string): CreateSparkJobRequestBody {
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
export enum CreateSparkJobRequestBodyFeatureEnum {
    BASIC = 'basic',
    AI = 'ai',
    CUSTOM = 'custom'
}
