import { UpdateRetentionRequestBody } from './UpdateRetentionRequestBody';


export class UpdateRetentionRequest {
    private 'Content-Type'?: UpdateRetentionRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    private 'retention_id'?: number;
    public body?: UpdateRetentionRequestBody;
    public constructor(contentType?: string, namespace?: string, repository?: string, retentionId?: number) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['retention_id'] = retentionId;
    }
    public withContentType(contentType: UpdateRetentionRequestContentTypeEnum | string): UpdateRetentionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateRetentionRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateRetentionRequestContentTypeEnum | string | undefined {
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
    public set retentionId(retentionId: number  | undefined) {
        this['retention_id'] = retentionId;
    }
    public get retentionId(): number | undefined {
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
