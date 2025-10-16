

export class DeleteAgencyRequest {
    private 'Content-Type'?: string;
    public purged?: boolean;
    private 'role_id_list'?: Array<string>;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): DeleteAgencyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPurged(purged: boolean): DeleteAgencyRequest {
        this['purged'] = purged;
        return this;
    }
    public withRoleIdList(roleIdList: Array<string>): DeleteAgencyRequest {
        this['role_id_list'] = roleIdList;
        return this;
    }
    public set roleIdList(roleIdList: Array<string>  | undefined) {
        this['role_id_list'] = roleIdList;
    }
    public get roleIdList(): Array<string> | undefined {
        return this['role_id_list'];
    }
}