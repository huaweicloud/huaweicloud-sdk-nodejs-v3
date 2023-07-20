

export class DeleteRepoTagRequest {
    private 'Content-Type'?: DeleteRepoTagRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public tag?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string, tag?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
    }
    public withContentType(contentType: DeleteRepoTagRequestContentTypeEnum | string): DeleteRepoTagRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteRepoTagRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteRepoTagRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteRepoTagRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): DeleteRepoTagRequest {
        this['repository'] = repository;
        return this;
    }
    public withTag(tag: string): DeleteRepoTagRequest {
        this['tag'] = tag;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteRepoTagRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
