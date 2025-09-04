import { HarmonySoftBusResponseDTO } from './HarmonySoftBusResponseDTO';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHarmonySoftBusResponse extends SdkResponse {
    private 'harmony_soft_buses'?: Array<HarmonySoftBusResponseDTO>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withHarmonySoftBuses(harmonySoftBuses: Array<HarmonySoftBusResponseDTO>): ListHarmonySoftBusResponse {
        this['harmony_soft_buses'] = harmonySoftBuses;
        return this;
    }
    public set harmonySoftBuses(harmonySoftBuses: Array<HarmonySoftBusResponseDTO>  | undefined) {
        this['harmony_soft_buses'] = harmonySoftBuses;
    }
    public get harmonySoftBuses(): Array<HarmonySoftBusResponseDTO> | undefined {
        return this['harmony_soft_buses'];
    }
    public withPage(page: Page): ListHarmonySoftBusResponse {
        this['page'] = page;
        return this;
    }
}