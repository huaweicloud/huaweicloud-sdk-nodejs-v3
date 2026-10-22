import { TaskTriggerVO } from './TaskTriggerVO';
import { UpdateTaskV2RequestBody } from './UpdateTaskV2RequestBody';


export class UpdateAppInfoRequestBody {
    public id?: string;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    private 'is_draft'?: boolean;
    private 'create_type'?: UpdateAppInfoRequestBodyCreateTypeEnum | string;
    private 'group_id'?: string;
    private 'slave_cluster_id'?: string;
    public trigger?: TaskTriggerVO;
    private 'arrange_infos'?: Array<UpdateTaskV2RequestBody>;
    private 'agency_urn'?: string;
    private 'slave_resource_type'?: string;
    public timeout?: number;
    public constructor(id?: string, projectId?: string, name?: string, isDraft?: boolean, createType?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['name'] = name;
        this['is_draft'] = isDraft;
        this['create_type'] = createType;
    }
    public withId(id: string): UpdateAppInfoRequestBody {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): UpdateAppInfoRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): UpdateAppInfoRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAppInfoRequestBody {
        this['description'] = description;
        return this;
    }
    public withIsDraft(isDraft: boolean): UpdateAppInfoRequestBody {
        this['is_draft'] = isDraft;
        return this;
    }
    public set isDraft(isDraft: boolean  | undefined) {
        this['is_draft'] = isDraft;
    }
    public get isDraft(): boolean | undefined {
        return this['is_draft'];
    }
    public withCreateType(createType: UpdateAppInfoRequestBodyCreateTypeEnum | string): UpdateAppInfoRequestBody {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: UpdateAppInfoRequestBodyCreateTypeEnum | string  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): UpdateAppInfoRequestBodyCreateTypeEnum | string | undefined {
        return this['create_type'];
    }
    public withGroupId(groupId: string): UpdateAppInfoRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withSlaveClusterId(slaveClusterId: string): UpdateAppInfoRequestBody {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withTrigger(trigger: TaskTriggerVO): UpdateAppInfoRequestBody {
        this['trigger'] = trigger;
        return this;
    }
    public withArrangeInfos(arrangeInfos: Array<UpdateTaskV2RequestBody>): UpdateAppInfoRequestBody {
        this['arrange_infos'] = arrangeInfos;
        return this;
    }
    public set arrangeInfos(arrangeInfos: Array<UpdateTaskV2RequestBody>  | undefined) {
        this['arrange_infos'] = arrangeInfos;
    }
    public get arrangeInfos(): Array<UpdateTaskV2RequestBody> | undefined {
        return this['arrange_infos'];
    }
    public withAgencyUrn(agencyUrn: string): UpdateAppInfoRequestBody {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withSlaveResourceType(slaveResourceType: string): UpdateAppInfoRequestBody {
        this['slave_resource_type'] = slaveResourceType;
        return this;
    }
    public set slaveResourceType(slaveResourceType: string  | undefined) {
        this['slave_resource_type'] = slaveResourceType;
    }
    public get slaveResourceType(): string | undefined {
        return this['slave_resource_type'];
    }
    public withTimeout(timeout: number): UpdateAppInfoRequestBody {
        this['timeout'] = timeout;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAppInfoRequestBodyCreateTypeEnum {
    TEMPLATE = 'template'
}
