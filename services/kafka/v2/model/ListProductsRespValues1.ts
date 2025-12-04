import { ListProductsRespDetail1 } from './ListProductsRespDetail1';


export class ListProductsRespValues1 {
    public detail?: Array<ListProductsRespDetail1>;
    public name?: string;
    private 'unavailable_zones'?: Array<string>;
    private 'available_zones'?: Array<string>;
    public constructor() { 
    }
    public withDetail(detail: Array<ListProductsRespDetail1>): ListProductsRespValues1 {
        this['detail'] = detail;
        return this;
    }
    public withName(name: string): ListProductsRespValues1 {
        this['name'] = name;
        return this;
    }
    public withUnavailableZones(unavailableZones: Array<string>): ListProductsRespValues1 {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string>  | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones(): Array<string> | undefined {
        return this['unavailable_zones'];
    }
    public withAvailableZones(availableZones: Array<string>): ListProductsRespValues1 {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
}