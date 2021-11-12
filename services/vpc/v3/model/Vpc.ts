import { CloudResource } from './CloudResource';
import { Tag } from './Tag';


export class Vpc {
    public id: string;
    public name: string;
    public description: string;
    public cidr: string;
    private 'extend_cidrs': Array<string> | undefined;
    public status: string;
    private 'project_id': string | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    private 'cloud_resources': Array<CloudResource> | undefined;
    public tags: Array<Tag>;
    public constructor(id?: any, name?: any, description?: any, cidr?: any, extendCidrs?: any, status?: any, projectId?: any, enterpriseProjectId?: any, createdAt?: any, updatedAt?: any, cloudResources?: any, tags?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['cidr'] = cidr;
        this['extend_cidrs'] = extendCidrs;
        this['status'] = status;
        this['project_id'] = projectId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['cloud_resources'] = cloudResources;
        this['tags'] = tags;
    }
    public withId(id: string): Vpc {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Vpc {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Vpc {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): Vpc {
        this['cidr'] = cidr;
        return this;
    }
    public withExtendCidrs(extendCidrs: Array<string>): Vpc {
        this['extend_cidrs'] = extendCidrs;
        return this;
    }
    public set extendCidrs(extendCidrs: Array<string> | undefined) {
        this['extend_cidrs'] = extendCidrs;
    }
    public get extendCidrs() {
        return this['extend_cidrs'];
    }
    public withStatus(status: string): Vpc {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): Vpc {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Vpc {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withCreatedAt(createdAt: Date): Vpc {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Vpc {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withCloudResources(cloudResources: Array<CloudResource>): Vpc {
        this['cloud_resources'] = cloudResources;
        return this;
    }
    public set cloudResources(cloudResources: Array<CloudResource> | undefined) {
        this['cloud_resources'] = cloudResources;
    }
    public get cloudResources() {
        return this['cloud_resources'];
    }
    public withTags(tags: Array<Tag>): Vpc {
        this['tags'] = tags;
        return this;
    }
}