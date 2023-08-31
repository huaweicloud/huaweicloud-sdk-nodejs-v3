import { TaskTriggerVO } from './TaskTriggerVO';
import { TaskV2RequestBody } from './TaskV2RequestBody';


export class CreateAppRequestBody {
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    private 'is_draft'?: boolean;
    private 'create_type'?: CreateAppRequestBodyCreateTypeEnum | string;
    private 'slave_cluster_id'?: string;
    public trigger?: TaskTriggerVO;
    private 'arrange_infos'?: Array<TaskV2RequestBody>;
    public constructor(projectId?: string, name?: string, isDraft?: boolean, createType?: string) { 
        this['project_id'] = projectId;
        this['name'] = name;
        this['is_draft'] = isDraft;
        this['create_type'] = createType;
    }
    public withProjectId(projectId: string): CreateAppRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): CreateAppRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAppRequestBody {
        this['description'] = description;
        return this;
    }
    public withIsDraft(isDraft: boolean): CreateAppRequestBody {
        this['is_draft'] = isDraft;
        return this;
    }
    public set isDraft(isDraft: boolean  | undefined) {
        this['is_draft'] = isDraft;
    }
    public get isDraft(): boolean | undefined {
        return this['is_draft'];
    }
    public withCreateType(createType: CreateAppRequestBodyCreateTypeEnum | string): CreateAppRequestBody {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: CreateAppRequestBodyCreateTypeEnum | string  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): CreateAppRequestBodyCreateTypeEnum | string | undefined {
        return this['create_type'];
    }
    public withSlaveClusterId(slaveClusterId: string): CreateAppRequestBody {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withTrigger(trigger: TaskTriggerVO): CreateAppRequestBody {
        this['trigger'] = trigger;
        return this;
    }
    public withArrangeInfos(arrangeInfos: Array<TaskV2RequestBody>): CreateAppRequestBody {
        this['arrange_infos'] = arrangeInfos;
        return this;
    }
    public set arrangeInfos(arrangeInfos: Array<TaskV2RequestBody>  | undefined) {
        this['arrange_infos'] = arrangeInfos;
    }
    public get arrangeInfos(): Array<TaskV2RequestBody> | undefined {
        return this['arrange_infos'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAppRequestBodyCreateTypeEnum {
    TEMPLATE = 'template'
}
