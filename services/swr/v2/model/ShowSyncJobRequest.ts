

export class ShowSyncJobRequest {
    private 'Content-Type': ShowSyncJobRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public filter: string;
    public constructor(contentType?: any, namespace?: any, repository?: any, filter?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['filter'] = filter;
    }
    public withContentType(contentType: ShowSyncJobRequestContentTypeEnum): ShowSyncJobRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowSyncJobRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowSyncJobRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowSyncJobRequest {
        this['repository'] = repository;
        return this;
    }
    public withFilter(filter: string): ShowSyncJobRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSyncJobRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
