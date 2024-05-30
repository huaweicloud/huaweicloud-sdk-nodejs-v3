

export class ListDataServiceInstancesOverviewRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListDataServiceInstancesOverviewRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'create_user'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListDataServiceInstancesOverviewRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListDataServiceInstancesOverviewRequestDlmTypeEnum | string): ListDataServiceInstancesOverviewRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListDataServiceInstancesOverviewRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListDataServiceInstancesOverviewRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListDataServiceInstancesOverviewRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): ListDataServiceInstancesOverviewRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataServiceInstancesOverviewRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListDataServiceInstancesOverviewRequest {
        this['name'] = name;
        return this;
    }
    public withCreateUser(createUser: string): ListDataServiceInstancesOverviewRequest {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDataServiceInstancesOverviewRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
