

export class ExecuteFlinkJobSavepointRequestBody {
    public action?: ExecuteFlinkJobSavepointRequestBodyActionEnum | string;
    private 'savepoint_path'?: string;
    public constructor(action?: string, savepointPath?: string) { 
        this['action'] = action;
        this['savepoint_path'] = savepointPath;
    }
    public withAction(action: ExecuteFlinkJobSavepointRequestBodyActionEnum | string): ExecuteFlinkJobSavepointRequestBody {
        this['action'] = action;
        return this;
    }
    public withSavepointPath(savepointPath: string): ExecuteFlinkJobSavepointRequestBody {
        this['savepoint_path'] = savepointPath;
        return this;
    }
    public set savepointPath(savepointPath: string  | undefined) {
        this['savepoint_path'] = savepointPath;
    }
    public get savepointPath(): string | undefined {
        return this['savepoint_path'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteFlinkJobSavepointRequestBodyActionEnum {
    TRIGGER = 'TRIGGER'
}
