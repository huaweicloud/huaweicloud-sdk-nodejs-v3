import { FlavorLists } from './FlavorLists';
import { RoleDeployMeta } from './RoleDeployMeta';
import { VersionComponent } from './VersionComponent';
import { VersionConstraint } from './VersionConstraint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMrsVersionMetadataResponse extends SdkResponse {
    public other?: { [key: string]: object; };
    public name?: string;
    private 'template_type'?: string;
    private 'image_id'?: string;
    public status?: string;
    public features?: Array<string>;
    private 'cluster_types'?: Array<string>;
    private 'version_type'?: string;
    public components?: Array<VersionComponent>;
    private 'resource_requirement'?: Array<string>;
    public constraints?: VersionConstraint;
    public flavors?: FlavorLists;
    private 'role_deploy_meta'?: Array<RoleDeployMeta>;
    public constructor() { 
        super();
    }
    public withOther(other: { [key: string]: object; }): ShowMrsVersionMetadataResponse {
        this['other'] = other;
        return this;
    }
    public withName(name: string): ShowMrsVersionMetadataResponse {
        this['name'] = name;
        return this;
    }
    public withTemplateType(templateType: string): ShowMrsVersionMetadataResponse {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withImageId(imageId: string): ShowMrsVersionMetadataResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withStatus(status: string): ShowMrsVersionMetadataResponse {
        this['status'] = status;
        return this;
    }
    public withFeatures(features: Array<string>): ShowMrsVersionMetadataResponse {
        this['features'] = features;
        return this;
    }
    public withClusterTypes(clusterTypes: Array<string>): ShowMrsVersionMetadataResponse {
        this['cluster_types'] = clusterTypes;
        return this;
    }
    public set clusterTypes(clusterTypes: Array<string>  | undefined) {
        this['cluster_types'] = clusterTypes;
    }
    public get clusterTypes(): Array<string> | undefined {
        return this['cluster_types'];
    }
    public withVersionType(versionType: string): ShowMrsVersionMetadataResponse {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: string  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): string | undefined {
        return this['version_type'];
    }
    public withComponents(components: Array<VersionComponent>): ShowMrsVersionMetadataResponse {
        this['components'] = components;
        return this;
    }
    public withResourceRequirement(resourceRequirement: Array<string>): ShowMrsVersionMetadataResponse {
        this['resource_requirement'] = resourceRequirement;
        return this;
    }
    public set resourceRequirement(resourceRequirement: Array<string>  | undefined) {
        this['resource_requirement'] = resourceRequirement;
    }
    public get resourceRequirement(): Array<string> | undefined {
        return this['resource_requirement'];
    }
    public withConstraints(constraints: VersionConstraint): ShowMrsVersionMetadataResponse {
        this['constraints'] = constraints;
        return this;
    }
    public withFlavors(flavors: FlavorLists): ShowMrsVersionMetadataResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withRoleDeployMeta(roleDeployMeta: Array<RoleDeployMeta>): ShowMrsVersionMetadataResponse {
        this['role_deploy_meta'] = roleDeployMeta;
        return this;
    }
    public set roleDeployMeta(roleDeployMeta: Array<RoleDeployMeta>  | undefined) {
        this['role_deploy_meta'] = roleDeployMeta;
    }
    public get roleDeployMeta(): Array<RoleDeployMeta> | undefined {
        return this['role_deploy_meta'];
    }
}