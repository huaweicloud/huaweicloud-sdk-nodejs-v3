import { UpdateRepoRequestBody } from './UpdateRepoRequestBody';


export class UpdateRepoRequest {
    private 'Content-Type': UpdateRepoRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: UpdateRepoRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: UpdateRepoRequestContentTypeEnum): UpdateRepoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateRepoRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): UpdateRepoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): UpdateRepoRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: UpdateRepoRequestBody): UpdateRepoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRepoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
