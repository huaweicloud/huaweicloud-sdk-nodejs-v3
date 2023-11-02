import { BackendConfig } from './BackendConfig';
import { DatasourceConfig } from './DatasourceConfig';
import { InstanceHostDTO } from './InstanceHostDTO';
import { RequestPara } from './RequestPara';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'group_id'?: string;
    public description?: string;
    public protocol?: ShowApiResponseProtocolEnum | string;
    private 'publish_type'?: ShowApiResponsePublishTypeEnum | string;
    private 'log_flag'?: boolean;
    public path?: string;
    public host?: string;
    public hosts?: InstanceHostDTO;
    private 'request_type'?: ShowApiResponseRequestTypeEnum | string;
    private 'create_user'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public manager?: string;
    public status?: ShowApiResponseStatusEnum | string;
    public type?: ShowApiResponseTypeEnum | string;
    private 'debug_status'?: ShowApiResponseDebugStatusEnum | string;
    private 'request_paras'?: Array<RequestPara>;
    private 'datasource_config'?: DatasourceConfig;
    private 'backend_config'?: BackendConfig;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowApiResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowApiResponse {
        this['name'] = name;
        return this;
    }
    public withGroupId(groupId: string): ShowApiResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDescription(description: string): ShowApiResponse {
        this['description'] = description;
        return this;
    }
    public withProtocol(protocol: ShowApiResponseProtocolEnum | string): ShowApiResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withPublishType(publishType: ShowApiResponsePublishTypeEnum | string): ShowApiResponse {
        this['publish_type'] = publishType;
        return this;
    }
    public set publishType(publishType: ShowApiResponsePublishTypeEnum | string  | undefined) {
        this['publish_type'] = publishType;
    }
    public get publishType(): ShowApiResponsePublishTypeEnum | string | undefined {
        return this['publish_type'];
    }
    public withLogFlag(logFlag: boolean): ShowApiResponse {
        this['log_flag'] = logFlag;
        return this;
    }
    public set logFlag(logFlag: boolean  | undefined) {
        this['log_flag'] = logFlag;
    }
    public get logFlag(): boolean | undefined {
        return this['log_flag'];
    }
    public withPath(path: string): ShowApiResponse {
        this['path'] = path;
        return this;
    }
    public withHost(host: string): ShowApiResponse {
        this['host'] = host;
        return this;
    }
    public withHosts(hosts: InstanceHostDTO): ShowApiResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withRequestType(requestType: ShowApiResponseRequestTypeEnum | string): ShowApiResponse {
        this['request_type'] = requestType;
        return this;
    }
    public set requestType(requestType: ShowApiResponseRequestTypeEnum | string  | undefined) {
        this['request_type'] = requestType;
    }
    public get requestType(): ShowApiResponseRequestTypeEnum | string | undefined {
        return this['request_type'];
    }
    public withCreateUser(createUser: string): ShowApiResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): ShowApiResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowApiResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withManager(manager: string): ShowApiResponse {
        this['manager'] = manager;
        return this;
    }
    public withStatus(status: ShowApiResponseStatusEnum | string): ShowApiResponse {
        this['status'] = status;
        return this;
    }
    public withType(type: ShowApiResponseTypeEnum | string): ShowApiResponse {
        this['type'] = type;
        return this;
    }
    public withDebugStatus(debugStatus: ShowApiResponseDebugStatusEnum | string): ShowApiResponse {
        this['debug_status'] = debugStatus;
        return this;
    }
    public set debugStatus(debugStatus: ShowApiResponseDebugStatusEnum | string  | undefined) {
        this['debug_status'] = debugStatus;
    }
    public get debugStatus(): ShowApiResponseDebugStatusEnum | string | undefined {
        return this['debug_status'];
    }
    public withRequestParas(requestParas: Array<RequestPara>): ShowApiResponse {
        this['request_paras'] = requestParas;
        return this;
    }
    public set requestParas(requestParas: Array<RequestPara>  | undefined) {
        this['request_paras'] = requestParas;
    }
    public get requestParas(): Array<RequestPara> | undefined {
        return this['request_paras'];
    }
    public withDatasourceConfig(datasourceConfig: DatasourceConfig): ShowApiResponse {
        this['datasource_config'] = datasourceConfig;
        return this;
    }
    public set datasourceConfig(datasourceConfig: DatasourceConfig  | undefined) {
        this['datasource_config'] = datasourceConfig;
    }
    public get datasourceConfig(): DatasourceConfig | undefined {
        return this['datasource_config'];
    }
    public withBackendConfig(backendConfig: BackendConfig): ShowApiResponse {
        this['backend_config'] = backendConfig;
        return this;
    }
    public set backendConfig(backendConfig: BackendConfig  | undefined) {
        this['backend_config'] = backendConfig;
    }
    public get backendConfig(): BackendConfig | undefined {
        return this['backend_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApiResponseProtocolEnum {
    PROTOCOL_TYPE_HTTP = 'PROTOCOL_TYPE_HTTP',
    PROTOCOL_TYPE_HTTPS = 'PROTOCOL_TYPE_HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowApiResponsePublishTypeEnum {
    PUBLISH_TYPE_PUBLIC = 'PUBLISH_TYPE_PUBLIC',
    PUBLISH_TYPE_PRIVATE = 'PUBLISH_TYPE_PRIVATE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowApiResponseRequestTypeEnum {
    REQUEST_TYPE_POST = 'REQUEST_TYPE_POST',
    REQUEST_TYPE_GET = 'REQUEST_TYPE_GET'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowApiResponseStatusEnum {
    API_STATUS_CREATED = 'API_STATUS_CREATED',
    API_STATUS_PUBLISH_WAIT_REVIEW = 'API_STATUS_PUBLISH_WAIT_REVIEW',
    API_STATUS_PUBLISH_REJECT = 'API_STATUS_PUBLISH_REJECT',
    API_STATUS_PUBLISHED = 'API_STATUS_PUBLISHED',
    API_STATUS_WAITING_STOP = 'API_STATUS_WAITING_STOP',
    API_STATUS_STOPPED = 'API_STATUS_STOPPED',
    API_STATUS_RECOVER_WAIT_REVIEW = 'API_STATUS_RECOVER_WAIT_REVIEW',
    API_STATUS_WAITING_OFFLINE = 'API_STATUS_WAITING_OFFLINE',
    API_STATUS_OFFLINE = 'API_STATUS_OFFLINE',
    API_STATUS_OFFLINE_WAIT_REVIEW = 'API_STATUS_OFFLINE_WAIT_REVIEW'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowApiResponseTypeEnum {
    API_SPECIFIC_TYPE_CONFIGURATION = 'API_SPECIFIC_TYPE_CONFIGURATION',
    API_SPECIFIC_TYPE_SCRIPT = 'API_SPECIFIC_TYPE_SCRIPT',
    API_SPECIFIC_TYPE_REGISTER = 'API_SPECIFIC_TYPE_REGISTER'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowApiResponseDebugStatusEnum {
    API_DEBUG_WAITING = 'API_DEBUG_WAITING',
    API_DEBUG_FAILED = 'API_DEBUG_FAILED',
    API_DEBUG_SUCCESS = 'API_DEBUG_SUCCESS'
}
