import { AssociationAlarmTemplate } from './AssociationAlarmTemplate';
import { OneResourceGroupRespResourceStatistics } from './OneResourceGroupRespResourceStatistics';


export class OneResourceGroupResp {
    private 'group_name'?: string;
    private 'group_id'?: string;
    private 'create_time'?: Date;
    private 'enterprise_project_id'?: string;
    public type?: OneResourceGroupRespTypeEnum | string;
    public status?: OneResourceGroupRespStatusEnum | string;
    private 'event_status'?: OneResourceGroupRespEventStatusEnum | string;
    private 'resource_statistics'?: OneResourceGroupRespResourceStatistics;
    private 'related_ep_ids'?: Array<string>;
    private 'association_alarm_templates'?: Array<AssociationAlarmTemplate>;
    public constructor(groupName?: string, groupId?: string, createTime?: Date, enterpriseProjectId?: string, type?: string) { 
        this['group_name'] = groupName;
        this['group_id'] = groupId;
        this['create_time'] = createTime;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['type'] = type;
    }
    public withGroupName(groupName: string): OneResourceGroupResp {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): OneResourceGroupResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCreateTime(createTime: Date): OneResourceGroupResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OneResourceGroupResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: OneResourceGroupRespTypeEnum | string): OneResourceGroupResp {
        this['type'] = type;
        return this;
    }
    public withStatus(status: OneResourceGroupRespStatusEnum | string): OneResourceGroupResp {
        this['status'] = status;
        return this;
    }
    public withEventStatus(eventStatus: OneResourceGroupRespEventStatusEnum | string): OneResourceGroupResp {
        this['event_status'] = eventStatus;
        return this;
    }
    public set eventStatus(eventStatus: OneResourceGroupRespEventStatusEnum | string  | undefined) {
        this['event_status'] = eventStatus;
    }
    public get eventStatus(): OneResourceGroupRespEventStatusEnum | string | undefined {
        return this['event_status'];
    }
    public withResourceStatistics(resourceStatistics: OneResourceGroupRespResourceStatistics): OneResourceGroupResp {
        this['resource_statistics'] = resourceStatistics;
        return this;
    }
    public set resourceStatistics(resourceStatistics: OneResourceGroupRespResourceStatistics  | undefined) {
        this['resource_statistics'] = resourceStatistics;
    }
    public get resourceStatistics(): OneResourceGroupRespResourceStatistics | undefined {
        return this['resource_statistics'];
    }
    public withRelatedEpIds(relatedEpIds: Array<string>): OneResourceGroupResp {
        this['related_ep_ids'] = relatedEpIds;
        return this;
    }
    public set relatedEpIds(relatedEpIds: Array<string>  | undefined) {
        this['related_ep_ids'] = relatedEpIds;
    }
    public get relatedEpIds(): Array<string> | undefined {
        return this['related_ep_ids'];
    }
    public withAssociationAlarmTemplates(associationAlarmTemplates: Array<AssociationAlarmTemplate>): OneResourceGroupResp {
        this['association_alarm_templates'] = associationAlarmTemplates;
        return this;
    }
    public set associationAlarmTemplates(associationAlarmTemplates: Array<AssociationAlarmTemplate>  | undefined) {
        this['association_alarm_templates'] = associationAlarmTemplates;
    }
    public get associationAlarmTemplates(): Array<AssociationAlarmTemplate> | undefined {
        return this['association_alarm_templates'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OneResourceGroupRespTypeEnum {
    EPS = 'EPS',
    TAG = 'TAG',
    NAME = 'NAME',
    COMB = 'COMB',
    MANUAL = 'Manual'
}
/**
    * @export
    * @enum {string}
    */
export enum OneResourceGroupRespStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
/**
    * @export
    * @enum {string}
    */
export enum OneResourceGroupRespEventStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
