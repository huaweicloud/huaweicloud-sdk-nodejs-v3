import { CreateRepoDomainsRequestBody } from './CreateRepoDomainsRequestBody';


export class CreateRepoDomainsRequest {
    private 'Content-Type': CreateRepoDomainsRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: CreateRepoDomainsRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateRepoDomainsRequestContentTypeEnum): CreateRepoDomainsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateRepoDomainsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateRepoDomainsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): CreateRepoDomainsRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: CreateRepoDomainsRequestBody): CreateRepoDomainsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRepoDomainsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
