

export class UpdateUserAssignmentInfo {
    private 'file_system_quota'?: number;
    private 'action_put'?: boolean;
    private 'action_get'?: boolean;
    private 'roam_action_put'?: boolean;
    private 'roam_action_get'?: boolean;
    public constructor() { 
    }
    public withFileSystemQuota(fileSystemQuota: number): UpdateUserAssignmentInfo {
        this['file_system_quota'] = fileSystemQuota;
        return this;
    }
    public set fileSystemQuota(fileSystemQuota: number  | undefined) {
        this['file_system_quota'] = fileSystemQuota;
    }
    public get fileSystemQuota(): number | undefined {
        return this['file_system_quota'];
    }
    public withActionPut(actionPut: boolean): UpdateUserAssignmentInfo {
        this['action_put'] = actionPut;
        return this;
    }
    public set actionPut(actionPut: boolean  | undefined) {
        this['action_put'] = actionPut;
    }
    public get actionPut(): boolean | undefined {
        return this['action_put'];
    }
    public withActionGet(actionGet: boolean): UpdateUserAssignmentInfo {
        this['action_get'] = actionGet;
        return this;
    }
    public set actionGet(actionGet: boolean  | undefined) {
        this['action_get'] = actionGet;
    }
    public get actionGet(): boolean | undefined {
        return this['action_get'];
    }
    public withRoamActionPut(roamActionPut: boolean): UpdateUserAssignmentInfo {
        this['roam_action_put'] = roamActionPut;
        return this;
    }
    public set roamActionPut(roamActionPut: boolean  | undefined) {
        this['roam_action_put'] = roamActionPut;
    }
    public get roamActionPut(): boolean | undefined {
        return this['roam_action_put'];
    }
    public withRoamActionGet(roamActionGet: boolean): UpdateUserAssignmentInfo {
        this['roam_action_get'] = roamActionGet;
        return this;
    }
    public set roamActionGet(roamActionGet: boolean  | undefined) {
        this['roam_action_get'] = roamActionGet;
    }
    public get roamActionGet(): boolean | undefined {
        return this['roam_action_get'];
    }
}