

export class ShowRetentionRequest {
    private 'Content-Type': ShowRetentionRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    private 'retention_id': number | undefined;
    public constructor(contentType?: any, namespace?: any, repository?: any, retentionId?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['retention_id'] = retentionId;
    }
    public withContentType(contentType: ShowRetentionRequestContentTypeEnum): ShowRetentionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowRetentionRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowRetentionRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowRetentionRequest {
        this['repository'] = repository;
        return this;
    }
    public withRetentionId(retentionId: number): ShowRetentionRequest {
        this['retention_id'] = retentionId;
        return this;
    }
    public set retentionId(retentionId: number | undefined) {
        this['retention_id'] = retentionId;
    }
    public get retentionId() {
        return this['retention_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRetentionRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
