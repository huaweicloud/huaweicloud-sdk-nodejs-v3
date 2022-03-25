import { UpdateTriggerRequestBody } from './UpdateTriggerRequestBody';


export class UpdateTriggerRequest {
    private 'Content-Type': UpdateTriggerRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public trigger: string;
    public body?: UpdateTriggerRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any, trigger?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['trigger'] = trigger;
    }
    public withContentType(contentType: UpdateTriggerRequestContentTypeEnum): UpdateTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateTriggerRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
