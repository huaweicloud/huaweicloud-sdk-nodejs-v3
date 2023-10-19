import { DomainInfo } from './DomainInfo';


export class ListDomainResponseData {
    public limit?: number;
    public offset?: number;
    private 'project_id'?: string;
    public records?: Array<DomainInfo>;
    private 'set_id'?: string;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListDomainResponseData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDomainResponseData {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): ListDomainResponseData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRecords(records: Array<DomainInfo>): ListDomainResponseData {
        this['records'] = records;
        return this;
    }
    public withSetId(setId: string): ListDomainResponseData {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withTotal(total: number): ListDomainResponseData {
        this['total'] = total;
        return this;
    }
}