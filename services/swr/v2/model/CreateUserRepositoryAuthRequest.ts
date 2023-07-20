import { UserAuth } from './UserAuth';


export class CreateUserRepositoryAuthRequest {
    private 'Content-Type'?: CreateUserRepositoryAuthRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public body?: Array<UserAuth>;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateUserRepositoryAuthRequestContentTypeEnum | string): CreateUserRepositoryAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateUserRepositoryAuthRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateUserRepositoryAuthRequestContentTypeEnum | string | undefined {
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
