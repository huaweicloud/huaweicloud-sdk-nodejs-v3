import { ListProductsRespIo } from './ListProductsRespIo';


export class ShowInstanceExtendProductInfoRespDetail {
    public tps?: string;
    public storage?: string;
    private 'partition_num'?: string | undefined;
    private 'product_id'?: string | undefined;
    private 'spec_code'?: string | undefined;
    public io?: Array<ListProductsRespIo>;
    public bandwidth?: string;
    private 'recommend_max_consGroups'?: string | undefined;
    private 'unavailable_zones'?: Array<string> | undefined;
    private 'available_zones'?: Array<string> | undefined;
    private 'ecs_flavor_id'?: string | undefined;
    private 'arch_type'?: string | undefined;
    public constructor() { 
    }
    public withTps(tps: string): ShowInstanceExtendProductInfoRespDetail {
        this['tps'] = tps;
        return this;
    }
    public withStorage(storage: string): ShowInstanceExtendProductInfoRespDetail {
        this['storage'] = storage;
        return this;
    }
    public withPartitionNum(partitionNum: string): ShowInstanceExtendProductInfoRespDetail {
        this['partition_num'] = partitionNum;
        return this;
    }
    public set partitionNum(partitionNum: string | undefined) {
        this['partition_num'] = partitionNum;
    }
    public get partitionNum() {
        return this['partition_num'];
    }
    public withProductId(productId: string): ShowInstanceExtendProductInfoRespDetail {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withSpecCode(specCode: string): ShowInstanceExtendProductInfoRespDetail {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
        return this['spec_code'];
    }
    public withIo(io: Array<ListProductsRespIo>): ShowInstanceExtendProductInfoRespDetail {
        this['io'] = io;
        return this;
    }
    public withBandwidth(bandwidth: string): ShowInstanceExtendProductInfoRespDetail {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withRecommendMaxConsGroups(recommendMaxConsGroups: string): ShowInstanceExtendProductInfoRespDetail {
        this['recommend_max_consGroups'] = recommendMaxConsGroups;
        return this;
    }
    public set recommendMaxConsGroups(recommendMaxConsGroups: string | undefined) {
        this['recommend_max_consGroups'] = recommendMaxConsGroups;
    }
    public get recommendMaxConsGroups() {
        return this['recommend_max_consGroups'];
    }
    public withUnavailableZones(unavailableZones: Array<string>): ShowInstanceExtendProductInfoRespDetail {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string> | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones() {
        return this['unavailable_zones'];
    }
    public withAvailableZones(availableZones: Array<string>): ShowInstanceExtendProductInfoRespDetail {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withEcsFlavorId(ecsFlavorId: string): ShowInstanceExtendProductInfoRespDetail {
        this['ecs_flavor_id'] = ecsFlavorId;
        return this;
    }
    public set ecsFlavorId(ecsFlavorId: string | undefined) {
        this['ecs_flavor_id'] = ecsFlavorId;
    }
    public get ecsFlavorId() {
        return this['ecs_flavor_id'];
    }
    public withArchType(archType: string): ShowInstanceExtendProductInfoRespDetail {
        this['arch_type'] = archType;
        return this;
    }
    public set archType(archType: string | undefined) {
        this['arch_type'] = archType;
    }
    public get archType() {
        return this['arch_type'];
    }
}