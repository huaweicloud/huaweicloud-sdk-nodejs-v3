

export class ListMembersRequest {
    private 'repository_id'?: number;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public permission?: ListMembersRequestPermissionEnum | string;
    public action?: ListMembersRequestActionEnum | string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListMembersRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSearch(search: string): ListMembersRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListMembersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMembersRequest {
        this['limit'] = limit;
        return this;
    }
    public withPermission(permission: ListMembersRequestPermissionEnum | string): ListMembersRequest {
        this['permission'] = permission;
        return this;
    }
    public withAction(action: ListMembersRequestActionEnum | string): ListMembersRequest {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMembersRequestPermissionEnum {
    REPOSITORY = 'repository',
    CODE = 'code',
    MEMBER = 'member',
    BRANCH = 'branch',
    TAG = 'tag',
    MR = 'mr',
    LABEL = 'label'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMembersRequestActionEnum {
    REPOSITORYCREATEFORKDELETESETTING = 'repository：create,fork,delete,setting',
    CODEPUSHDOWNLOAD = 'code：push,download',
    MEMBERCREATEUPDATEDELETE = 'member：create,update,delete',
    BRANCHCREATEDELETE = 'branch：create,delete',
    TAGCREATEDELETE = 'tag：create,delete',
    MRCREATEUPDATECOMMENTREVIEWAPPROVEMERGECLOSEREOPEN = 'mr：create,update,comment,review,approve,merge,close,reopen',
    LABELCREATEDELETEUPDATE = 'label：create,delete,update'
}
