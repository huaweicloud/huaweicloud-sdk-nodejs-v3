

export class ListPrivateModuleVersionsRequest {
    private 'Client-Request-Id'?: string;
    private 'module_name'?: string;
    private 'module_id'?: string;
    private 'sort_key'?: Array<ListPrivateModuleVersionsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListPrivateModuleVersionsRequestSortDirEnum> | Array<string>;
    public constructor(clientRequestId?: string, moduleName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['module_name'] = moduleName;
    }
    public withClientRequestId(clientRequestId: string): ListPrivateModuleVersionsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withModuleName(moduleName: string): ListPrivateModuleVersionsRequest {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleId(moduleId: string): ListPrivateModuleVersionsRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withSortKey(sortKey: Array<ListPrivateModuleVersionsRequestSortKeyEnum> | Array<string>): ListPrivateModuleVersionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListPrivateModuleVersionsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListPrivateModuleVersionsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPrivateModuleVersionsRequestSortDirEnum> | Array<string>): ListPrivateModuleVersionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPrivateModuleVersionsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPrivateModuleVersionsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrivateModuleVersionsRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPrivateModuleVersionsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
