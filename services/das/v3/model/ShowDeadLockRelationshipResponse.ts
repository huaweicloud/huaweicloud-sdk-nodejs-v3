import { DeadLockProcess } from './DeadLockProcess';
import { DeadLockResource } from './DeadLockResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeadLockRelationshipResponse extends SdkResponse {
    private 'process_list'?: Array<DeadLockProcess>;
    private 'resource_list'?: Array<DeadLockResource>;
    public constructor() { 
        super();
    }
    public withProcessList(processList: Array<DeadLockProcess>): ShowDeadLockRelationshipResponse {
        this['process_list'] = processList;
        return this;
    }
    public set processList(processList: Array<DeadLockProcess>  | undefined) {
        this['process_list'] = processList;
    }
    public get processList(): Array<DeadLockProcess> | undefined {
        return this['process_list'];
    }
    public withResourceList(resourceList: Array<DeadLockResource>): ShowDeadLockRelationshipResponse {
        this['resource_list'] = resourceList;
        return this;
    }
    public set resourceList(resourceList: Array<DeadLockResource>  | undefined) {
        this['resource_list'] = resourceList;
    }
    public get resourceList(): Array<DeadLockResource> | undefined {
        return this['resource_list'];
    }
}