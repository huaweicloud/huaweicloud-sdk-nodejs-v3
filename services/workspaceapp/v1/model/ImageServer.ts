import { ImageAccountInfo } from './ImageAccountInfo';
import { ImageRef } from './ImageRef';
import { ImageServerStatus } from './ImageServerStatus';


export class ImageServer {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'image_ref'?: ImageRef;
    private 'server_group_id'?: string;
    private 'app_group_id'?: string;
    private 'server_id'?: string;
    private 'instance_id'?: string;
    private 'image_id'?: string;
    public status?: ImageServerStatus;
    private 'authorize_accounts'?: Array<ImageAccountInfo>;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ImageServer {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ImageServer {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ImageServer {
        this['description'] = description;
        return this;
    }
    public withImageRef(imageRef: ImageRef): ImageServer {
        this['image_ref'] = imageRef;
        return this;
    }
    public set imageRef(imageRef: ImageRef  | undefined) {
        this['image_ref'] = imageRef;
    }
    public get imageRef(): ImageRef | undefined {
        return this['image_ref'];
    }
    public withServerGroupId(serverGroupId: string): ImageServer {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withAppGroupId(appGroupId: string): ImageServer {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withServerId(serverId: string): ImageServer {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withInstanceId(instanceId: string): ImageServer {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withImageId(imageId: string): ImageServer {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withStatus(status: ImageServerStatus): ImageServer {
        this['status'] = status;
        return this;
    }
    public withAuthorizeAccounts(authorizeAccounts: Array<ImageAccountInfo>): ImageServer {
        this['authorize_accounts'] = authorizeAccounts;
        return this;
    }
    public set authorizeAccounts(authorizeAccounts: Array<ImageAccountInfo>  | undefined) {
        this['authorize_accounts'] = authorizeAccounts;
    }
    public get authorizeAccounts(): Array<ImageAccountInfo> | undefined {
        return this['authorize_accounts'];
    }
    public withCreateTime(createTime: Date): ImageServer {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ImageServer {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ImageServer {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}