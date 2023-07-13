import { ListProductsRespDetail } from './ListProductsRespDetail';


export class ListProductsRespValues {
    public detail?: Array<ListProductsRespDetail>;
    public name?: string;
    private 'unavailable_zones'?: Array<string> | undefined;
    private 'available_zones'?: Array<string> | undefined;
    public constructor() { 
    }
    public withDetail(detail: Array<ListProductsRespDetail>): ListProductsRespValues {
        this['detail'] = detail;
        return this;
    }
    public withName(name: string): ListProductsRespValues {
        this['name'] = name;
        return this;
    }
    public withUnavailableZones(unavailableZones: Array<string>): ListProductsRespValues {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string> | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones() {
        return this['unavailable_zones'];
    }
    public withAvailableZones(availableZones: Array<string>): ListProductsRespValues {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
}