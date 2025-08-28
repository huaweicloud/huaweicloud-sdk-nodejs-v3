

export class GetDatabaseUsedRds {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'error_msg'?: string;
    public constructor(id?: string, name?: string, status?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
    }
    public withId(id: string): GetDatabaseUsedRds {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetDatabaseUsedRds {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): GetDatabaseUsedRds {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): GetDatabaseUsedRds {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}