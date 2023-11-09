

export class DataResponse {
    private 'success_ids'?: Array<string>;
    private 'error_ids'?: Array<string>;
    public constructor(successIds?: Array<string>) { 
        this['success_ids'] = successIds;
    }
    public withSuccessIds(successIds: Array<string>): DataResponse {
        this['success_ids'] = successIds;
        return this;
    }
    public set successIds(successIds: Array<string>  | undefined) {
        this['success_ids'] = successIds;
    }
    public get successIds(): Array<string> | undefined {
        return this['success_ids'];
    }
    public withErrorIds(errorIds: Array<string>): DataResponse {
        this['error_ids'] = errorIds;
        return this;
    }
    public set errorIds(errorIds: Array<string>  | undefined) {
        this['error_ids'] = errorIds;
    }
    public get errorIds(): Array<string> | undefined {
        return this['error_ids'];
    }
}