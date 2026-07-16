import { TaskAlgorithmEngine } from './TaskAlgorithmEngine';
import { TaskAlgorithmInputs } from './TaskAlgorithmInputs';
import { TaskAlgorithmJobConfig } from './TaskAlgorithmJobConfig';
import { TaskAlgorithmOutputs } from './TaskAlgorithmOutputs';


export class TaskAlgorithm {
    private 'job_config'?: TaskAlgorithmJobConfig;
    private 'code_dir'?: string;
    private 'boot_file'?: string;
    public engine?: TaskAlgorithmEngine;
    public inputs?: Array<TaskAlgorithmInputs>;
    public outputs?: Array<TaskAlgorithmOutputs>;
    private 'local_code_dir'?: string;
    private 'working_dir'?: string;
    public environments?: { [key: string]: string; };
    public constructor() { 
    }
    public withJobConfig(jobConfig: TaskAlgorithmJobConfig): TaskAlgorithm {
        this['job_config'] = jobConfig;
        return this;
    }
    public set jobConfig(jobConfig: TaskAlgorithmJobConfig  | undefined) {
        this['job_config'] = jobConfig;
    }
    public get jobConfig(): TaskAlgorithmJobConfig | undefined {
        return this['job_config'];
    }
    public withCodeDir(codeDir: string): TaskAlgorithm {
        this['code_dir'] = codeDir;
        return this;
    }
    public set codeDir(codeDir: string  | undefined) {
        this['code_dir'] = codeDir;
    }
    public get codeDir(): string | undefined {
        return this['code_dir'];
    }
    public withBootFile(bootFile: string): TaskAlgorithm {
        this['boot_file'] = bootFile;
        return this;
    }
    public set bootFile(bootFile: string  | undefined) {
        this['boot_file'] = bootFile;
    }
    public get bootFile(): string | undefined {
        return this['boot_file'];
    }
    public withEngine(engine: TaskAlgorithmEngine): TaskAlgorithm {
        this['engine'] = engine;
        return this;
    }
    public withInputs(inputs: Array<TaskAlgorithmInputs>): TaskAlgorithm {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<TaskAlgorithmOutputs>): TaskAlgorithm {
        this['outputs'] = outputs;
        return this;
    }
    public withLocalCodeDir(localCodeDir: string): TaskAlgorithm {
        this['local_code_dir'] = localCodeDir;
        return this;
    }
    public set localCodeDir(localCodeDir: string  | undefined) {
        this['local_code_dir'] = localCodeDir;
    }
    public get localCodeDir(): string | undefined {
        return this['local_code_dir'];
    }
    public withWorkingDir(workingDir: string): TaskAlgorithm {
        this['working_dir'] = workingDir;
        return this;
    }
    public set workingDir(workingDir: string  | undefined) {
        this['working_dir'] = workingDir;
    }
    public get workingDir(): string | undefined {
        return this['working_dir'];
    }
    public withEnvironments(environments: { [key: string]: string; }): TaskAlgorithm {
        this['environments'] = environments;
        return this;
    }
}