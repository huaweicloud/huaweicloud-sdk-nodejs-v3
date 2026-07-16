import { MainContainerCustomizedFlavor } from './MainContainerCustomizedFlavor';


export class SpecResource {
    private 'flavor_id'?: string;
    private 'node_count'?: number;
    private 'pool_id'?: string;
    private 'pool_group_id'?: string;
    private 'main_container_customized_flavor'?: MainContainerCustomizedFlavor;
    public constructor(nodeCount?: number) { 
        this['node_count'] = nodeCount;
    }
    public withFlavorId(flavorId: string): SpecResource {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withNodeCount(nodeCount: number): SpecResource {
        this['node_count'] = nodeCount;
        return this;
    }
    public set nodeCount(nodeCount: number  | undefined) {
        this['node_count'] = nodeCount;
    }
    public get nodeCount(): number | undefined {
        return this['node_count'];
    }
    public withPoolId(poolId: string): SpecResource {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withPoolGroupId(poolGroupId: string): SpecResource {
        this['pool_group_id'] = poolGroupId;
        return this;
    }
    public set poolGroupId(poolGroupId: string  | undefined) {
        this['pool_group_id'] = poolGroupId;
    }
    public get poolGroupId(): string | undefined {
        return this['pool_group_id'];
    }
    public withMainContainerCustomizedFlavor(mainContainerCustomizedFlavor: MainContainerCustomizedFlavor): SpecResource {
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