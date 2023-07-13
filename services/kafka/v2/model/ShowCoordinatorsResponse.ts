import { ShowCoordinatorsRespCoordinators } from './ShowCoordinatorsRespCoordinators';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCoordinatorsResponse extends SdkResponse {
    public coordinators?: Array<ShowCoordinatorsRespCoordinators>;
    public constructor() { 
        super();
    }
    public withCoordinators(coordinators: Array<ShowCoordinatorsRespCoordinators>): ShowCoordinatorsResponse {
        this['coordinators'] = coordinators;
        return this;
    }
}