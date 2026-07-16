import { AlgorithmEngine } from './AlgorithmEngine';
import { AlgorithmInput } from './AlgorithmInput';
import { AlgorithmOutput } from './AlgorithmOutput';


export class TaskResponseAlgorithm {
    private 'code_dir'?: string;
    private 'boot_file'?: string;
    public inputs?: AlgorithmInput;
    public outputs?: AlgorithmOutput;
    public engine?: AlgorithmEngine;
    private 'local_code_dir'?: string;
    private 'working_dir'?: string;
    public environments?: { [key: string]: string; };
    public constructor() { 
    }
    public withCodeDir(codeDir: string): TaskResponseAlgorithm {
        this['code_dir'] = codeDir;
        return this;
    }
    public set codeDir(codeDir: string  | undefined) {
        this['code_dir'] = codeDir;
    }
    public get codeDir(): string | undefined {
        return this['code_dir'];
    }
    public withBootFile(bootFile: string): TaskResponseAlgorithm {
        this['boot_file'] = bootFile;
        return this;
    }
    public set bootFile(bootFile: string  | undefined) {
        this['boot_file'] = bootFile;
    }
    public get bootFile(): string | undefined {
        return this['boot_file'];
    }
    public withInputs(inputs: AlgorithmInput): TaskResponseAlgorithm {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: AlgorithmOutput): TaskResponseAlgorithm {
        this['outputs'] = outputs;
        return this;
    }
    public withEngine(engine: AlgorithmEngine): TaskResponseAlgorithm {
        this['engine'] = engine;
        return this;
    }
    public withLocalCodeDir(localCodeDir: string): TaskResponseAlgorithm {
        this['local_code_dir'] = localCodeDir;
        return this;
    }
    public set localCodeDir(localCodeDir: string  | undefined) {
        this['local_code_dir'] = localCodeDir;
    }
    public get localCodeDir(): string | undefined {
        return this['local_code_dir'];
    }
    public withWorkingDir(workingDir: string): TaskResponseAlgorithm {
        this['working_dir'] = workingDir;
        return this;
    }
    public set workingDir(workingDir: string  | undefined) {
        this['working_dir'] = workingDir;
    }
    public get workingDir(): string | undefined {
        return this['working_dir'];
    }
    public withEnvironments(environments: { [key: string]: string; }): TaskResponseAlgorithm {
        this['environments'] = environments;
        return this;
    }
}