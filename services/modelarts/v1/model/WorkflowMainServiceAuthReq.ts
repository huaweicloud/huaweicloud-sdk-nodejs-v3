import { WorkflowConsume } from './WorkflowConsume';


export class WorkflowMainServiceAuthReq {
    private 'main_service_id'?: string;
    private 'content_id'?: string;
    public consume?: WorkflowConsume;
    public constructor() { 
    }
    public withMainServiceId(mainServiceId: string): WorkflowMainServiceAuthReq {
        this['main_service_id'] = mainServiceId;
        return this;
    }
    public set mainServiceId(mainServiceId: string  | undefined) {
        this['main_service_id'] = mainServiceId;
    }
    public get mainServiceId(): string | undefined {
        return this['main_service_id'];
    }
    public withContentId(contentId: string): WorkflowMainServiceAuthReq {
        this['content_id'] = contentId;
        return this;
    }
    public set contentId(contentId: string  | undefined) {
        this['content_id'] = contentId;
    }
    public get contentId(): string | undefined {
        return this['content_id'];
    }
    public withConsume(consume: WorkflowConsume): WorkflowMainServiceAuthReq {
        this['consume'] = consume;
        return this;
    }
}