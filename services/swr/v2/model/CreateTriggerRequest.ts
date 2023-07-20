import { CreateTriggerRequestBody } from './CreateTriggerRequestBody';


export class CreateTriggerRequest {
    private 'Content-Type'?: CreateTriggerRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public body?: CreateTriggerRequestBody;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateTriggerRequestContentTypeEnum | string): CreateTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateTriggerRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateTriggerRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateTriggerRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): CreateTriggerRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: CreateTriggerRequestBody): CreateTriggerRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTriggerRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
