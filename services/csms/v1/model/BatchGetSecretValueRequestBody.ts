

export class BatchGetSecretValueRequestBody {
    private 'secret_name_list'?: Array<string>;
    public constructor() { 
    }
    public withSecretNameList(secretNameList: Array<string>): BatchGetSecretValueRequestBody {
        this['secret_name_list'] = secretNameList;
        return this;
    }
    public set secretNameList(secretNameList: Array<string>  | undefined) {
        this['secret_name_list'] = secretNameList;
    }
    public get secretNameList(): Array<string> | undefined {
        return this['secret_name_list'];
    }
}