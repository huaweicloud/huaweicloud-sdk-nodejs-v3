

export class ShowRepoTagRequest {
    private 'Content-Type'?: ShowRepoTagRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public tag?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string, tag?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
    }
    public withContentType(contentType: ShowRepoTagRequestContentTypeEnum | string): ShowRepoTagRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowRepoTagRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowRepoTagRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowRepoTagRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowRepoTagRequest {
        this['repository'] = repository;
        return this;
    }
    public withTag(tag: string): ShowRepoTagRequest {
        this['tag'] = tag;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepoTagRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
