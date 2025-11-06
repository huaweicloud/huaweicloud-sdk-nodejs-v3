

export class ShowUserRefPermissionRequest {
    private 'repository_id'?: number;
    private 'target_ref'?: string;
    public action?: ShowUserRefPermissionRequestActionEnum | string;
    private 'change_request_iid'?: number;
    public constructor(repositoryId?: number, targetRef?: string) { 
        this['repository_id'] = repositoryId;
        this['target_ref'] = targetRef;
    }
    public withRepositoryId(repositoryId: number): ShowUserRefPermissionRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTargetRef(targetRef: string): ShowUserRefPermissionRequest {
        this['target_ref'] = targetRef;
        return this;
    }
    public set targetRef(targetRef: string  | undefined) {
        this['target_ref'] = targetRef;
    }
    public get targetRef(): string | undefined {
        return this['target_ref'];
    }
    public withAction(action: ShowUserRefPermissionRequestActionEnum | string): ShowUserRefPermissionRequest {
        this['action'] = action;
        return this;
    }
    public withChangeRequestIid(changeRequestIid: number): ShowUserRefPermissionRequest {
        this['change_request_iid'] = changeRequestIid;
        return this;
    }
    public set changeRequestIid(changeRequestIid: number  | undefined) {
        this['change_request_iid'] = changeRequestIid;
    }
    public get changeRequestIid(): number | undefined {
        return this['change_request_iid'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUserRefPermissionRequestActionEnum {
    READ = 'read',
    REVIEW = 'review',
    APPROVAL = 'approval',
    CREATE_CHANGE = 'create-change',
    MERGE = 'merge',
    CREATE_DELETE = 'create-delete',
    PUSH = 'push'
}
