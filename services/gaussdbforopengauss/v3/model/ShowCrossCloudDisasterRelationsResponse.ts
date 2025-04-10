import { DisasterRelations } from './DisasterRelations';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCrossCloudDisasterRelationsResponse extends SdkResponse {
    public total?: number;
    public relations?: Array<DisasterRelations>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowCrossCloudDisasterRelationsResponse {
        this['total'] = total;
        return this;
    }
    public withRelations(relations: Array<DisasterRelations>): ShowCrossCloudDisasterRelationsResponse {
        this['relations'] = relations;
        return this;
    }
}