import { PipelineByTemplateDTO } from './PipelineByTemplateDTO';


export class CreatePipelineByTemplateIdRequest {
    private 'template_id'?: string;
    private 'component_id'?: string;
    public body?: PipelineByTemplateDTO;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): CreatePipelineByTemplateIdRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withComponentId(componentId: string): CreatePipelineByTemplateIdRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withBody(body: PipelineByTemplateDTO): CreatePipelineByTemplateIdRequest {
        this['body'] = body;
        return this;
    }
}