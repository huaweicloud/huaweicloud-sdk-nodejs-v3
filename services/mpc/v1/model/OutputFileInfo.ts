import { SourceInfo } from './SourceInfo';


export class OutputFileInfo {
    private 'output_file_name'?: string;
    private 'exec_description'?: string;
    private 'meta_data'?: SourceInfo;
    public constructor() { 
    }
    public withOutputFileName(outputFileName: string): OutputFileInfo {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: string  | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName(): string | undefined {
        return this['output_file_name'];
    }
    public withExecDescription(execDescription: string): OutputFileInfo {
        this['exec_description'] = execDescription;
        return this;
    }
    public set execDescription(execDescription: string  | undefined) {
        this['exec_description'] = execDescription;
    }
    public get execDescription(): string | undefined {
        return this['exec_description'];
    }
    public withMetaData(metaData: SourceInfo): OutputFileInfo {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: SourceInfo  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): SourceInfo | undefined {
        return this['meta_data'];
    }
}