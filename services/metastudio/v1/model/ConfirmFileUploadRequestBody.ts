

export class ConfirmFileUploadRequestBody {
    public state?: ConfirmFileUploadRequestBodyStateEnum | string;
    private 'auto_meta_analysis'?: boolean;
    public constructor(state?: string) { 
        this['state'] = state;
    }
    public withState(state: ConfirmFileUploadRequestBodyStateEnum | string): ConfirmFileUploadRequestBody {
        this['state'] = state;
        return this;
    }
    public withAutoMetaAnalysis(autoMetaAnalysis: boolean): ConfirmFileUploadRequestBody {
        this['auto_meta_analysis'] = autoMetaAnalysis;
        return this;
    }
    public set autoMetaAnalysis(autoMetaAnalysis: boolean  | undefined) {
        this['auto_meta_analysis'] = autoMetaAnalysis;
    }
    public get autoMetaAnalysis(): boolean | undefined {
        return this['auto_meta_analysis'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmFileUploadRequestBodyStateEnum {
    CREATED = 'CREATED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
