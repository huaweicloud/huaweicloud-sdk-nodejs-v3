

export class ShowDesignOperationResultRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'operation_type'?: ShowDesignOperationResultRequestOperationTypeEnum | string;
    public limit?: number;
    public offset?: number;
    private 'operation_id'?: string;
    public constructor(workspace?: string, operationType?: string) { 
        this['workspace'] = workspace;
        this['operation_type'] = operationType;
    }
    public withWorkspace(workspace: string): ShowDesignOperationResultRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowDesignOperationResultRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ShowDesignOperationResultRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withOperationType(operationType: ShowDesignOperationResultRequestOperationTypeEnum | string): ShowDesignOperationResultRequest {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: ShowDesignOperationResultRequestOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): ShowDesignOperationResultRequestOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withLimit(limit: number): ShowDesignOperationResultRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowDesignOperationResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withOperationId(operationId: string): ShowDesignOperationResultRequest {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDesignOperationResultRequestOperationTypeEnum {
    ER_REVERSE_DB = 'ER_REVERSE_DB',
    TRANSFORM_LOGIC_MODEL = 'TRANSFORM_LOGIC_MODEL'
}
