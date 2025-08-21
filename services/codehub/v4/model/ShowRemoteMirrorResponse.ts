
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRemoteMirrorResponse extends SdkResponse {
    public id?: number;
    private 'repository_id'?: number;
    private 'update_status'?: string;
    private 'last_update_at'?: string;
    public url?: string;
    private 'last_successful_update_at'?: string;
    private 'number_of_failures'?: number;
    private 'mirroring_enabled'?: boolean;
    private 'is_private'?: boolean;
    private 'endpoint_uuid'?: string;
    private 'last_error'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowRemoteMirrorResponse {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): ShowRemoteMirrorResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withUpdateStatus(updateStatus: string): ShowRemoteMirrorResponse {
        this['update_status'] = updateStatus;
        return this;
    }
    public set updateStatus(updateStatus: string  | undefined) {
        this['update_status'] = updateStatus;
    }
    public get updateStatus(): string | undefined {
        return this['update_status'];
    }
    public withLastUpdateAt(lastUpdateAt: string): ShowRemoteMirrorResponse {
        this['last_update_at'] = lastUpdateAt;
        return this;
    }
    public set lastUpdateAt(lastUpdateAt: string  | undefined) {
        this['last_update_at'] = lastUpdateAt;
    }
    public get lastUpdateAt(): string | undefined {
        return this['last_update_at'];
    }
    public withUrl(url: string): ShowRemoteMirrorResponse {
        this['url'] = url;
        return this;
    }
    public withLastSuccessfulUpdateAt(lastSuccessfulUpdateAt: string): ShowRemoteMirrorResponse {
        this['last_successful_update_at'] = lastSuccessfulUpdateAt;
        return this;
    }
    public set lastSuccessfulUpdateAt(lastSuccessfulUpdateAt: string  | undefined) {
        this['last_successful_update_at'] = lastSuccessfulUpdateAt;
    }
    public get lastSuccessfulUpdateAt(): string | undefined {
        return this['last_successful_update_at'];
    }
    public withNumberOfFailures(numberOfFailures: number): ShowRemoteMirrorResponse {
        this['number_of_failures'] = numberOfFailures;
        return this;
    }
    public set numberOfFailures(numberOfFailures: number  | undefined) {
        this['number_of_failures'] = numberOfFailures;
    }
    public get numberOfFailures(): number | undefined {
        return this['number_of_failures'];
    }
    public withMirroringEnabled(mirroringEnabled: boolean): ShowRemoteMirrorResponse {
        this['mirroring_enabled'] = mirroringEnabled;
        return this;
    }
    public set mirroringEnabled(mirroringEnabled: boolean  | undefined) {
        this['mirroring_enabled'] = mirroringEnabled;
    }
    public get mirroringEnabled(): boolean | undefined {
        return this['mirroring_enabled'];
    }
    public withIsPrivate(isPrivate: boolean): ShowRemoteMirrorResponse {
        this['is_private'] = isPrivate;
        return this;
    }
    public set isPrivate(isPrivate: boolean  | undefined) {
        this['is_private'] = isPrivate;
    }
    public get isPrivate(): boolean | undefined {
        return this['is_private'];
    }
    public withEndpointUuid(endpointUuid: string): ShowRemoteMirrorResponse {
        this['endpoint_uuid'] = endpointUuid;
        return this;
    }
    public set endpointUuid(endpointUuid: string  | undefined) {
        this['endpoint_uuid'] = endpointUuid;
    }
    public get endpointUuid(): string | undefined {
        return this['endpoint_uuid'];
    }
    public withLastError(lastError: string): ShowRemoteMirrorResponse {
        this['last_error'] = lastError;
        return this;
    }
    public set lastError(lastError: string  | undefined) {
        this['last_error'] = lastError;
    }
    public get lastError(): string | undefined {
        return this['last_error'];
    }
}