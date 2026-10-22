

export class ShowPresignedUrlRequest {
    private 'Content-Type'?: string;
    private 'operation_name'?: string;
    public constructor(contentType?: string, operationName?: string) { 
        this['Content-Type'] = contentType;
        this['operation_name'] = operationName;
    }
    public withContentType(contentType: string): ShowPresignedUrlRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withOperationName(operationName: string): ShowPresignedUrlRequest {
        this['operation_name'] = operationName;
        return this;
    }
    public set operationName(operationName: string  | undefined) {
        this['operation_name'] = operationName;
    }
    public get operationName(): string | undefined {
        return this['operation_name'];
    }
}