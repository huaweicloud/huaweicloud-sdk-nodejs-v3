import { InstanceDrRelation } from './InstanceDrRelation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDrRelationsResponse extends SdkResponse {
    private 'instance_dr_relations'?: Array<InstanceDrRelation>;
    public constructor() { 
        super();
    }
    public withInstanceDrRelations(instanceDrRelations: Array<InstanceDrRelation>): ListDrRelationsResponse {
        this['instance_dr_relations'] = instanceDrRelations;
        return this;
    }
    public set instanceDrRelations(instanceDrRelations: Array<InstanceDrRelation>  | undefined) {
        this['instance_dr_relations'] = instanceDrRelations;
    }
    public get instanceDrRelations(): Array<InstanceDrRelation> | undefined {
        return this['instance_dr_relations'];
    }
}