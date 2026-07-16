import { AlgorithmCreateEngine } from './AlgorithmCreateEngine';
import { AlgorithmCreateInput } from './AlgorithmCreateInput';
import { AlgorithmCreateOutput } from './AlgorithmCreateOutput';
import { Parameters } from './Parameters';


export class AlgorithmJobConfig {
    private 'code_dir'?: string;
    private 'boot_file'?: string;
    public command?: string;
    public parameters?: Array<Parameters>;
    public inputs?: Array<AlgorithmCreateInput>;
    public outputs?: Array<AlgorithmCreateOutput>;
    public engine?: AlgorithmCreateEngine;
    private 'parameters_customization'?: boolean;
    public constructor() { 
    }
    public withCodeDir(codeDir: string): AlgorithmJobConfig {
        this['code_dir'] = codeDir;
        return this;
    }
    public set codeDir(codeDir: string  | undefined) {
        this['code_dir'] = codeDir;
    }
    public get codeDir(): string | undefined {
        return this['code_dir'];
    }
    public withBootFile(bootFile: string): AlgorithmJobConfig {
        this['boot_file'] = bootFile;
        return this;
    }
    public set bootFile(bootFile: string  | undefined) {
        this['boot_file'] = bootFile;
    }
    public get bootFile(): string | undefined {
        return this['boot_file'];
    }
    public withCommand(command: string): AlgorithmJobConfig {
        this['command'] = command;
        return this;
    }
    public withParameters(parameters: Array<Parameters>): AlgorithmJobConfig {
        this['parameters'] = parameters;
        return this;
    }
    public withInputs(inputs: Array<AlgorithmCreateInput>): AlgorithmJobConfig {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<AlgorithmCreateOutput>): AlgorithmJobConfig {
        this['outputs'] = outputs;
        return this;
    }
    public withEngine(engine: AlgorithmCreateEngine): AlgorithmJobConfig {
        this['engine'] = engine;
        return this;
    }
    public withParametersCustomization(parametersCustomization: boolean): AlgorithmJobConfig {
        this['parameters_customization'] = parametersCustomization;
        return this;
    }
    public set parametersCustomization(parametersCustomization: boolean  | undefined) {
        this['parameters_customization'] = parametersCustomization;
    }
    public get parametersCustomization(): boolean | undefined {
        return this['parameters_customization'];
    }
}