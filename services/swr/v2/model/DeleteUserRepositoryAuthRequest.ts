

export class DeleteUserRepositoryAuthRequest {
    private 'Content-Type'?: DeleteUserRepositoryAuthRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public body?: Array<string>;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: DeleteUserRepositoryAuthRequestContentTypeEnum | string): DeleteUserRepositoryAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteUserRepositoryAuthRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteUserRepositoryAuthRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteUserRepositoryAuthRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): DeleteUserRepositoryAuthRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: Array<string>): DeleteUserRepositoryAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteUserRepositoryAuthRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
