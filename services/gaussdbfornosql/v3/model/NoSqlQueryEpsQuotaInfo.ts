import { NoSqlEpsQuotaTotal } from './NoSqlEpsQuotaTotal';
import { NoSqlEpsQuotaUsed } from './NoSqlEpsQuotaUsed';


export class NoSqlQueryEpsQuotaInfo {
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    public quota?: NoSqlEpsQuotaTotal;
    public used?: NoSqlEpsQuotaUsed;
    public constructor(enterpriseProjectId?: string, enterpriseProjectName?: string, quota?: NoSqlEpsQuotaTotal, used?: NoSqlEpsQuotaUsed) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['enterprise_project_name'] = enterpriseProjectName;
        this['quota'] = quota;
        this['used'] = used;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): NoSqlQueryEpsQuotaInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): NoSqlQueryEpsQuotaInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withQuota(quota: NoSqlEpsQuotaTotal): NoSqlQueryEpsQuotaInfo {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: NoSqlEpsQuotaUsed): NoSqlQueryEpsQuotaInfo {
        this['used'] = used;
        return this;
    }
}