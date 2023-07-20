

export class DeleteRetentionRequest {
    private 'Content-Type'?: DeleteRetentionRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    private 'retention_id'?: number;
    public constructor(contentType?: string, namespace?: string, repository?: string, retentionId?: number) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['retention_id'] = retentionId;
    }
    public withContentType(contentType: DeleteRetentionRequestContentTypeEnum | string): DeleteRetentionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteRetentionRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteRetentionRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteRetentionRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): DeleteRetentionRequest {
        this['repository'] = repository;
        return this;
    }
    public withRetentionId(retentionId: number): DeleteRetentionRequest {
        this['retention_id'] = retentionId;
        return this;
    }
    public set retentionId(retentionId: number  | undefined) {
        this['retention_id'] = retentionId;
    }
    public get retentionId(): number | undefined {
        return this['retention_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteRetentionRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
