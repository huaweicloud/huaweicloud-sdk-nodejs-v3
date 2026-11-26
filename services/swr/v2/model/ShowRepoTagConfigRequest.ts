

export class ShowRepoTagConfigRequest {
    private 'Content-Type'?: ShowRepoTagConfigRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public tag?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string, tag?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
    }
    public withContentType(contentType: ShowRepoTagConfigRequestContentTypeEnum | string): ShowRepoTagConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowRepoTagConfigRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowRepoTagConfigRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowRepoTagConfigRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowRepoTagConfigRequest {
        this['repository'] = repository;
        return this;
    }
    public withTag(tag: string): ShowRepoTagConfigRequest {
        this['tag'] = tag;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepoTagConfigRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
