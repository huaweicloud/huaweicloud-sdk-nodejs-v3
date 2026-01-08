import { Metric } from './Metric';


export class UserMetric {
    public username?: string;
    private 'enterprise_project_id'?: string;
    public metric?: Array<Metric>;
    public constructor() { 
    }
    public withUsername(username: string): UserMetric {
        this['username'] = username;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UserMetric {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMetric(metric: Array<Metric>): UserMetric {
        this['metric'] = metric;
        return this;
    }
}