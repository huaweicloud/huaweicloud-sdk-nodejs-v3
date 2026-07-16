import { InputResp } from './InputResp';
import { JobAlgorithmResponsePolicies } from './JobAlgorithmResponsePolicies';
import { JobEngineResp } from './JobEngineResp';
import { OutputResp } from './OutputResp';
import { Parameter } from './Parameter';
import { SummaryResp } from './SummaryResp';


export class JobAlgorithmResponse {
    public id?: string;
    public name?: string;
    private 'subscription_id'?: string;
    private 'item_version_id'?: string;
    private 'code_dir'?: string;
    private 'boot_file'?: string;
    private 'autosearch_config_path'?: string;
    private 'autosearch_framework_path'?: string;
    public command?: string;
    public parameters?: Array<Parameter>;
    public policies?: JobAlgorithmResponsePolicies;
    public inputs?: Array<InputResp>;
    public outputs?: Array<OutputResp>;
    public engine?: JobEngineResp;
    private 'local_code_dir'?: string;
    private 'working_dir'?: string;
    public environments?: Array<{ [key: string]: string; }>;
    public summary?: SummaryResp;
    public constructor() { 
    }
    public withId(id: string): JobAlgorithmResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobAlgorithmResponse {
        this['name'] = name;
        return this;
    }
    public withSubscriptionId(subscriptionId: string): JobAlgorithmResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withItemVersionId(itemVersionId: string): JobAlgorithmResponse {
        this['item_version_id'] = itemVersionId;
        return this;
    }
    public set itemVersionId(itemVersionId: string  | undefined) {
        this['item_version_id'] = itemVersionId;
    }
    public get itemVersionId(): string | undefined {
        return this['item_version_id'];
    }
    public withCodeDir(codeDir: string): JobAlgorithmResponse {
        this['code_dir'] = codeDir;
        return this;
    }
    public set codeDir(codeDir: string  | undefined) {
        this['code_dir'] = codeDir;
    }
    public get codeDir(): string | undefined {
        return this['code_dir'];
    }
    public withBootFile(bootFile: string): JobAlgorithmResponse {
        this['boot_file'] = bootFile;
        return this;
    }
    public set bootFile(bootFile: string  | undefined) {
        this['boot_file'] = bootFile;
    }
    public get bootFile(): string | undefined {
        return this['boot_file'];
    }
    public withAutosearchConfigPath(autosearchConfigPath: string): JobAlgorithmResponse {
        this['autosearch_config_path'] = autosearchConfigPath;
        return this;
    }
    public set autosearchConfigPath(autosearchConfigPath: string  | undefined) {
        this['autosearch_config_path'] = autosearchConfigPath;
    }
    public get autosearchConfigPath(): string | undefined {
        return this['autosearch_config_path'];
    }
    public withAutosearchFrameworkPath(autosearchFrameworkPath: string): JobAlgorithmResponse {
        this['autosearch_framework_path'] = autosearchFrameworkPath;
        return this;
    }
    public set autosearchFrameworkPath(autosearchFrameworkPath: string  | undefined) {
        this['autosearch_framework_path'] = autosearchFrameworkPath;
    }
    public get autosearchFrameworkPath(): string | undefined {
        return this['autosearch_framework_path'];
    }
    public withCommand(command: string): JobAlgorithmResponse {
        this['command'] = command;
        return this;
    }
    public withParameters(parameters: Array<Parameter>): JobAlgorithmResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicies(policies: JobAlgorithmResponsePolicies): JobAlgorithmResponse {
        this['policies'] = policies;
        return this;
    }
    public withInputs(inputs: Array<InputResp>): JobAlgorithmResponse {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<OutputResp>): JobAlgorithmResponse {
        this['outputs'] = outputs;
        return this;
    }
    public withEngine(engine: JobEngineResp): JobAlgorithmResponse {
        this['engine'] = engine;
        return this;
    }
    public withLocalCodeDir(localCodeDir: string): JobAlgorithmResponse {
        this['local_code_dir'] = localCodeDir;
        return this;
    }
    public set localCodeDir(localCodeDir: string  | undefined) {
        this['local_code_dir'] = localCodeDir;
    }
    public get localCodeDir(): string | undefined {
        return this['local_code_dir'];
    }
    public withWorkingDir(workingDir: string): JobAlgorithmResponse {
        this['working_dir'] = workingDir;
        return this;
    }
    public set workingDir(workingDir: string  | undefined) {
        this['working_dir'] = workingDir;
    }
    public get workingDir(): string | undefined {
        return this['working_dir'];
    }
    public withEnvironments(environments: Array<{ [key: string]: string; }>): JobAlgorithmResponse {
        this['environments'] = environments;
        return this;
    }
    public withSummary(summary: SummaryResp): JobAlgorithmResponse {
        this['summary'] = summary;
        return this;
    }
}