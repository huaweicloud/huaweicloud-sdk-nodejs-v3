import { Input } from './Input';
import { JobEngine } from './JobEngine';
import { JobPolicies } from './JobPolicies';
import { Output } from './Output';
import { Parameters } from './Parameters';
import { Summary } from './Summary';


export class JobAlgorithm {
    public id?: string;
    public name?: string;
    private 'subscription_id'?: string;
    private 'item_version_id'?: string;
    private 'code_dir'?: string;
    private 'boot_file'?: string;
    private 'autosearch_config_path'?: string;
    private 'autosearch_framework_path'?: string;
    public command?: string;
    public parameters?: Array<Parameters>;
    public policies?: JobPolicies;
    public inputs?: Array<Input>;
    public outputs?: Array<Output>;
    public engine?: JobEngine;
    private 'local_code_dir'?: string;
    private 'working_dir'?: string;
    public environments?: { [key: string]: string; };
    public summary?: Summary;
    public constructor() { 
    }
    public withId(id: string): JobAlgorithm {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobAlgorithm {
        this['name'] = name;
        return this;
    }
    public withSubscriptionId(subscriptionId: string): JobAlgorithm {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withItemVersionId(itemVersionId: string): JobAlgorithm {
        this['item_version_id'] = itemVersionId;
        return this;
    }
    public set itemVersionId(itemVersionId: string  | undefined) {
        this['item_version_id'] = itemVersionId;
    }
    public get itemVersionId(): string | undefined {
        return this['item_version_id'];
    }
    public withCodeDir(codeDir: string): JobAlgorithm {
        this['code_dir'] = codeDir;
        return this;
    }
    public set codeDir(codeDir: string  | undefined) {
        this['code_dir'] = codeDir;
    }
    public get codeDir(): string | undefined {
        return this['code_dir'];
    }
    public withBootFile(bootFile: string): JobAlgorithm {
        this['boot_file'] = bootFile;
        return this;
    }
    public set bootFile(bootFile: string  | undefined) {
        this['boot_file'] = bootFile;
    }
    public get bootFile(): string | undefined {
        return this['boot_file'];
    }
    public withAutosearchConfigPath(autosearchConfigPath: string): JobAlgorithm {
        this['autosearch_config_path'] = autosearchConfigPath;
        return this;
    }
    public set autosearchConfigPath(autosearchConfigPath: string  | undefined) {
        this['autosearch_config_path'] = autosearchConfigPath;
    }
    public get autosearchConfigPath(): string | undefined {
        return this['autosearch_config_path'];
    }
    public withAutosearchFrameworkPath(autosearchFrameworkPath: string): JobAlgorithm {
        this['autosearch_framework_path'] = autosearchFrameworkPath;
        return this;
    }
    public set autosearchFrameworkPath(autosearchFrameworkPath: string  | undefined) {
        this['autosearch_framework_path'] = autosearchFrameworkPath;
    }
    public get autosearchFrameworkPath(): string | undefined {
        return this['autosearch_framework_path'];
    }
    public withCommand(command: string): JobAlgorithm {
        this['command'] = command;
        return this;
    }
    public withParameters(parameters: Array<Parameters>): JobAlgorithm {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicies(policies: JobPolicies): JobAlgorithm {
        this['policies'] = policies;
        return this;
    }
    public withInputs(inputs: Array<Input>): JobAlgorithm {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<Output>): JobAlgorithm {
        this['outputs'] = outputs;
        return this;
    }
    public withEngine(engine: JobEngine): JobAlgorithm {
        this['engine'] = engine;
        return this;
    }
    public withLocalCodeDir(localCodeDir: string): JobAlgorithm {
        this['local_code_dir'] = localCodeDir;
        return this;
    }
    public set localCodeDir(localCodeDir: string  | undefined) {
        this['local_code_dir'] = localCodeDir;
    }
    public get localCodeDir(): string | undefined {
        return this['local_code_dir'];
    }
    public withWorkingDir(workingDir: string): JobAlgorithm {
        this['working_dir'] = workingDir;
        return this;
    }
    public set workingDir(workingDir: string  | undefined) {
        this['working_dir'] = workingDir;
    }
    public get workingDir(): string | undefined {
        return this['working_dir'];
    }
    public withEnvironments(environments: { [key: string]: string; }): JobAlgorithm {
        this['environments'] = environments;
        return this;
    }
    public withSummary(summary: Summary): JobAlgorithm {
        this['summary'] = summary;
        return this;
    }
}