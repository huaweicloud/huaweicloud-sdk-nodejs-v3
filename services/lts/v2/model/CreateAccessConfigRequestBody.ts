import { AccessConfigBaseLogInfoCreate } from './AccessConfigBaseLogInfoCreate';
import { AccessConfigDeatilCreate } from './AccessConfigDeatilCreate';
import { AccessConfigHostGroupIdListCreate } from './AccessConfigHostGroupIdListCreate';
import { AccessConfigTag } from './AccessConfigTag';
import { DemoFieldAccess } from './DemoFieldAccess';
import { Processor } from './Processor';


export class CreateAccessConfigRequestBody {
    private 'access_config_name'?: string;
    private 'access_config_type'?: CreateAccessConfigRequestBodyAccessConfigTypeEnum | string;
    private 'access_config_detail'?: AccessConfigDeatilCreate;
    private 'log_info'?: AccessConfigBaseLogInfoCreate;
    private 'host_group_info'?: AccessConfigHostGroupIdListCreate;
    private 'access_config_tag'?: Array<AccessConfigTag>;
    private 'binary_collect'?: boolean;
    private 'log_split'?: boolean;
    private 'cluster_id'?: string;
    private 'incremental_collect'?: boolean;
    private 'encoding_format'?: string;
    private 'processor_type'?: string;
    private 'demo_log'?: string;
    private 'demo_fields'?: Array<DemoFieldAccess>;
    public processors?: Array<Processor>;
    private 'application_id'?: string;
    private 'environment_id'?: string;
    private 'component_id'?: Array<string>;
    private 'access_config_type_source'?: string;
    private 'recursive_depth'?: number;
    public constructor(accessConfigName?: string, accessConfigType?: string, accessConfigDetail?: AccessConfigDeatilCreate, logInfo?: AccessConfigBaseLogInfoCreate) { 
        this['access_config_name'] = accessConfigName;
        this['access_config_type'] = accessConfigType;
        this['access_config_detail'] = accessConfigDetail;
        this['log_info'] = logInfo;
    }
    public withAccessConfigName(accessConfigName: string): CreateAccessConfigRequestBody {
        this['access_config_name'] = accessConfigName;
        return this;
    }
    public set accessConfigName(accessConfigName: string  | undefined) {
        this['access_config_name'] = accessConfigName;
    }
    public get accessConfigName(): string | undefined {
        return this['access_config_name'];
    }
    public withAccessConfigType(accessConfigType: CreateAccessConfigRequestBodyAccessConfigTypeEnum | string): CreateAccessConfigRequestBody {
        this['access_config_type'] = accessConfigType;
        return this;
    }
    public set accessConfigType(accessConfigType: CreateAccessConfigRequestBodyAccessConfigTypeEnum | string  | undefined) {
        this['access_config_type'] = accessConfigType;
    }
    public get accessConfigType(): CreateAccessConfigRequestBodyAccessConfigTypeEnum | string | undefined {
        return this['access_config_type'];
    }
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate): CreateAccessConfigRequestBody {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate  | undefined) {
        this['access_config_detail'] = accessConfigDetail;
    }
    public get accessConfigDetail(): AccessConfigDeatilCreate | undefined {
        return this['access_config_detail'];
    }
    public withLogInfo(logInfo: AccessConfigBaseLogInfoCreate): CreateAccessConfigRequestBody {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: AccessConfigBaseLogInfoCreate  | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo(): AccessConfigBaseLogInfoCreate | undefined {
        return this['log_info'];
    }
    public withHostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdListCreate): CreateAccessConfigRequestBody {
        this['host_group_info'] = hostGroupInfo;
        return this;
    }
    public set hostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdListCreate  | undefined) {
        this['host_group_info'] = hostGroupInfo;
    }
    public get hostGroupInfo(): AccessConfigHostGroupIdListCreate | undefined {
        return this['host_group_info'];
    }
    public withAccessConfigTag(accessConfigTag: Array<AccessConfigTag>): CreateAccessConfigRequestBody {
        this['access_config_tag'] = accessConfigTag;
        return this;
    }
    public set accessConfigTag(accessConfigTag: Array<AccessConfigTag>  | undefined) {
        this['access_config_tag'] = accessConfigTag;
    }
    public get accessConfigTag(): Array<AccessConfigTag> | undefined {
        return this['access_config_tag'];
    }
    public withBinaryCollect(binaryCollect: boolean): CreateAccessConfigRequestBody {
        this['binary_collect'] = binaryCollect;
        return this;
    }
    public set binaryCollect(binaryCollect: boolean  | undefined) {
        this['binary_collect'] = binaryCollect;
    }
    public get binaryCollect(): boolean | undefined {
        return this['binary_collect'];
    }
    public withLogSplit(logSplit: boolean): CreateAccessConfigRequestBody {
        this['log_split'] = logSplit;
        return this;
    }
    public set logSplit(logSplit: boolean  | undefined) {
        this['log_split'] = logSplit;
    }
    public get logSplit(): boolean | undefined {
        return this['log_split'];
    }
    public withClusterId(clusterId: string): CreateAccessConfigRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withIncrementalCollect(incrementalCollect: boolean): CreateAccessConfigRequestBody {
        this['incremental_collect'] = incrementalCollect;
        return this;
    }
    public set incrementalCollect(incrementalCollect: boolean  | undefined) {
        this['incremental_collect'] = incrementalCollect;
    }
    public get incrementalCollect(): boolean | undefined {
        return this['incremental_collect'];
    }
    public withEncodingFormat(encodingFormat: string): CreateAccessConfigRequestBody {
        this['encoding_format'] = encodingFormat;
        return this;
    }
    public set encodingFormat(encodingFormat: string  | undefined) {
        this['encoding_format'] = encodingFormat;
    }
    public get encodingFormat(): string | undefined {
        return this['encoding_format'];
    }
    public withProcessorType(processorType: string): CreateAccessConfigRequestBody {
        this['processor_type'] = processorType;
        return this;
    }
    public set processorType(processorType: string  | undefined) {
        this['processor_type'] = processorType;
    }
    public get processorType(): string | undefined {
        return this['processor_type'];
    }
    public withDemoLog(demoLog: string): CreateAccessConfigRequestBody {
        this['demo_log'] = demoLog;
        return this;
    }
    public set demoLog(demoLog: string  | undefined) {
        this['demo_log'] = demoLog;
    }
    public get demoLog(): string | undefined {
        return this['demo_log'];
    }
    public withDemoFields(demoFields: Array<DemoFieldAccess>): CreateAccessConfigRequestBody {
        this['demo_fields'] = demoFields;
        return this;
    }
    public set demoFields(demoFields: Array<DemoFieldAccess>  | undefined) {
        this['demo_fields'] = demoFields;
    }
    public get demoFields(): Array<DemoFieldAccess> | undefined {
        return this['demo_fields'];
    }
    public withProcessors(processors: Array<Processor>): CreateAccessConfigRequestBody {
        this['processors'] = processors;
        return this;
    }
    public withApplicationId(applicationId: string): CreateAccessConfigRequestBody {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): CreateAccessConfigRequestBody {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withComponentId(componentId: Array<string>): CreateAccessConfigRequestBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: Array<string>  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): Array<string> | undefined {
        return this['component_id'];
    }
    public withAccessConfigTypeSource(accessConfigTypeSource: string): CreateAccessConfigRequestBody {
        this['access_config_type_source'] = accessConfigTypeSource;
        return this;
    }
    public set accessConfigTypeSource(accessConfigTypeSource: string  | undefined) {
        this['access_config_type_source'] = accessConfigTypeSource;
    }
    public get accessConfigTypeSource(): string | undefined {
        return this['access_config_type_source'];
    }
    public withRecursiveDepth(recursiveDepth: number): CreateAccessConfigRequestBody {
        this['recursive_depth'] = recursiveDepth;
        return this;
    }
    public set recursiveDepth(recursiveDepth: number  | undefined) {
        this['recursive_depth'] = recursiveDepth;
    }
    public get recursiveDepth(): number | undefined {
        return this['recursive_depth'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAccessConfigRequestBodyAccessConfigTypeEnum {
    AGENT = 'AGENT',
    K8S_CCE = 'K8S_CCE'
}
