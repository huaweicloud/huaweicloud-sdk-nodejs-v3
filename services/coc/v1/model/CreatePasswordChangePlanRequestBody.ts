

export class CreatePasswordChangePlanRequestBody {
    public vendor?: string;
    private 'resource_provider'?: string;
    private 'resource_type'?: string;
    private 'instance_type'?: string;
    private 'accounts_to_be_changed'?: Array<string>;
    private 'accounts_not_to_be_changed'?: Array<string>;
    private 'accounts_password_change_status'?: Array<string>;
    private 'resources_id'?: Array<string>;
    public constructor(vendor?: string, resourceProvider?: string, resourceType?: string, instanceType?: string, resourcesId?: Array<string>) { 
        this['vendor'] = vendor;
        this['resource_provider'] = resourceProvider;
        this['resource_type'] = resourceType;
        this['instance_type'] = instanceType;
        this['resources_id'] = resourcesId;
    }
    public withVendor(vendor: string): CreatePasswordChangePlanRequestBody {
        this['vendor'] = vendor;
        return this;
    }
    public withResourceProvider(resourceProvider: string): CreatePasswordChangePlanRequestBody {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withResourceType(resourceType: string): CreatePasswordChangePlanRequestBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withInstanceType(instanceType: string): CreatePasswordChangePlanRequestBody {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withAccountsToBeChanged(accountsToBeChanged: Array<string>): CreatePasswordChangePlanRequestBody {
        this['accounts_to_be_changed'] = accountsToBeChanged;
        return this;
    }
    public set accountsToBeChanged(accountsToBeChanged: Array<string>  | undefined) {
        this['accounts_to_be_changed'] = accountsToBeChanged;
    }
    public get accountsToBeChanged(): Array<string> | undefined {
        return this['accounts_to_be_changed'];
    }
    public withAccountsNotToBeChanged(accountsNotToBeChanged: Array<string>): CreatePasswordChangePlanRequestBody {
        this['accounts_not_to_be_changed'] = accountsNotToBeChanged;
        return this;
    }
    public set accountsNotToBeChanged(accountsNotToBeChanged: Array<string>  | undefined) {
        this['accounts_not_to_be_changed'] = accountsNotToBeChanged;
    }
    public get accountsNotToBeChanged(): Array<string> | undefined {
        return this['accounts_not_to_be_changed'];
    }
    public withAccountsPasswordChangeStatus(accountsPasswordChangeStatus: Array<string>): CreatePasswordChangePlanRequestBody {
        this['accounts_password_change_status'] = accountsPasswordChangeStatus;
        return this;
    }
    public set accountsPasswordChangeStatus(accountsPasswordChangeStatus: Array<string>  | undefined) {
        this['accounts_password_change_status'] = accountsPasswordChangeStatus;
    }
    public get accountsPasswordChangeStatus(): Array<string> | undefined {
        return this['accounts_password_change_status'];
    }
    public withResourcesId(resourcesId: Array<string>): CreatePasswordChangePlanRequestBody {
        this['resources_id'] = resourcesId;
        return this;
    }
    public set resourcesId(resourcesId: Array<string>  | undefined) {
        this['resources_id'] = resourcesId;
    }
    public get resourcesId(): Array<string> | undefined {
        return this['resources_id'];
    }
}