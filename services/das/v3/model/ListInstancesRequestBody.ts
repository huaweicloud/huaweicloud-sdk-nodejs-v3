

export class ListInstancesRequestBody {
    private 'engine_type'?: string;
    private 'instance_status'?: string;
    private 'cur_page'?: number;
    private 'page_size'?: number;
    private 'instance_type'?: string;
    private 'engine_version'?: string;
    private 'transaction_flag'?: boolean;
    public constructor() { 
    }
    public withEngineType(engineType: string): ListInstancesRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withInstanceStatus(instanceStatus: string): ListInstancesRequestBody {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withCurPage(curPage: number): ListInstancesRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPageSize(pageSize: number): ListInstancesRequestBody {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withInstanceType(instanceType: string): ListInstancesRequestBody {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withEngineVersion(engineVersion: string): ListInstancesRequestBody {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withTransactionFlag(transactionFlag: boolean): ListInstancesRequestBody {
        this['transaction_flag'] = transactionFlag;
        return this;
    }
    public set transactionFlag(transactionFlag: boolean  | undefined) {
        this['transaction_flag'] = transactionFlag;
    }
    public get transactionFlag(): boolean | undefined {
        return this['transaction_flag'];
    }
}