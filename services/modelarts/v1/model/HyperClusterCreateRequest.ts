

export class HyperClusterCreateRequest {
    public name?: string;
    private 'hyper_cluster_subnet_id'?: string;
    public type?: HyperClusterCreateRequestTypeEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): HyperClusterCreateRequest {
        this['name'] = name;
        return this;
    }
    public withHyperClusterSubnetId(hyperClusterSubnetId: string): HyperClusterCreateRequest {
        this['hyper_cluster_subnet_id'] = hyperClusterSubnetId;
        return this;
    }
    public set hyperClusterSubnetId(hyperClusterSubnetId: string  | undefined) {
        this['hyper_cluster_subnet_id'] = hyperClusterSubnetId;
    }
    public get hyperClusterSubnetId(): string | undefined {
        return this['hyper_cluster_subnet_id'];
    }
    public withType(type: HyperClusterCreateRequestTypeEnum | string): HyperClusterCreateRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HyperClusterCreateRequestTypeEnum {
    HPS = 'HPS',
    ECS = 'ECS'
}
