import { ShowUserChargeTypeResultMainResourceList } from './ShowUserChargeTypeResultMainResourceList';


export class ShowUserChargeTypeResult {
    public type?: string;
    private 'charge_type'?: string;
    private 'main_resource_list'?: Array<ShowUserChargeTypeResultMainResourceList>;
    public constructor() { 
    }
    public withType(type: string): ShowUserChargeTypeResult {
        this['type'] = type;
        return this;
    }
    public withChargeType(chargeType: string): ShowUserChargeTypeResult {
        this['charge_type'] = chargeType;
        return this;
    }
    public set chargeType(chargeType: string  | undefined) {
        this['charge_type'] = chargeType;
    }
    public get chargeType(): string | undefined {
        return this['charge_type'];
    }
    public withMainResourceList(mainResourceList: Array<ShowUserChargeTypeResultMainResourceList>): ShowUserChargeTypeResult {
        this['main_resource_list'] = mainResourceList;
        return this;
    }
    public set mainResourceList(mainResourceList: Array<ShowUserChargeTypeResultMainResourceList>  | undefined) {
        this['main_resource_list'] = mainResourceList;
    }
    public get mainResourceList(): Array<ShowUserChargeTypeResultMainResourceList> | undefined {
        return this['main_resource_list'];
    }
}