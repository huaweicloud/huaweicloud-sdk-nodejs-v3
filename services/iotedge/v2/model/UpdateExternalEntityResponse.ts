
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateExternalEntityResponse extends SdkResponse {
    private 'node_id'?: string;
    private 'space_id'?: string;
    private 'external_id'?: string;
    public protocol?: string;
    private 'connection_type'?: string;
    private 'create_time'?: string;
    private 'last_modify_time'?: string;
    public constructor() { 
        super();
    }
    public withNodeId(nodeId: string): UpdateExternalEntityResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSpaceId(spaceId: string): UpdateExternalEntityResponse {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withExternalId(externalId: string): UpdateExternalEntityResponse {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
    public withProtocol(protocol: string): UpdateExternalEntityResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withConnectionType(connectionType: string): UpdateExternalEntityResponse {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): string | undefined {
        return this['connection_type'];
    }
    public withCreateTime(createTime: string): UpdateExternalEntityResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastModifyTime(lastModifyTime: string): UpdateExternalEntityResponse {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: string  | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime(): string | undefined {
        return this['last_modify_time'];
    }
}