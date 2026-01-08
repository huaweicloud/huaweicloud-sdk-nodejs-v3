import { ObsObjInfo } from './ObsObjInfo';


export class TransIdTemplate {
    private 'template_id'?: number;
    public output?: ObsObjInfo;
    private 'output_filename'?: string;
    public constructor(templateId?: number) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: number): TransIdTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withOutput(output: ObsObjInfo): TransIdTemplate {
        this['output'] = output;
        return this;
    }
    public withOutputFilename(outputFilename: string): TransIdTemplate {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string  | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename(): string | undefined {
        return this['output_filename'];
    }
}