import { SupportNetWorkTypeResponse } from './SupportNetWorkTypeResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSupportedEnginesResponse extends SdkResponse {
    private 'all_engine_types'?: Array<string>;
    private 'supported_engine_types'?: Array<string>;
    private 'supported_net_work_types'?: Array<SupportNetWorkTypeResponse>;
    private 'supported_cloud_dba_types'?: Array<SupportNetWorkTypeResponse>;
    public constructor() { 
        super();
    }
    public withAllEngineTypes(allEngineTypes: Array<string>): ShowSupportedEnginesResponse {
        this['all_engine_types'] = allEngineTypes;
        return this;
    }
    public set allEngineTypes(allEngineTypes: Array<string>  | undefined) {
        this['all_engine_types'] = allEngineTypes;
    }
    public get allEngineTypes(): Array<string> | undefined {
        return this['all_engine_types'];
    }
    public withSupportedEngineTypes(supportedEngineTypes: Array<string>): ShowSupportedEnginesResponse {
        this['supported_engine_types'] = supportedEngineTypes;
        return this;
    }
    public set supportedEngineTypes(supportedEngineTypes: Array<string>  | undefined) {
        this['supported_engine_types'] = supportedEngineTypes;
    }
    public get supportedEngineTypes(): Array<string> | undefined {
        return this['supported_engine_types'];
    }
    public withSupportedNetWorkTypes(supportedNetWorkTypes: Array<SupportNetWorkTypeResponse>): ShowSupportedEnginesResponse {
        this['supported_net_work_types'] = supportedNetWorkTypes;
        return this;
    }
    public set supportedNetWorkTypes(supportedNetWorkTypes: Array<SupportNetWorkTypeResponse>  | undefined) {
        this['supported_net_work_types'] = supportedNetWorkTypes;
    }
    public get supportedNetWorkTypes(): Array<SupportNetWorkTypeResponse> | undefined {
        return this['supported_net_work_types'];
    }
    public withSupportedCloudDbaTypes(supportedCloudDbaTypes: Array<SupportNetWorkTypeResponse>): ShowSupportedEnginesResponse {
        this['supported_cloud_dba_types'] = supportedCloudDbaTypes;
        return this;
    }
    public set supportedCloudDbaTypes(supportedCloudDbaTypes: Array<SupportNetWorkTypeResponse>  | undefined) {
        this['supported_cloud_dba_types'] = supportedCloudDbaTypes;
    }
    public get supportedCloudDbaTypes(): Array<SupportNetWorkTypeResponse> | undefined {
        return this['supported_cloud_dba_types'];
    }
}