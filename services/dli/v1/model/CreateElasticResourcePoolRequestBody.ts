import { Tag } from './Tag';


export class CreateElasticResourcePoolRequestBody {
    private 'elastic_resource_pool_name'?: string;
    public description?: string;
    private 'cidr_in_vpc'?: string;
    private 'max_cu'?: number;
    private 'charging_mode'?: number;
    private 'min_cu'?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public label?: { [key: string]: string; };
    public constructor(elasticResourcePoolName?: string, maxCu?: number, minCu?: number) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        this['max_cu'] = maxCu;
        this['min_cu'] = minCu;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): CreateElasticResourcePoolRequestBody {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withDescription(description: string): CreateElasticResourcePoolRequestBody {
        this['description'] = description;
        return this;
    }
    public withCidrInVpc(cidrInVpc: string): CreateElasticResourcePoolRequestBody {
        this['cidr_in_vpc'] = cidrInVpc;
        return this;
    }
    public set cidrInVpc(cidrInVpc: string  | undefined) {
        this['cidr_in_vpc'] = cidrInVpc;
    }
    public get cidrInVpc(): string | undefined {
        return this['cidr_in_vpc'];
    }
    public withMaxCu(maxCu: number): CreateElasticResourcePoolRequestBody {
        this['max_cu'] = maxCu;
        return this;
    }
    public set maxCu(maxCu: number  | undefined) {
        this['max_cu'] = maxCu;
    }
    public get maxCu(): number | undefined {
        return this['max_cu'];
    }
    public withChargingMode(chargingMode: number): CreateElasticResourcePoolRequestBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withMinCu(minCu: number): CreateElasticResourcePoolRequestBody {
        this['min_cu'] = minCu;
        return this;
    }
    public set minCu(minCu: number  | undefined) {
        this['min_cu'] = minCu;
    }
    public get minCu(): number | undefined {
        return this['min_cu'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateElasticResourcePoolRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateElasticResourcePoolRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withLabel(label: { [key: string]: string; }): CreateElasticResourcePoolRequestBody {
        this['label'] = label;
        return this;
    }
}