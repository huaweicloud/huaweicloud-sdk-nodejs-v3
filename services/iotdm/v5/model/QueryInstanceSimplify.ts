import { Flavor } from './Flavor';


export class QueryInstanceSimplify {
    private 'instance_type'?: string;
    private 'instance_id'?: string;
    public name?: string;
    private 'charge_mode'?: string;
    public flavor?: Flavor;
    public status?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withInstanceType(instanceType: string): QueryInstanceSimplify {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceId(instanceId: string): QueryInstanceSimplify {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): QueryInstanceSimplify {
        this['name'] = name;
        return this;
    }
    public withChargeMode(chargeMode: string): QueryInstanceSimplify {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withFlavor(flavor: Flavor): QueryInstanceSimplify {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: string): QueryInstanceSimplify {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): QueryInstanceSimplify {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): QueryInstanceSimplify {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QueryInstanceSimplify {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}