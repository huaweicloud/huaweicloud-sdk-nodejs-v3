

export class ChangeCloudStorageAssignmentInfo {
    public id?: string;
    private 'attach_id'?: string;
    public attach?: string;
    public quota?: number;
    private 'action_put'?: boolean;
    private 'action_get'?: boolean;
    private 'roam_action_put'?: boolean;
    private 'roam_action_get'?: boolean;
    public constructor() { 
    }
    public withId(id: string): ChangeCloudStorageAssignmentInfo {
        this['id'] = id;
        return this;
    }
    public withAttachId(attachId: string): ChangeCloudStorageAssignmentInfo {
        this['attach_id'] = attachId;
        return this;
    }
    public set attachId(attachId: string  | undefined) {
        this['attach_id'] = attachId;
    }
    public get attachId(): string | undefined {
        return this['attach_id'];
    }
    public withAttach(attach: string): ChangeCloudStorageAssignmentInfo {
        this['attach'] = attach;
        return this;
    }
    public withQuota(quota: number): ChangeCloudStorageAssignmentInfo {
        this['quota'] = quota;
        return this;
    }
    public withActionPut(actionPut: boolean): ChangeCloudStorageAssignmentInfo {
        this['action_put'] = actionPut;
        return this;
    }
    public set actionPut(actionPut: boolean  | undefined) {
        this['action_put'] = actionPut;
    }
    public get actionPut(): boolean | undefined {
        return this['action_put'];
    }
    public withActionGet(actionGet: boolean): ChangeCloudStorageAssignmentInfo {
        this['action_get'] = actionGet;
        return this;
    }
    public set actionGet(actionGet: boolean  | undefined) {
        this['action_get'] = actionGet;
    }
    public get actionGet(): boolean | undefined {
        return this['action_get'];
    }
    public withRoamActionPut(roamActionPut: boolean): ChangeCloudStorageAssignmentInfo {
        this['roam_action_put'] = roamActionPut;
        return this;
    }
    public set roamActionPut(roamActionPut: boolean  | undefined) {
        this['roam_action_put'] = roamActionPut;
    }
    public get roamActionPut(): boolean | undefined {
        return this['roam_action_put'];
    }
    public withRoamActionGet(roamActionGet: boolean): ChangeCloudStorageAssignmentInfo {
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