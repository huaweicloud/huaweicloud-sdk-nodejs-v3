import { OperatorArgument } from './OperatorArgument';


export class Properties {
    private 'dataset_num'?: number;
    private 'dataset_size'?: number;
    private 'prompt_config'?: string;
    private 'data_copyright'?: string;
    private 'manifest_file_path'?: string;
    private 'arguments'?: Array<OperatorArgument>;
    public updater?: string;
    public constructor() { 
    }
    public withDatasetNum(datasetNum: number): Properties {
        this['dataset_num'] = datasetNum;
        return this;
    }
    public set datasetNum(datasetNum: number  | undefined) {
        this['dataset_num'] = datasetNum;
    }
    public get datasetNum(): number | undefined {
        return this['dataset_num'];
    }
    public withDatasetSize(datasetSize: number): Properties {
        this['dataset_size'] = datasetSize;
        return this;
    }
    public set datasetSize(datasetSize: number  | undefined) {
        this['dataset_size'] = datasetSize;
    }
    public get datasetSize(): number | undefined {
        return this['dataset_size'];
    }
    public withPromptConfig(promptConfig: string): Properties {
        this['prompt_config'] = promptConfig;
        return this;
    }
    public set promptConfig(promptConfig: string  | undefined) {
        this['prompt_config'] = promptConfig;
    }
    public get promptConfig(): string | undefined {
        return this['prompt_config'];
    }
    public withDataCopyright(dataCopyright: string): Properties {
        this['data_copyright'] = dataCopyright;
        return this;
    }
    public set dataCopyright(dataCopyright: string  | undefined) {
        this['data_copyright'] = dataCopyright;
    }
    public get dataCopyright(): string | undefined {
        return this['data_copyright'];
    }
    public withManifestFilePath(manifestFilePath: string): Properties {
        this['manifest_file_path'] = manifestFilePath;
        return this;
    }
    public set manifestFilePath(manifestFilePath: string  | undefined) {
        this['manifest_file_path'] = manifestFilePath;
    }
    public get manifestFilePath(): string | undefined {
        return this['manifest_file_path'];
    }
    public withArguments(_arguments: Array<OperatorArgument>): Properties {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: Array<OperatorArgument>  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): Array<OperatorArgument> | undefined {
        return this['arguments'];
    }
    public withUpdater(updater: string): Properties {
        this['updater'] = updater;
        return this;
    }
}