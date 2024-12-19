import { TagKeyValue } from './TagKeyValue';


export class CreateWholeImageRequestBody {
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'image_tags'?: Array<TagKeyValue>;
    private 'instance_id'?: string;
    public name?: string;
    public tags?: Array<string>;
    private 'backup_id'?: string;
    private 'whole_image_type'?: string;
    private 'max_ram'?: number;
    private 'min_ram'?: number;
    private 'vault_id'?: string;
    public constructor(instanceId?: string, name?: string) { 
        this['instance_id'] = instanceId;
        this['name'] = name;
    }
    public withDescription(description: string): CreateWholeImageRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateWholeImageRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageTags(imageTags: Array<TagKeyValue>): CreateWholeImageRequestBody {
        this['image_tags'] = imageTags;
        return this;
    }
    public set imageTags(imageTags: Array<TagKeyValue>  | undefined) {
        this['image_tags'] = imageTags;
    }
    public get imageTags(): Array<TagKeyValue> | undefined {
        return this['image_tags'];
    }
    public withInstanceId(instanceId: string): CreateWholeImageRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): CreateWholeImageRequestBody {
        this['name'] = name;
        return this;
    }
    public withTags(tags: Array<string>): CreateWholeImageRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withBackupId(backupId: string): CreateWholeImageRequestBody {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withWholeImageType(wholeImageType: string): CreateWholeImageRequestBody {
        this['whole_image_type'] = wholeImageType;
        return this;
    }
    public set wholeImageType(wholeImageType: string  | undefined) {
        this['whole_image_type'] = wholeImageType;
    }
    public get wholeImageType(): string | undefined {
        return this['whole_image_type'];
    }
    public withMaxRam(maxRam: number): CreateWholeImageRequestBody {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: number  | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam(): number | undefined {
        return this['max_ram'];
    }
    public withMinRam(minRam: number): CreateWholeImageRequestBody {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): number | undefined {
        return this['min_ram'];
    }
    public withVaultId(vaultId: string): CreateWholeImageRequestBody {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}