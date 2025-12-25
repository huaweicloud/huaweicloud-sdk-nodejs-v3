import { ConfigInfo } from './ConfigInfo';
import { LtsRquestVo } from './LtsRquestVo';


export class CreateCollectConfigV2RequestBody {
    public config?: Array<ConfigInfo>;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'domain_id'?: string;
    private 'lts_config'?: Array<LtsRquestVo>;
    private 'workspace_id'?: string;
    public constructor(config?: Array<ConfigInfo>, dataspaceId?: string, dataspaceName?: string, workspaceId?: string) { 
        this['config'] = config;
        this['dataspace_id'] = dataspaceId;
        this['dataspace_name'] = dataspaceName;
        this['workspace_id'] = workspaceId;
    }
    public withConfig(config: Array<ConfigInfo>): CreateCollectConfigV2RequestBody {
        this['config'] = config;
        return this;
    }
    public withDataspaceId(dataspaceId: string): CreateCollectConfigV2RequestBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): CreateCollectConfigV2RequestBody {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDomainId(domainId: string): CreateCollectConfigV2RequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withLtsConfig(ltsConfig: Array<LtsRquestVo>): CreateCollectConfigV2RequestBody {
        this['lts_config'] = ltsConfig;
        return this;
    }
    public set ltsConfig(ltsConfig: Array<LtsRquestVo>  | undefined) {
        this['lts_config'] = ltsConfig;
    }
    public get ltsConfig(): Array<LtsRquestVo> | undefined {
        return this['lts_config'];
    }
    public withWorkspaceId(workspaceId: string): CreateCollectConfigV2RequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}