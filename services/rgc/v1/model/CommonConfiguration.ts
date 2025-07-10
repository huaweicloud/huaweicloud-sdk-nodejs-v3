

export class CommonConfiguration {
    private 'home_region'?: string;
    private 'cloud_trail_type'?: boolean;
    private 'identity_center_status'?: string;
    private 'organization_structure_type'?: string;
    public constructor() { 
    }
    public withHomeRegion(homeRegion: string): CommonConfiguration {
        this['home_region'] = homeRegion;
        return this;
    }
    public set homeRegion(homeRegion: string  | undefined) {
        this['home_region'] = homeRegion;
    }
    public get homeRegion(): string | undefined {
        return this['home_region'];
    }
    public withCloudTrailType(cloudTrailType: boolean): CommonConfiguration {
        this['cloud_trail_type'] = cloudTrailType;
        return this;
    }
    public set cloudTrailType(cloudTrailType: boolean  | undefined) {
        this['cloud_trail_type'] = cloudTrailType;
    }
    public get cloudTrailType(): boolean | undefined {
        return this['cloud_trail_type'];
    }
    public withIdentityCenterStatus(identityCenterStatus: string): CommonConfiguration {
        this['identity_center_status'] = identityCenterStatus;
        return this;
    }
    public set identityCenterStatus(identityCenterStatus: string  | undefined) {
        this['identity_center_status'] = identityCenterStatus;
    }
    public get identityCenterStatus(): string | undefined {
        return this['identity_center_status'];
    }
    public withOrganizationStructureType(organizationStructureType: string): CommonConfiguration {
        this['organization_structure_type'] = organizationStructureType;
        return this;
    }
    public set organizationStructureType(organizationStructureType: string  | undefined) {
        this['organization_structure_type'] = organizationStructureType;
    }
    public get organizationStructureType(): string | undefined {
        return this['organization_structure_type'];
    }
}