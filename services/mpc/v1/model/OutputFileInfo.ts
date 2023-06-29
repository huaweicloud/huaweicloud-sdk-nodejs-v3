import { SourceInfo } from './SourceInfo';


export class OutputFileInfo {
    private 'output_file_name'?: string | undefined;
    private 'exec_description'?: string | undefined;
    private 'meta_data'?: SourceInfo | undefined;
    public constructor() { 
    }
    public withOutputFileName(outputFileName: string): OutputFileInfo {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: string | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName() {
        return this['output_file_name'];
    }
    public withExecDescription(execDescription: string): OutputFileInfo {
        this['exec_description'] = execDescription;
        return this;
    }
    public set execDescription(execDescription: string | undefined) {
        this['exec_description'] = execDescription;
    }
    public get execDescription() {
        return this['exec_description'];
    }
    public withMetaData(metaData: SourceInfo): OutputFileInfo {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: SourceInfo | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData() {
        return this['meta_data'];
    }
}