import { NoSqlEpsQuotaRequestInfo } from './NoSqlEpsQuotaRequestInfo';


export class NoSqlRequestEpsQuota {
    private 'enterprise_project_id'?: string;
    public quota?: NoSqlEpsQuotaRequestInfo;
    public constructor(enterpriseProjectId?: string, quota?: NoSqlEpsQuotaRequestInfo) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['quota'] = quota;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): NoSqlRequestEpsQuota {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withQuota(quota: NoSqlEpsQuotaRequestInfo): NoSqlRequestEpsQuota {
        this['quota'] = quota;
        return this;
    }
}