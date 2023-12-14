import { PreviewAgencyLogAccessReqBody } from './PreviewAgencyLogAccessReqBody';


export class LTSAccessConfigInfoRespon200 {
    private 'access_config_id'?: string;
    private 'project_id'?: string;
    private 'access_config_name'?: string;
    private 'access_config_type'?: object;
    private 'group_id'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'create_time'?: number;
    private 'agency_log_access'?: PreviewAgencyLogAccessReqBody;
    public constructor() { 
    }
    public withAccessConfigId(accessConfigId: string): LTSAccessConfigInfoRespon200 {
        this['access_config_id'] = accessConfigId;
        return this;
    }
    public set accessConfigId(accessConfigId: string  | undefined) {
        this['access_config_id'] = accessConfigId;
    }
    public get accessConfigId(): string | undefined {
        return this['access_config_id'];
    }
    public withProjectId(projectId: string): LTSAccessConfigInfoRespon200 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAccessConfigName(accessConfigName: string): LTSAccessConfigInfoRespon200 {
        this['access_config_name'] = accessConfigName;
        return this;
    }
    public set accessConfigName(accessConfigName: string  | undefined) {
        this['access_config_name'] = accessConfigName;
    }
    public get accessConfigName(): string | undefined {
        return this['access_config_name'];
    }
    public withAccessConfigType(accessConfigType: object): LTSAccessConfigInfoRespon200 {
        this['access_config_type'] = accessConfigType;
        return this;
    }
    public set accessConfigType(accessConfigType: object  | undefined) {
        this['access_config_type'] = accessConfigType;
    }
    public get accessConfigType(): object | undefined {
        return this['access_config_type'];
    }
    public withGroupId(groupId: string): LTSAccessConfigInfoRespon200 {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withLogGroupName(logGroupName: string): LTSAccessConfigInfoRespon200 {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamId(logStreamId: string): LTSAccessConfigInfoRespon200 {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): LTSAccessConfigInfoRespon200 {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withCreateTime(createTime: number): LTSAccessConfigInfoRespon200 {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withAgencyLogAccess(agencyLogAccess: PreviewAgencyLogAccessReqBody): LTSAccessConfigInfoRespon200 {
        this['agency_log_access'] = agencyLogAccess;
        return this;
    }
    public set agencyLogAccess(agencyLogAccess: PreviewAgencyLogAccessReqBody  | undefined) {
        this['agency_log_access'] = agencyLogAccess;
    }
    public get agencyLogAccess(): PreviewAgencyLogAccessReqBody | undefined {
        return this['agency_log_access'];
    }
}