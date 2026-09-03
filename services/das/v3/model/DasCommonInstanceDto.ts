import { DasCommonInstanceNodeDto } from './DasCommonInstanceNodeDto';
import { RelatedInstance } from './RelatedInstance';


export class DasCommonInstanceDto {
    public id?: string;
    public name?: string;
    public status?: string;
    public type?: string;
    private 'enterprise_project_id'?: string;
    private 'engine_type'?: string;
    private 'engine_version'?: string;
    public port?: string;
    public region?: string;
    public nodes?: Array<DasCommonInstanceNodeDto>;
    private 'network_type'?: string;
    private 'related_instance'?: Array<RelatedInstance>;
    public constructor() { 
    }
    public withId(id: string): DasCommonInstanceDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DasCommonInstanceDto {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): DasCommonInstanceDto {
        this['status'] = status;
        return this;
    }
    public withType(type: string): DasCommonInstanceDto {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DasCommonInstanceDto {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEngineType(engineType: string): DasCommonInstanceDto {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withEngineVersion(engineVersion: string): DasCommonInstanceDto {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withPort(port: string): DasCommonInstanceDto {
        this['port'] = port;
        return this;
    }
    public withRegion(region: string): DasCommonInstanceDto {
        this['region'] = region;
        return this;
    }
    public withNodes(nodes: Array<DasCommonInstanceNodeDto>): DasCommonInstanceDto {
        this['nodes'] = nodes;
        return this;
    }
    public withNetworkType(networkType: string): DasCommonInstanceDto {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withRelatedInstance(relatedInstance: Array<RelatedInstance>): DasCommonInstanceDto {
        this['related_instance'] = relatedInstance;
        return this;
    }
    public set relatedInstance(relatedInstance: Array<RelatedInstance>  | undefined) {
        this['related_instance'] = relatedInstance;
    }
    public get relatedInstance(): Array<RelatedInstance> | undefined {
        return this['related_instance'];
    }
}