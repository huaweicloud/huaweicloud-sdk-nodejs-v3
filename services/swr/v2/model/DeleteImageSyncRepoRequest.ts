import { DeleteImageSyncRepoRequestBody } from './DeleteImageSyncRepoRequestBody';


export class DeleteImageSyncRepoRequest {
    private 'Content-Type': DeleteImageSyncRepoRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: DeleteImageSyncRepoRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: DeleteImageSyncRepoRequestContentTypeEnum): DeleteImageSyncRepoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteImageSyncRepoRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteImageSyncRepoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): DeleteImageSyncRepoRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: DeleteImageSyncRepoRequestBody): DeleteImageSyncRepoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteImageSyncRepoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
