import { FlavorDetail } from './FlavorDetail';
import { MainContainerAllocatedResources } from './MainContainerAllocatedResources';
import { MainContainerCustomizedFlavor } from './MainContainerCustomizedFlavor';


export class Resource {
    public policy?: string;
    private 'flavor_id'?: string;
    private 'flavor_name'?: string;
    private 'node_count'?: number;
    private 'pool_id'?: string;
    private 'pool_group_id'?: string;
    private 'flavor_detail'?: FlavorDetail;
    private 'main_container_allocated_resources'?: MainContainerAllocatedResources;
    private 'main_container_customized_flavor'?: MainContainerCustomizedFlavor;
    public constructor(flavorId?: string, nodeCount?: number) { 
        this['flavor_id'] = flavorId;
        this['node_count'] = nodeCount;
    }
    public withPolicy(policy: string): Resource {
        this['policy'] = policy;
        return this;
    }
    public withFlavorId(flavorId: string): Resource {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withFlavorName(flavorName: string): Resource {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
    public withNodeCount(nodeCount: number): Resource {
        this['node_count'] = nodeCount;
        return this;
    }
    public set nodeCount(nodeCount: number  | undefined) {
        this['node_count'] = nodeCount;
    }
    public get nodeCount(): number | undefined {
        return this['node_count'];
    }
    public withPoolId(poolId: string): Resource {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withPoolGroupId(poolGroupId: string): Resource {
        this['pool_group_id'] = poolGroupId;
        return this;
    }
    public set poolGroupId(poolGroupId: string  | undefined) {
        this['pool_group_id'] = poolGroupId;
    }
    public get poolGroupId(): string | undefined {
        return this['pool_group_id'];
    }
    public withFlavorDetail(flavorDetail: FlavorDetail): Resource {
        this['flavor_detail'] = flavorDetail;
        return this;
    }
    public set flavorDetail(flavorDetail: FlavorDetail  | undefined) {
        this['flavor_detail'] = flavorDetail;
    }
    public get flavorDetail(): FlavorDetail | undefined {
        return this['flavor_detail'];
    }
    public withMainContainerAllocatedResources(mainContainerAllocatedResources: MainContainerAllocatedResources): Resource {
        this['main_container_allocated_resources'] = mainContainerAllocatedResources;
        return this;
    }
    public set mainContainerAllocatedResources(mainContainerAllocatedResources: MainContainerAllocatedResources  | undefined) {
        this['main_container_allocated_resources'] = mainContainerAllocatedResources;
    }
    public get mainContainerAllocatedResources(): MainContainerAllocatedResources | undefined {
        return this['main_container_allocated_resources'];
    }
    public withMainContainerCustomizedFlavor(mainContainerCustomizedFlavor: MainContainerCustomizedFlavor): Resource {
        this['main_container_customized_flavor'] = mainContainerCustomizedFlavor;
        return this;
    }
    public set mainContainerCustomizedFlavor(mainContainerCustomizedFlavor: MainContainerCustomizedFlavor  | undefined) {
        this['main_container_customized_flavor'] = mainContainerCustomizedFlavor;
    }
    public get mainContainerCustomizedFlavor(): MainContainerCustomizedFlavor | undefined {
        return this['main_container_customized_flavor'];
    }
}