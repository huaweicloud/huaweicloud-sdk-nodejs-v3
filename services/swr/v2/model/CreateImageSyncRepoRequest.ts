import { CreateImageSyncRepoRequestBody } from './CreateImageSyncRepoRequestBody';


export class CreateImageSyncRepoRequest {
    private 'Content-Type': CreateImageSyncRepoRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: CreateImageSyncRepoRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateImageSyncRepoRequestContentTypeEnum): CreateImageSyncRepoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateImageSyncRepoRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateImageSyncRepoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): CreateImageSyncRepoRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: CreateImageSyncRepoRequestBody): CreateImageSyncRepoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateImageSyncRepoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
