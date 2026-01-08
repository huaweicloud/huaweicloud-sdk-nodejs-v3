import { OrderExtendParam } from './OrderExtendParam';
import { ResourcePackage } from './ResourcePackage';


export class CreateResourcePackageOrderReq {
    private 'enterprise_project_id'?: string;
    private 'resource_packages'?: Array<ResourcePackage>;
    private 'resource_size'?: number;
    private 'extend_param'?: OrderExtendParam;
    public constructor(resourcePackages?: Array<ResourcePackage>) { 
        this['resource_packages'] = resourcePackages;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateResourcePackageOrderReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResourcePackages(resourcePackages: Array<ResourcePackage>): CreateResourcePackageOrderReq {
        this['resource_packages'] = resourcePackages;
        return this;
    }
    public set resourcePackages(resourcePackages: Array<ResourcePackage>  | undefined) {
        this['resource_packages'] = resourcePackages;
    }
    public get resourcePackages(): Array<ResourcePackage> | undefined {
        return this['resource_packages'];
    }
    public withResourceSize(resourceSize: number): CreateResourcePackageOrderReq {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withExtendParam(extendParam: OrderExtendParam): CreateResourcePackageOrderReq {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: OrderExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): OrderExtendParam | undefined {
        return this['extend_param'];
    }
}