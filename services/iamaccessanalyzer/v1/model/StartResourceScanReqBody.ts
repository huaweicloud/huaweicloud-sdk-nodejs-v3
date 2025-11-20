import { FindingType } from './FindingType';


export class StartResourceScanReqBody {
    private 'resource_id'?: string;
    private 'resource_owner_account'?: string;
    private 'resource_project_id'?: string;
    private 'resource_urn'?: string;
    private 'finding_type'?: FindingType;
    public constructor(resourceOwnerAccount?: string, resourceUrn?: string) { 
        this['resource_owner_account'] = resourceOwnerAccount;
        this['resource_urn'] = resourceUrn;
    }
    public withResourceId(resourceId: string): StartResourceScanReqBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceOwnerAccount(resourceOwnerAccount: string): StartResourceScanReqBody {
        this['resource_owner_account'] = resourceOwnerAccount;
        return this;
    }
    public set resourceOwnerAccount(resourceOwnerAccount: string  | undefined) {
        this['resource_owner_account'] = resourceOwnerAccount;
    }
    public get resourceOwnerAccount(): string | undefined {
        return this['resource_owner_account'];
    }
    public withResourceProjectId(resourceProjectId: string): StartResourceScanReqBody {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string  | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId(): string | undefined {
        return this['resource_project_id'];
    }
    public withResourceUrn(resourceUrn: string): StartResourceScanReqBody {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
    public withFindingType(findingType: FindingType): StartResourceScanReqBody {
        this['finding_type'] = findingType;
        return this;
    }
    public set findingType(findingType: FindingType  | undefined) {
        this['finding_type'] = findingType;
    }
    public get findingType(): FindingType | undefined {
        return this['finding_type'];
    }
}