import { UserAuth } from './UserAuth';


export class UpdateUserRepositoryAuthRequest {
    private 'Content-Type': UpdateUserRepositoryAuthRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: Array<UserAuth>;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: UpdateUserRepositoryAuthRequestContentTypeEnum): UpdateUserRepositoryAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateUserRepositoryAuthRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): UpdateUserRepositoryAuthRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): UpdateUserRepositoryAuthRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: Array<UserAuth>): UpdateUserRepositoryAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateUserRepositoryAuthRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
