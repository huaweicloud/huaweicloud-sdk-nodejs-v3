

export class DeleteTriggerRequest {
    private 'Content-Type'?: DeleteTriggerRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public trigger?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string, trigger?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['trigger'] = trigger;
    }
    public withContentType(contentType: DeleteTriggerRequestContentTypeEnum | string): DeleteTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteTriggerRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteTriggerRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteTriggerRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): DeleteTriggerRequest {
        this['repository'] = repository;
        return this;
    }
    public withTrigger(trigger: string): DeleteTriggerRequest {
        this['trigger'] = trigger;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTriggerRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
