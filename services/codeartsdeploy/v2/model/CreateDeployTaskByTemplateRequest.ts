import { TemplateTaskRequestBody } from './TemplateTaskRequestBody';


export class CreateDeployTaskByTemplateRequest {
    private 'Content-Type'?: CreateDeployTaskByTemplateRequestContentTypeEnum | string;
    public body?: TemplateTaskRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateDeployTaskByTemplateRequestContentTypeEnum | string): CreateDeployTaskByTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateDeployTaskByTemplateRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateDeployTaskByTemplateRequestContentTypeEnum | string | undefined {
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
