

export class ExecuteLayoutRequestBody {
    public action?: ExecuteLayoutRequestBodyActionEnum | string;
    public ids?: string;
    public uploadFile?: any;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ExecuteLayoutRequestBodyActionEnum | string): ExecuteLayoutRequestBody {
        this['action'] = action;
        return this;
    }
    public withIds(ids: string): ExecuteLayoutRequestBody {
        this['ids'] = ids;
        return this;
    }
    public withUploadFile(uploadFile: any): ExecuteLayoutRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteLayoutRequestBodyActionEnum {
    VERIFY = 'VERIFY',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT'
}
