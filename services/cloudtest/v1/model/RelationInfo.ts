

export class RelationInfo {
    private 'dr_number'?: string;
    private 'test_case_uri'?: string;
    private 'relate_type'?: string;
    private 'resource_type'?: string;
    private 'source_system'?: string;
    private 'association_number'?: string;
    public region?: string;
    public constructor(drNumber?: string, relateType?: string) { 
        this['dr_number'] = drNumber;
        this['relate_type'] = relateType;
    }
    public withDrNumber(drNumber: string): RelationInfo {
        this['dr_number'] = drNumber;
        return this;
    }
    public set drNumber(drNumber: string  | undefined) {
        this['dr_number'] = drNumber;
    }
    public get drNumber(): string | undefined {
        return this['dr_number'];
    }
    public withTestCaseUri(testCaseUri: string): RelationInfo {
        this['test_case_uri'] = testCaseUri;
        return this;
    }
    public set testCaseUri(testCaseUri: string  | undefined) {
        this['test_case_uri'] = testCaseUri;
    }
    public get testCaseUri(): string | undefined {
        return this['test_case_uri'];
    }
    public withRelateType(relateType: string): RelationInfo {
        this['relate_type'] = relateType;
        return this;
    }
    public set relateType(relateType: string  | undefined) {
        this['relate_type'] = relateType;
    }
    public get relateType(): string | undefined {
        return this['relate_type'];
    }
    public withResourceType(resourceType: string): RelationInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withSourceSystem(sourceSystem: string): RelationInfo {
        this['source_system'] = sourceSystem;
        return this;
    }
    public set sourceSystem(sourceSystem: string  | undefined) {
        this['source_system'] = sourceSystem;
    }
    public get sourceSystem(): string | undefined {
        return this['source_system'];
    }
    public withAssociationNumber(associationNumber: string): RelationInfo {
        this['association_number'] = associationNumber;
        return this;
    }
    public set associationNumber(associationNumber: string  | undefined) {
        this['association_number'] = associationNumber;
    }
    public get associationNumber(): string | undefined {
        return this['association_number'];
    }
    public withRegion(region: string): RelationInfo {
        this['region'] = region;
        return this;
    }
}