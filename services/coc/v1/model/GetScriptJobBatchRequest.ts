

export class GetScriptJobBatchRequest {
    private 'batch_index'?: number;
    private 'execute_uuid'?: string;
    public status?: GetScriptJobBatchRequestStatusEnum | string;
    public limit?: number;
    public marker?: number;
    private 'X-Language'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    public constructor(batchIndex?: number, executeUuid?: string, limit?: number) { 
        this['batch_index'] = batchIndex;
        this['execute_uuid'] = executeUuid;
        this['limit'] = limit;
    }
    public withBatchIndex(batchIndex: number): GetScriptJobBatchRequest {
        this['batch_index'] = batchIndex;
        return this;
    }
    public set batchIndex(batchIndex: number  | undefined) {
        this['batch_index'] = batchIndex;
    }
    public get batchIndex(): number | undefined {
        return this['batch_index'];
    }
    public withExecuteUuid(executeUuid: string): GetScriptJobBatchRequest {
        this['execute_uuid'] = executeUuid;
        return this;
    }
    public set executeUuid(executeUuid: string  | undefined) {
        this['execute_uuid'] = executeUuid;
    }
    public get executeUuid(): string | undefined {
        return this['execute_uuid'];
    }
    public withStatus(status: GetScriptJobBatchRequestStatusEnum | string): GetScriptJobBatchRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): GetScriptJobBatchRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: number): GetScriptJobBatchRequest {
        this['marker'] = marker;
        return this;
    }
    public withXLanguage(xLanguage: string): GetScriptJobBatchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withXProjectId(xProjectId: string): GetScriptJobBatchRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): GetScriptJobBatchRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetScriptJobBatchRequestStatusEnum {
    READY = 'READY',
    PROCESSING = 'PROCESSING',
    ABNORMAL = 'ABNORMAL',
    CANCELED = 'CANCELED',
    FINISHED = 'FINISHED'
}
