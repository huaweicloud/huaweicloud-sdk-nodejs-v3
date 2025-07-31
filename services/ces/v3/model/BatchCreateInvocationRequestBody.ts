import { RemoteInstallHostInfo } from './RemoteInstallHostInfo';


export class BatchCreateInvocationRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'invocation_type'?: BatchCreateInvocationRequestBodyInvocationTypeEnum | string;
    private 'invocation_target'?: BatchCreateInvocationRequestBodyInvocationTargetEnum | string;
    private 'invocation_ids'?: Array<string>;
    private 'version_type'?: BatchCreateInvocationRequestBodyVersionTypeEnum | string;
    public origin?: BatchCreateInvocationRequestBodyOriginEnum | string;
    public version?: string;
    private 'remote_install_meta'?: Array<RemoteInstallHostInfo>;
    public constructor(invocationType?: string) { 
        this['invocation_type'] = invocationType;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchCreateInvocationRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withInvocationType(invocationType: BatchCreateInvocationRequestBodyInvocationTypeEnum | string): BatchCreateInvocationRequestBody {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: BatchCreateInvocationRequestBodyInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): BatchCreateInvocationRequestBodyInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withInvocationTarget(invocationTarget: BatchCreateInvocationRequestBodyInvocationTargetEnum | string): BatchCreateInvocationRequestBody {
        this['invocation_target'] = invocationTarget;
        return this;
    }
    public set invocationTarget(invocationTarget: BatchCreateInvocationRequestBodyInvocationTargetEnum | string  | undefined) {
        this['invocation_target'] = invocationTarget;
    }
    public get invocationTarget(): BatchCreateInvocationRequestBodyInvocationTargetEnum | string | undefined {
        return this['invocation_target'];
    }
    public withInvocationIds(invocationIds: Array<string>): BatchCreateInvocationRequestBody {
        this['invocation_ids'] = invocationIds;
        return this;
    }
    public set invocationIds(invocationIds: Array<string>  | undefined) {
        this['invocation_ids'] = invocationIds;
    }
    public get invocationIds(): Array<string> | undefined {
        return this['invocation_ids'];
    }
    public withVersionType(versionType: BatchCreateInvocationRequestBodyVersionTypeEnum | string): BatchCreateInvocationRequestBody {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: BatchCreateInvocationRequestBodyVersionTypeEnum | string  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): BatchCreateInvocationRequestBodyVersionTypeEnum | string | undefined {
        return this['version_type'];
    }
    public withOrigin(origin: BatchCreateInvocationRequestBodyOriginEnum | string): BatchCreateInvocationRequestBody {
        this['origin'] = origin;
        return this;
    }
    public withVersion(version: string): BatchCreateInvocationRequestBody {
        this['version'] = version;
        return this;
    }
    public withRemoteInstallMeta(remoteInstallMeta: Array<RemoteInstallHostInfo>): BatchCreateInvocationRequestBody {
        this['remote_install_meta'] = remoteInstallMeta;
        return this;
    }
    public set remoteInstallMeta(remoteInstallMeta: Array<RemoteInstallHostInfo>  | undefined) {
        this['remote_install_meta'] = remoteInstallMeta;
    }
    public get remoteInstallMeta(): Array<RemoteInstallHostInfo> | undefined {
        return this['remote_install_meta'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateInvocationRequestBodyInvocationTypeEnum {
    INSTALL = 'INSTALL',
    UPDATE = 'UPDATE',
    ROLLBACK = 'ROLLBACK',
    RETRY = 'RETRY',
    SET_REMOTE_INSTALL_HOST = 'SET_REMOTE_INSTALL_HOST',
    REMOTE_INSTALL = 'REMOTE_INSTALL'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchCreateInvocationRequestBodyInvocationTargetEnum {
    TELESCOPE = 'telescope'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchCreateInvocationRequestBodyVersionTypeEnum {
    BASIC_VERSION = 'BASIC_VERSION',
    ADVANCE_VERSION = 'ADVANCE_VERSION'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchCreateInvocationRequestBodyOriginEnum {
    CES = 'CES',
    APICOM_BMS = 'APICOM_BMS',
    ADMIN_SERVER = 'ADMIN_SERVER'
}
