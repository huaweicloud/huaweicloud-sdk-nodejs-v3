

export class DeleteRepoTagRequest {
    private 'Content-Type': DeleteRepoTagRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public tag: string;
    public constructor(contentType?: any, namespace?: any, repository?: any, tag?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
    }
    public withContentType(contentType: DeleteRepoTagRequestContentTypeEnum): DeleteRepoTagRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteRepoTagRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
