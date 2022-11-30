import { BillingInfoDict } from './BillingInfoDict';
import { TagsInfo } from './TagsInfo';


export class PublicipPoolShowResp {
    public id?: string;
    public name?: string;
    public status?: string;
    public type?: PublicipPoolShowRespTypeEnum;
    public description?: string;
    private 'project_id'?: string | undefined;
    public size?: number;
    public used?: number;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'billing_info'?: BillingInfoDict | undefined;
    private 'public_border_group'?: string | undefined;
    public shared?: boolean;
    private 'is_common'?: boolean | undefined;
    public tags?: Array<TagsInfo>;
    private 'enterprise_project_id'?: string | undefined;
    private 'allow_share_bandwidth_types'?: Array<string> | undefined;
    public constructor() { 
    }
    public withId(id: string): PublicipPoolShowResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PublicipPoolShowResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): PublicipPoolShowResp {
        this['status'] = status;
        return this;
    }
    public withType(type: PublicipPoolShowRespTypeEnum): PublicipPoolShowResp {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): PublicipPoolShowResp {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): PublicipPoolShowResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withSize(size: number): PublicipPoolShowResp {
        this['size'] = size;
        return this;
    }
    public withUsed(used: number): PublicipPoolShowResp {
        this['used'] = used;
        return this;
    }
    public withCreatedAt(createdAt: string): PublicipPoolShowResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): PublicipPoolShowResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withBillingInfo(billingInfo: BillingInfoDict): PublicipPoolShowResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: BillingInfoDict | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
        return this['billing_info'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): PublicipPoolShowResp {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
    public withShared(shared: boolean): PublicipPoolShowResp {
        this['shared'] = shared;
        return this;
    }
    public withIsCommon(isCommon: boolean): PublicipPoolShowResp {
        this['is_common'] = isCommon;
        return this;
    }
    public set isCommon(isCommon: boolean | undefined) {
        this['is_common'] = isCommon;
    }
    public get isCommon() {
        return this['is_common'];
    }
    public withTags(tags: Array<TagsInfo>): PublicipPoolShowResp {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PublicipPoolShowResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withAllowShareBandwidthTypes(allowShareBandwidthTypes: Array<string>): PublicipPoolShowResp {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
        return this;
    }
    public set allowShareBandwidthTypes(allowShareBandwidthTypes: Array<string> | undefined) {
        this['allow_share_bandwidth_types'] = allowShareBandwidthTypes;
    }
    public get allowShareBandwidthTypes() {
        return this['allow_share_bandwidth_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipPoolShowRespTypeEnum {
    SPEC_BGP = 'spec_bgp',
    SPEC_SBGP = 'spec_sbgp'
}
