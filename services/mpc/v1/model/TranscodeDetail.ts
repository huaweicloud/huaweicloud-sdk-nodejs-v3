import { MultiTaskInfo } from './MultiTaskInfo';
import { SourceInfo } from './SourceInfo';


export class TranscodeDetail {
    private 'multitask_info'?: Array<MultiTaskInfo>;
    private 'input_file'?: SourceInfo;
    private 'replace_sub_index'?: Array<string>;
    public constructor() { 
    }
    public withMultitaskInfo(multitaskInfo: Array<MultiTaskInfo>): TranscodeDetail {
        this['multitask_info'] = multitaskInfo;
        return this;
    }
    public set multitaskInfo(multitaskInfo: Array<MultiTaskInfo>  | undefined) {
        this['multitask_info'] = multitaskInfo;
    }
    public get multitaskInfo(): Array<MultiTaskInfo> | undefined {
        return this['multitask_info'];
    }
    public withInputFile(inputFile: SourceInfo): TranscodeDetail {
        this['input_file'] = inputFile;
        return this;
    }
    public set inputFile(inputFile: SourceInfo  | undefined) {
        this['input_file'] = inputFile;
    }
    public get inputFile(): SourceInfo | undefined {
        return this['input_file'];
    }
    public withReplaceSubIndex(replaceSubIndex: Array<string>): TranscodeDetail {
        this['replace_sub_index'] = replaceSubIndex;
        return this;
    }
    public set replaceSubIndex(replaceSubIndex: Array<string>  | undefined) {
        this['replace_sub_index'] = replaceSubIndex;
    }
    public get replaceSubIndex(): Array<string> | undefined {
        return this['replace_sub_index'];
    }
}