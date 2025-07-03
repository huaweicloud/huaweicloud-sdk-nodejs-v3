
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubBusinessDetailResponse extends SdkResponse {
    public id?: number;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    private 'parent_id'?: number;
    public name?: string;
    private 'display_name'?: string;
    private 'business_id'?: number;
    private 'inner_domain_id'?: number;
    private 'creator_id'?: number;
    public uuid?: string;
    public descp?: string;
    private 'create_time'?: string;
    private 'modify_time'?: string;
    private 'creator_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowSubBusinessDetailResponse {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): ShowSubBusinessDetailResponse {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): ShowSubBusinessDetailResponse {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withParentId(parentId: number): ShowSubBusinessDetailResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withName(name: string): ShowSubBusinessDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): ShowSubBusinessDetailResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withBusinessId(businessId: number): ShowSubBusinessDetailResponse {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withInnerDomainId(innerDomainId: number): ShowSubBusinessDetailResponse {
        this['inner_domain_id'] = innerDomainId;
        return this;
    }
    public set innerDomainId(innerDomainId: number  | undefined) {
        this['inner_domain_id'] = innerDomainId;
    }
    public get innerDomainId(): number | undefined {
        return this['inner_domain_id'];
    }
    public withCreatorId(creatorId: number): ShowSubBusinessDetailResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
    public withUuid(uuid: string): ShowSubBusinessDetailResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withDescp(descp: string): ShowSubBusinessDetailResponse {
        this['descp'] = descp;
        return this;
    }
    public withCreateTime(createTime: string): ShowSubBusinessDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: string): ShowSubBusinessDetailResponse {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: string  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): string | undefined {
        return this['modify_time'];
    }
    public withCreatorName(creatorName: string): ShowSubBusinessDetailResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
}