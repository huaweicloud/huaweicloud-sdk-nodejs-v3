import { DNInstance } from './DNInstance';
import { IamAccount } from './IamAccount';


export class LoadSchemaMetadataReq {
    private 'compressed_databases_info'?: string;
    private 'dn_instance'?: Array<DNInstance>;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'iam_account'?: IamAccount;
    public constructor() { 
    }
    public withCompressedDatabasesInfo(compressedDatabasesInfo: string): LoadSchemaMetadataReq {
        this['compressed_databases_info'] = compressedDatabasesInfo;
        return this;
    }
    public set compressedDatabasesInfo(compressedDatabasesInfo: string  | undefined) {
        this['compressed_databases_info'] = compressedDatabasesInfo;
    }
    public get compressedDatabasesInfo(): string | undefined {
        return this['compressed_databases_info'];
    }
    public withDnInstance(dnInstance: Array<DNInstance>): LoadSchemaMetadataReq {
        this['dn_instance'] = dnInstance;
        return this;
    }
    public set dnInstance(dnInstance: Array<DNInstance>  | undefined) {
        this['dn_instance'] = dnInstance;
    }
    public get dnInstance(): Array<DNInstance> | undefined {
        return this['dn_instance'];
    }
    public withInstanceId(instanceId: string): LoadSchemaMetadataReq {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): LoadSchemaMetadataReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIamAccount(iamAccount: IamAccount): LoadSchemaMetadataReq {
        this['iam_account'] = iamAccount;
        return this;
    }
    public set iamAccount(iamAccount: IamAccount  | undefined) {
        this['iam_account'] = iamAccount;
    }
    public get iamAccount(): IamAccount | undefined {
        return this['iam_account'];
    }
}