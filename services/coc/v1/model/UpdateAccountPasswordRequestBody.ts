import { UpdateAccountPassword } from './UpdateAccountPassword';


export class UpdateAccountPasswordRequestBody {
    public vendor?: string;
    private 'resource_provider'?: string;
    private 'resource_type'?: string;
    private 'instance_type'?: string;
    private 'password_change_result'?: Array<UpdateAccountPassword>;
    public constructor(vendor?: string, resourceProvider?: string, resourceType?: string, instanceType?: string, passwordChangeResult?: Array<UpdateAccountPassword>) { 
        this['vendor'] = vendor;
        this['resource_provider'] = resourceProvider;
        this['resource_type'] = resourceType;
        this['instance_type'] = instanceType;
        this['password_change_result'] = passwordChangeResult;
    }
    public withVendor(vendor: string): UpdateAccountPasswordRequestBody {
        this['vendor'] = vendor;
        return this;
    }
    public withResourceProvider(resourceProvider: string): UpdateAccountPasswordRequestBody {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withResourceType(resourceType: string): UpdateAccountPasswordRequestBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withInstanceType(instanceType: string): UpdateAccountPasswordRequestBody {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withPasswordChangeResult(passwordChangeResult: Array<UpdateAccountPassword>): UpdateAccountPasswordRequestBody {
        this['password_change_result'] = passwordChangeResult;
        return this;
    }
    public set passwordChangeResult(passwordChangeResult: Array<UpdateAccountPassword>  | undefined) {
        this['password_change_result'] = passwordChangeResult;
    }
    public get passwordChangeResult(): Array<UpdateAccountPassword> | undefined {
        return this['password_change_result'];
    }
}