import { BillingInfo } from './BillingInfo';
import { FlavorInfoResponse } from './FlavorInfoResponse';


export class FlavorResponseWithSupport {
    private 'pool_id'?: string;
    private 'flavor_id'?: string;
    private 'flavor_name'?: string;
    private 'support_engines'?: string;
    private 'support_groups'?: string;
    private 'max_num'?: number;
    private 'flavor_type'?: string;
    public billing?: BillingInfo;
    private 'flavor_info'?: FlavorInfoResponse;
    public attributes?: { [key: string]: string; };
    public constructor() { 
    }
    public withPoolId(poolId: string): FlavorResponseWithSupport {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withFlavorId(flavorId: string): FlavorResponseWithSupport {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withFlavorName(flavorName: string): FlavorResponseWithSupport {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
    public withSupportEngines(supportEngines: string): FlavorResponseWithSupport {
        this['support_engines'] = supportEngines;
        return this;
    }
    public set supportEngines(supportEngines: string  | undefined) {
        this['support_engines'] = supportEngines;
    }
    public get supportEngines(): string | undefined {
        return this['support_engines'];
    }
    public withSupportGroups(supportGroups: string): FlavorResponseWithSupport {
        this['support_groups'] = supportGroups;
        return this;
    }
    public set supportGroups(supportGroups: string  | undefined) {
        this['support_groups'] = supportGroups;
    }
    public get supportGroups(): string | undefined {
        return this['support_groups'];
    }
    public withMaxNum(maxNum: number): FlavorResponseWithSupport {
        this['max_num'] = maxNum;
        return this;
    }
    public set maxNum(maxNum: number  | undefined) {
        this['max_num'] = maxNum;
    }
    public get maxNum(): number | undefined {
        return this['max_num'];
    }
    public withFlavorType(flavorType: string): FlavorResponseWithSupport {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withBilling(billing: BillingInfo): FlavorResponseWithSupport {
        this['billing'] = billing;
        return this;
    }
    public withFlavorInfo(flavorInfo: FlavorInfoResponse): FlavorResponseWithSupport {
        this['flavor_info'] = flavorInfo;
        return this;
    }
    public set flavorInfo(flavorInfo: FlavorInfoResponse  | undefined) {
        this['flavor_info'] = flavorInfo;
    }
    public get flavorInfo(): FlavorInfoResponse | undefined {
        return this['flavor_info'];
    }
    public withAttributes(attributes: { [key: string]: string; }): FlavorResponseWithSupport {
        this['attributes'] = attributes;
        return this;
    }
}