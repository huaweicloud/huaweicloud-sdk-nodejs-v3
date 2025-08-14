

export class CloudStorageAssignment {
    private 'cloud_storage_assignment_id'?: string;
    private 'attach_name'?: string;
    private 'used_quota'?: number;
    public quota?: number;
    private 'create_time'?: Date;
    private 'action_put'?: boolean;
    private 'action_get'?: boolean;
    private 'roam_action_put'?: boolean;
    private 'roam_action_get'?: boolean;
    public constructor() { 
    }
    public withCloudStorageAssignmentId(cloudStorageAssignmentId: string): CloudStorageAssignment {
        this['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
        return this;
    }
    public set cloudStorageAssignmentId(cloudStorageAssignmentId: string  | undefined) {
        this['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
    }
    public get cloudStorageAssignmentId(): string | undefined {
        return this['cloud_storage_assignment_id'];
    }
    public withAttachName(attachName: string): CloudStorageAssignment {
        this['attach_name'] = attachName;
        return this;
    }
    public set attachName(attachName: string  | undefined) {
        this['attach_name'] = attachName;
    }
    public get attachName(): string | undefined {
        return this['attach_name'];
    }
    public withUsedQuota(usedQuota: number): CloudStorageAssignment {
        this['used_quota'] = usedQuota;
        return this;
    }
    public set usedQuota(usedQuota: number  | undefined) {
        this['used_quota'] = usedQuota;
    }
    public get usedQuota(): number | undefined {
        return this['used_quota'];
    }
    public withQuota(quota: number): CloudStorageAssignment {
        this['quota'] = quota;
        return this;
    }
    public withCreateTime(createTime: Date): CloudStorageAssignment {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withActionPut(actionPut: boolean): CloudStorageAssignment {
        this['action_put'] = actionPut;
        return this;
    }
    public set actionPut(actionPut: boolean  | undefined) {
        this['action_put'] = actionPut;
    }
    public get actionPut(): boolean | undefined {
        return this['action_put'];
    }
    public withActionGet(actionGet: boolean): CloudStorageAssignment {
        this['action_get'] = actionGet;
        return this;
    }
    public set actionGet(actionGet: boolean  | undefined) {
        this['action_get'] = actionGet;
    }
    public get actionGet(): boolean | undefined {
        return this['action_get'];
    }
    public withRoamActionPut(roamActionPut: boolean): CloudStorageAssignment {
        this['roam_action_put'] = roamActionPut;
        return this;
    }
    public set roamActionPut(roamActionPut: boolean  | undefined) {
        this['roam_action_put'] = roamActionPut;
    }
    public get roamActionPut(): boolean | undefined {
        return this['roam_action_put'];
    }
    public withRoamActionGet(roamActionGet: boolean): CloudStorageAssignment {
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