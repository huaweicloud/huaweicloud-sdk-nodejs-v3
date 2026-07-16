import { AlgorithmResponseJobConfigEngine } from './AlgorithmResponseJobConfigEngine';
import { AlgorithmResponseJobConfigInputs } from './AlgorithmResponseJobConfigInputs';
import { AlgorithmResponseJobConfigOutputs } from './AlgorithmResponseJobConfigOutputs';
import { CodeTreeNode } from './CodeTreeNode';
import { Parameter } from './Parameter';


export class AlgorithmResponseJobConfig {
    private 'code_dir'?: string;
    private 'boot_file'?: string;
    public command?: string;
    public parameters?: Array<Parameter>;
    public inputs?: Array<AlgorithmResponseJobConfigInputs>;
    public outputs?: Array<AlgorithmResponseJobConfigOutputs>;
    public engine?: AlgorithmResponseJobConfigEngine;
    private 'code_tree'?: CodeTreeNode;
    private 'parameters_customization'?: boolean;
    public constructor() { 
    }
    public withCodeDir(codeDir: string): AlgorithmResponseJobConfig {
        this['code_dir'] = codeDir;
        return this;
    }
    public set codeDir(codeDir: string  | undefined) {
        this['code_dir'] = codeDir;
    }
    public get codeDir(): string | undefined {
        return this['code_dir'];
    }
    public withBootFile(bootFile: string): AlgorithmResponseJobConfig {
        this['boot_file'] = bootFile;
        return this;
    }
    public set bootFile(bootFile: string  | undefined) {
        this['boot_file'] = bootFile;
    }
    public get bootFile(): string | undefined {
        return this['boot_file'];
    }
    public withCommand(command: string): AlgorithmResponseJobConfig {
        this['command'] = command;
        return this;
    }
    public withParameters(parameters: Array<Parameter>): AlgorithmResponseJobConfig {
        this['parameters'] = parameters;
        return this;
    }
    public withInputs(inputs: Array<AlgorithmResponseJobConfigInputs>): AlgorithmResponseJobConfig {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<AlgorithmResponseJobConfigOutputs>): AlgorithmResponseJobConfig {
        this['outputs'] = outputs;
        return this;
    }
    public withEngine(engine: AlgorithmResponseJobConfigEngine): AlgorithmResponseJobConfig {
        this['engine'] = engine;
        return this;
    }
    public withCodeTree(codeTree: CodeTreeNode): AlgorithmResponseJobConfig {
        this['code_tree'] = codeTree;
        return this;
    }
    public set codeTree(codeTree: CodeTreeNode  | undefined) {
        this['code_tree'] = codeTree;
    }
    public get codeTree(): CodeTreeNode | undefined {
        return this['code_tree'];
    }
    public withParametersCustomization(parametersCustomization: boolean): AlgorithmResponseJobConfig {
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