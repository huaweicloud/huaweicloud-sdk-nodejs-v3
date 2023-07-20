import { UpdateTriggerRequestBody } from './UpdateTriggerRequestBody';


export class UpdateTriggerRequest {
    private 'Content-Type'?: UpdateTriggerRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public trigger?: string;
    public body?: UpdateTriggerRequestBody;
    public constructor(contentType?: string, namespace?: string, repository?: string, trigger?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['trigger'] = trigger;
    }
    public withContentType(contentType: UpdateTriggerRequestContentTypeEnum | string): UpdateTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateTriggerRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateTriggerRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): UpdateTriggerRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): UpdateTriggerRequest {
        this['repository'] = repository;
        return this;
    }
    public withTrigger(trigger: string): UpdateTriggerRequest {
        this['trigger'] = trigger;
        return this;
    }
    public withBody(body: UpdateTriggerRequestBody): UpdateTriggerRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTriggerRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
