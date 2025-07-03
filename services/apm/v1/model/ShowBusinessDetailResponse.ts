
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBusinessDetailResponse extends SdkResponse {
    public id?: number;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    private 'default'?: boolean;
    private 'display_name'?: string;
    public name?: string;
    private 'is_default'?: boolean;
    private 'inner_domain_id'?: number;
    private 'eps_id'?: string;
    private 'creator_id'?: number;
    public descp?: string;
    private 'create_time'?: string;
    private 'modify_time'?: string;
    private 'creator_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowBusinessDetailResponse {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): ShowBusinessDetailResponse {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): ShowBusinessDetailResponse {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withDefault(_default: boolean): ShowBusinessDetailResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withDisplayName(displayName: string): ShowBusinessDetailResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withName(name: string): ShowBusinessDetailResponse {
        this['name'] = name;
        return this;
    }
    public withIsDefault(isDefault: boolean): ShowBusinessDetailResponse {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withInnerDomainId(innerDomainId: number): ShowBusinessDetailResponse {
        this['inner_domain_id'] = innerDomainId;
        return this;
    }
    public set innerDomainId(innerDomainId: number  | undefined) {
        this['inner_domain_id'] = innerDomainId;
    }
    public get innerDomainId(): number | undefined {
        return this['inner_domain_id'];
    }
    public withEpsId(epsId: string): ShowBusinessDetailResponse {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withCreatorId(creatorId: number): ShowBusinessDetailResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
    public withDescp(descp: string): ShowBusinessDetailResponse {
        this['descp'] = descp;
        return this;
    }
    public withCreateTime(createTime: string): ShowBusinessDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: string): ShowBusinessDetailResponse {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: string  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): string | undefined {
        return this['modify_time'];
    }
    public withCreatorName(creatorName: string): ShowBusinessDetailResponse {
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