import { FirewallInstanceVO } from './FirewallInstanceVO';


export class HttpFirewallInstanceListResponseData {
    public limit?: number;
    public offset?: number;
    private 'project_id'?: string;
    public total?: number;
    public records?: Array<FirewallInstanceVO>;
    public constructor() { 
    }
    public withLimit(limit: number): HttpFirewallInstanceListResponseData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): HttpFirewallInstanceListResponseData {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): HttpFirewallInstanceListResponseData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTotal(total: number): HttpFirewallInstanceListResponseData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<FirewallInstanceVO>): HttpFirewallInstanceListResponseData {
        this['records'] = records;
        return this;
    }
}