import { CreateRepoTagRequestBody } from './CreateRepoTagRequestBody';


export class CreateRepoTagRequest {
    private 'Content-Type'?: CreateRepoTagRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public body?: CreateRepoTagRequestBody;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateRepoTagRequestContentTypeEnum | string): CreateRepoTagRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateRepoTagRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateRepoTagRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateRepoTagRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): CreateRepoTagRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: CreateRepoTagRequestBody): CreateRepoTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRepoTagRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
