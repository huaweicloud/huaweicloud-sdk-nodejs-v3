

export class CheckQuotaRequest {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'subscription_num'?: number;
    private 'disk_size'?: number;
    private 'disk_num'?: number;
    private 'is_period'?: boolean;
    private 'deh_id'?: string;
    private 'cluster_id'?: string;
    public constructor(productId?: string, subscriptionNum?: number, diskSize?: number, diskNum?: number) { 
        this['product_id'] = productId;
        this['subscription_num'] = subscriptionNum;
        this['disk_size'] = diskSize;
        this['disk_num'] = diskNum;
    }
    public withProductId(productId: string): CheckQuotaRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): CheckQuotaRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withSubscriptionNum(subscriptionNum: number): CheckQuotaRequest {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
    public withDiskSize(diskSize: number): CheckQuotaRequest {
        this['disk_size'] = diskSize;
        return this;
    }
    public set diskSize(diskSize: number  | undefined) {
        this['disk_size'] = diskSize;
    }
    public get diskSize(): number | undefined {
        return this['disk_size'];
    }
    public withDiskNum(diskNum: number): CheckQuotaRequest {
        this['disk_num'] = diskNum;
        return this;
    }
    public set diskNum(diskNum: number  | undefined) {
        this['disk_num'] = diskNum;
    }
    public get diskNum(): number | undefined {
        return this['disk_num'];
    }
    public withIsPeriod(isPeriod: boolean): CheckQuotaRequest {
        this['is_period'] = isPeriod;
        return this;
    }
    public set isPeriod(isPeriod: boolean  | undefined) {
        this['is_period'] = isPeriod;
    }
    public get isPeriod(): boolean | undefined {
        return this['is_period'];
    }
    public withDehId(dehId: string): CheckQuotaRequest {
        this['deh_id'] = dehId;
        return this;
    }
    public set dehId(dehId: string  | undefined) {
        this['deh_id'] = dehId;
    }
    public get dehId(): string | undefined {
        return this['deh_id'];
    }
    public withClusterId(clusterId: string): CheckQuotaRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}