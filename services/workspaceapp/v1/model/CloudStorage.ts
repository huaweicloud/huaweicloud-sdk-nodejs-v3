

export class CloudStorage {
    public id?: string;
    public name?: string;
    private 'project_config_id'?: string;
    private 'cluster_group_id'?: string;
    private 'create_time'?: Date;
    private 'user_claim_count'?: number;
    private 'share_claim_count'?: number;
    public constructor() { 
    }
    public withId(id: string): CloudStorage {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CloudStorage {
        this['name'] = name;
        return this;
    }
    public withProjectConfigId(projectConfigId: string): CloudStorage {
        this['project_config_id'] = projectConfigId;
        return this;
    }
    public set projectConfigId(projectConfigId: string  | undefined) {
        this['project_config_id'] = projectConfigId;
    }
    public get projectConfigId(): string | undefined {
        return this['project_config_id'];
    }
    public withClusterGroupId(clusterGroupId: string): CloudStorage {
        this['cluster_group_id'] = clusterGroupId;
        return this;
    }
    public set clusterGroupId(clusterGroupId: string  | undefined) {
        this['cluster_group_id'] = clusterGroupId;
    }
    public get clusterGroupId(): string | undefined {
        return this['cluster_group_id'];
    }
    public withCreateTime(createTime: Date): CloudStorage {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUserClaimCount(userClaimCount: number): CloudStorage {
        this['user_claim_count'] = userClaimCount;
        return this;
    }
    public set userClaimCount(userClaimCount: number  | undefined) {
        this['user_claim_count'] = userClaimCount;
    }
    public get userClaimCount(): number | undefined {
        return this['user_claim_count'];
    }
    public withShareClaimCount(shareClaimCount: number): CloudStorage {
        this['share_claim_count'] = shareClaimCount;
        return this;
    }
    public set shareClaimCount(shareClaimCount: number  | undefined) {
        this['share_claim_count'] = shareClaimCount;
    }
    public get shareClaimCount(): number | undefined {
        return this['share_claim_count'];
    }
}