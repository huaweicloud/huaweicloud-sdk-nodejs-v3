import { UpdateRetentionRequestBody } from './UpdateRetentionRequestBody';


export class UpdateRetentionRequest {
    private 'Content-Type': UpdateRetentionRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    private 'retention_id': number | undefined;
    public body?: UpdateRetentionRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any, retentionId?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['retention_id'] = retentionId;
    }
    public withContentType(contentType: UpdateRetentionRequestContentTypeEnum): UpdateRetentionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateRetentionRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): UpdateRetentionRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): UpdateRetentionRequest {
        this['repository'] = repository;
        return this;
    }
    public withRetentionId(retentionId: number): UpdateRetentionRequest {
        this['retention_id'] = retentionId;
        return this;
    }
    public set retentionId(retentionId: number | undefined) {
        this['retention_id'] = retentionId;
    }
    public get retentionId() {
        return this['retention_id'];
    }
    public withBody(body: UpdateRetentionRequestBody): UpdateRetentionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRetentionRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
