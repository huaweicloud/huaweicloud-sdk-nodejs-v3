import { DbObjectSpaceInfo } from './DbObjectSpaceInfo';
import { InstanceSpaceInfo } from './InstanceSpaceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSpaceAnalysisResponse extends SdkResponse {
    public total?: number;
    private 'db_objects'?: Array<DbObjectSpaceInfo>;
    private 'instance_info'?: InstanceSpaceInfo;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSpaceAnalysisResponse {
        this['total'] = total;
        return this;
    }
    public withDbObjects(dbObjects: Array<DbObjectSpaceInfo>): ListSpaceAnalysisResponse {
        this['db_objects'] = dbObjects;
        return this;
    }
    public set dbObjects(dbObjects: Array<DbObjectSpaceInfo>  | undefined) {
        this['db_objects'] = dbObjects;
    }
    public get dbObjects(): Array<DbObjectSpaceInfo> | undefined {
        return this['db_objects'];
    }
    public withInstanceInfo(instanceInfo: InstanceSpaceInfo): ListSpaceAnalysisResponse {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: InstanceSpaceInfo  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): InstanceSpaceInfo | undefined {
        return this['instance_info'];
    }
}