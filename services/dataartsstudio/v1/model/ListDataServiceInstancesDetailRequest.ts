

export class ListDataServiceInstancesDetailRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListDataServiceInstancesDetailRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'create_user'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListDataServiceInstancesDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListDataServiceInstancesDetailRequestDlmTypeEnum | string): ListDataServiceInstancesDetailRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListDataServiceInstancesDetailRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListDataServiceInstancesDetailRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListDataServiceInstancesDetailRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): ListDataServiceInstancesDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataServiceInstancesDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListDataServiceInstancesDetailRequest {
        this['name'] = name;
        return this;
    }
    public withCreateUser(createUser: string): ListDataServiceInstancesDetailRequest {
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
export enum ListDataServiceInstancesDetailRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
