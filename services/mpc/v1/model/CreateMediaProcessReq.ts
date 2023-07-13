import { ObsObjInfo } from './ObsObjInfo';


export class CreateMediaProcessReq {
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'template_id'?: string | undefined;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): CreateMediaProcessReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateMediaProcessReq {
        this['output'] = output;
        return this;
    }
    public withTemplateId(templateId: string): CreateMediaProcessReq {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
}