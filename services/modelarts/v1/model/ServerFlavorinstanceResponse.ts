

export class ServerFlavorinstanceResponse {
    public arch?: string;
    private 'availability_zone'?: string;
    private 'charging_mode'?: string;
    public count?: number;
    public flavor?: string;
    private 'flavor_type'?: string;
    private 'roce_num'?: number;
    private 'server_type'?: string;
    private 'sku_code'?: string;
    public specification?: string;
    public status?: string;
    private 'is_sold_out'?: boolean;
    public constructor() { 
    }
    public withArch(arch: string): ServerFlavorinstanceResponse {
        this['arch'] = arch;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ServerFlavorinstanceResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withChargingMode(chargingMode: string): ServerFlavorinstanceResponse {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withCount(count: number): ServerFlavorinstanceResponse {
        this['count'] = count;
        return this;
    }
    public withFlavor(flavor: string): ServerFlavorinstanceResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withFlavorType(flavorType: string): ServerFlavorinstanceResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withRoceNum(roceNum: number): ServerFlavorinstanceResponse {
        this['roce_num'] = roceNum;
        return this;
    }
    public set roceNum(roceNum: number  | undefined) {
        this['roce_num'] = roceNum;
    }
    public get roceNum(): number | undefined {
        return this['roce_num'];
    }
    public withServerType(serverType: string): ServerFlavorinstanceResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withSkuCode(skuCode: string): ServerFlavorinstanceResponse {
        this['sku_code'] = skuCode;
        return this;
    }
    public set skuCode(skuCode: string  | undefined) {
        this['sku_code'] = skuCode;
    }
    public get skuCode(): string | undefined {
        return this['sku_code'];
    }
    public withSpecification(specification: string): ServerFlavorinstanceResponse {
        this['specification'] = specification;
        return this;
    }
    public withStatus(status: string): ServerFlavorinstanceResponse {
        this['status'] = status;
        return this;
    }
    public withIsSoldOut(isSoldOut: boolean): ServerFlavorinstanceResponse {
        this['is_sold_out'] = isSoldOut;
        return this;
    }
    public set isSoldOut(isSoldOut: boolean  | undefined) {
        this['is_sold_out'] = isSoldOut;
    }
    public get isSoldOut(): boolean | undefined {
        return this['is_sold_out'];
    }
}