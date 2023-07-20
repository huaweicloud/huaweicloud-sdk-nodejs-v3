

export class DeleteRepoRequest {
    private 'Content-Type'?: DeleteRepoRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: DeleteRepoRequestContentTypeEnum | string): DeleteRepoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteRepoRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteRepoRequestContentTypeEnum | string | undefined {
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
