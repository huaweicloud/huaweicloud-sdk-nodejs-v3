

export class DeleteRepoRequest {
    private 'Content-Type': DeleteRepoRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: DeleteRepoRequestContentTypeEnum): DeleteRepoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteRepoRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteRepoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): DeleteRepoRequest {
        this['repository'] = repository;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteRepoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
