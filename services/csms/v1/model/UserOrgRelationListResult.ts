

export class UserOrgRelationListResult {
    private 'org_id'?: string;
    private 'relation_type'?: string;
    public constructor(orgId?: string, relationType?: string) { 
        this['org_id'] = orgId;
        this['relation_type'] = relationType;
    }
    public withOrgId(orgId: string): UserOrgRelationListResult {
        this['org_id'] = orgId;
        return this;
    }
    public set orgId(orgId: string  | undefined) {
        this['org_id'] = orgId;
    }
    public get orgId(): string | undefined {
        return this['org_id'];
    }
    public withRelationType(relationType: string): UserOrgRelationListResult {
        this['relation_type'] = relationType;
        return this;
    }
    public set relationType(relationType: string  | undefined) {
        this['relation_type'] = relationType;
    }
    public get relationType(): string | undefined {
        return this['relation_type'];
    }
}