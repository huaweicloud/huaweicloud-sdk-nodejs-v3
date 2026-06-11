

export class CreateDrsTaskReq {
    private 'target_instance_id'?: string;
    private 'target_user_name'?: string;
    private 'target_user_password'?: string;
    private 'source_user_name'?: string;
    private 'source_user_password'?: string;
    private 'enterprise_project_id'?: string;
    private 'drs_node_type'?: string;
    private 'database_list'?: Array<string>;
    public constructor(targetInstanceId?: string, targetUserName?: string, targetUserPassword?: string, sourceUserName?: string, sourceUserPassword?: string, drsNodeType?: string, databaseList?: Array<string>) { 
        this['target_instance_id'] = targetInstanceId;
        this['target_user_name'] = targetUserName;
        this['target_user_password'] = targetUserPassword;
        this['source_user_name'] = sourceUserName;
        this['source_user_password'] = sourceUserPassword;
        this['drs_node_type'] = drsNodeType;
        this['database_list'] = databaseList;
    }
    public withTargetInstanceId(targetInstanceId: string): CreateDrsTaskReq {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withTargetUserName(targetUserName: string): CreateDrsTaskReq {
        this['target_user_name'] = targetUserName;
        return this;
    }
    public set targetUserName(targetUserName: string  | undefined) {
        this['target_user_name'] = targetUserName;
    }
    public get targetUserName(): string | undefined {
        return this['target_user_name'];
    }
    public withTargetUserPassword(targetUserPassword: string): CreateDrsTaskReq {
        this['target_user_password'] = targetUserPassword;
        return this;
    }
    public set targetUserPassword(targetUserPassword: string  | undefined) {
        this['target_user_password'] = targetUserPassword;
    }
    public get targetUserPassword(): string | undefined {
        return this['target_user_password'];
    }
    public withSourceUserName(sourceUserName: string): CreateDrsTaskReq {
        this['source_user_name'] = sourceUserName;
        return this;
    }
    public set sourceUserName(sourceUserName: string  | undefined) {
        this['source_user_name'] = sourceUserName;
    }
    public get sourceUserName(): string | undefined {
        return this['source_user_name'];
    }
    public withSourceUserPassword(sourceUserPassword: string): CreateDrsTaskReq {
        this['source_user_password'] = sourceUserPassword;
        return this;
    }
    public set sourceUserPassword(sourceUserPassword: string  | undefined) {
        this['source_user_password'] = sourceUserPassword;
    }
    public get sourceUserPassword(): string | undefined {
        return this['source_user_password'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDrsTaskReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDrsNodeType(drsNodeType: string): CreateDrsTaskReq {
        this['drs_node_type'] = drsNodeType;
        return this;
    }
    public set drsNodeType(drsNodeType: string  | undefined) {
        this['drs_node_type'] = drsNodeType;
    }
    public get drsNodeType(): string | undefined {
        return this['drs_node_type'];
    }
    public withDatabaseList(databaseList: Array<string>): CreateDrsTaskReq {
        this['database_list'] = databaseList;
        return this;
    }
    public set databaseList(databaseList: Array<string>  | undefined) {
        this['database_list'] = databaseList;
    }
    public get databaseList(): Array<string> | undefined {
        return this['database_list'];
    }
}