

export class ShowTopologyTreeRequest {
    private 'region_id'?: string;
    private 'business_id'?: number;
    private 'env_tag_id'?: number;
    private 'env_keyword'?: string;
    private 'x-business-id'?: number;
    public constructor(businessId?: number, xBusinessId?: number) { 
        this['business_id'] = businessId;
        this['x-business-id'] = xBusinessId;
    }
    public withRegionId(regionId: string): ShowTopologyTreeRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withBusinessId(businessId: number): ShowTopologyTreeRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withEnvTagId(envTagId: number): ShowTopologyTreeRequest {
        this['env_tag_id'] = envTagId;
        return this;
    }
    public set envTagId(envTagId: number  | undefined) {
        this['env_tag_id'] = envTagId;
    }
    public get envTagId(): number | undefined {
        return this['env_tag_id'];
    }
    public withEnvKeyword(envKeyword: string): ShowTopologyTreeRequest {
        this['env_keyword'] = envKeyword;
        return this;
    }
    public set envKeyword(envKeyword: string  | undefined) {
        this['env_keyword'] = envKeyword;
    }
    public get envKeyword(): string | undefined {
        return this['env_keyword'];
    }
    public withXBusinessId(xBusinessId: number): ShowTopologyTreeRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
}