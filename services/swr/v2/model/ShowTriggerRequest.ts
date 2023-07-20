

export class ShowTriggerRequest {
    private 'Content-Type'?: ShowTriggerRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public trigger?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string, trigger?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['trigger'] = trigger;
    }
    public withContentType(contentType: ShowTriggerRequestContentTypeEnum | string): ShowTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowTriggerRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowTriggerRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowTriggerRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowTriggerRequest {
        this['repository'] = repository;
        return this;
    }
    public withTrigger(trigger: string): ShowTriggerRequest {
        this['trigger'] = trigger;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTriggerRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
