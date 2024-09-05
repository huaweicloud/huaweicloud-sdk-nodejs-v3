

export class ListCloudServersRequest {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'in_recycle_bin'?: boolean;
    private 'spod_id'?: string;
    private 'flavor_name'?: string;
    private 'image_id'?: string;
    public metadata?: string;
    private 'metadata-key'?: string;
    public tags?: string;
    private 'not-tags'?: string;
    private 'availability_zone'?: string;
    private 'availability_zone_eq'?: string;
    private 'charging_mode'?: string;
    private 'key_name'?: string;
    private 'launched_since'?: string;
    private 'enterprise_project_id'?: string;
    private 'expect-fields'?: Array<string>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withId(id: string): ListCloudServersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListCloudServersRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListCloudServersRequest {
        this['status'] = status;
        return this;
    }
    public withInRecycleBin(inRecycleBin: boolean): ListCloudServersRequest {
        this['in_recycle_bin'] = inRecycleBin;
        return this;
    }
    public set inRecycleBin(inRecycleBin: boolean  | undefined) {
        this['in_recycle_bin'] = inRecycleBin;
    }
    public get inRecycleBin(): boolean | undefined {
        return this['in_recycle_bin'];
    }
    public withSpodId(spodId: string): ListCloudServersRequest {
        this['spod_id'] = spodId;
        return this;
    }
    public set spodId(spodId: string  | undefined) {
        this['spod_id'] = spodId;
    }
    public get spodId(): string | undefined {
        return this['spod_id'];
    }
    public withFlavorName(flavorName: string): ListCloudServersRequest {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
    public withImageId(imageId: string): ListCloudServersRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withMetadata(metadata: string): ListCloudServersRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withMetadataKey(metadataKey: string): ListCloudServersRequest {
        this['metadata-key'] = metadataKey;
        return this;
    }
    public set metadataKey(metadataKey: string  | undefined) {
        this['metadata-key'] = metadataKey;
    }
    public get metadataKey(): string | undefined {
        return this['metadata-key'];
    }
    public withTags(tags: string): ListCloudServersRequest {
        this['tags'] = tags;
        return this;
    }
    public withNotTags(notTags: string): ListCloudServersRequest {
        this['not-tags'] = notTags;
        return this;
    }
    public set notTags(notTags: string  | undefined) {
        this['not-tags'] = notTags;
    }
    public get notTags(): string | undefined {
        return this['not-tags'];
    }
    public withAvailabilityZone(availabilityZone: string): ListCloudServersRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withAvailabilityZoneEq(availabilityZoneEq: string): ListCloudServersRequest {
        this['availability_zone_eq'] = availabilityZoneEq;
        return this;
    }
    public set availabilityZoneEq(availabilityZoneEq: string  | undefined) {
        this['availability_zone_eq'] = availabilityZoneEq;
    }
    public get availabilityZoneEq(): string | undefined {
        return this['availability_zone_eq'];
    }
    public withChargingMode(chargingMode: string): ListCloudServersRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withKeyName(keyName: string): ListCloudServersRequest {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withLaunchedSince(launchedSince: string): ListCloudServersRequest {
        this['launched_since'] = launchedSince;
        return this;
    }
    public set launchedSince(launchedSince: string  | undefined) {
        this['launched_since'] = launchedSince;
    }
    public get launchedSince(): string | undefined {
        return this['launched_since'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCloudServersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExpectFields(expectFields: Array<string>): ListCloudServersRequest {
        this['expect-fields'] = expectFields;
        return this;
    }
    public set expectFields(expectFields: Array<string>  | undefined) {
        this['expect-fields'] = expectFields;
    }
    public get expectFields(): Array<string> | undefined {
        return this['expect-fields'];
    }
    public withLimit(limit: number): ListCloudServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCloudServersRequest {
        this['marker'] = marker;
        return this;
    }
}