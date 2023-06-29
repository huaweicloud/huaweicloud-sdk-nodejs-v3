import { TemplateTaskRequestBody } from './TemplateTaskRequestBody';


export class CreateDeployTaskByTemplateRequest {
    private 'Content-Type': CreateDeployTaskByTemplateRequestContentTypeEnum | undefined;
    public body?: TemplateTaskRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateDeployTaskByTemplateRequestContentTypeEnum): CreateDeployTaskByTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateDeployTaskByTemplateRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: TemplateTaskRequestBody): CreateDeployTaskByTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDeployTaskByTemplateRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
