import { UserAuth } from './UserAuth';


export class CreateUserRepositoryAuthRequest {
    private 'Content-Type': CreateUserRepositoryAuthRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: Array<UserAuth>;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateUserRepositoryAuthRequestContentTypeEnum): CreateUserRepositoryAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateUserRepositoryAuthRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateUserRepositoryAuthRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): CreateUserRepositoryAuthRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: Array<UserAuth>): CreateUserRepositoryAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUserRepositoryAuthRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
