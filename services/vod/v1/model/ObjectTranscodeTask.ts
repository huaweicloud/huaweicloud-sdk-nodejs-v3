import { ObsInfo } from './ObsInfo';


export class ObjectTranscodeTask {
    private 'trans_template_id'?: string;
    private 'output_name'?: string;
    public output?: ObsInfo;
    public constructor(transTemplateId?: string) { 
        this['trans_template_id'] = transTemplateId;
    }
    public withTransTemplateId(transTemplateId: string): ObjectTranscodeTask {
        this['trans_template_id'] = transTemplateId;
        return this;
    }
    public set transTemplateId(transTemplateId: string  | undefined) {
        this['trans_template_id'] = transTemplateId;
    }
    public get transTemplateId(): string | undefined {
        return this['trans_template_id'];
    }
    public withOutputName(outputName: string): ObjectTranscodeTask {
        this['output_name'] = outputName;
        return this;
    }
    public set outputName(outputName: string  | undefined) {
        this['output_name'] = outputName;
    }
    public get outputName(): string | undefined {
        return this['output_name'];
    }
    public withOutput(output: ObsInfo): ObjectTranscodeTask {
        this['output'] = output;
        return this;
    }
}