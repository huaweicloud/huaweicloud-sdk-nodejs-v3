import { RdsNoAgentDbRequestDatabases } from './RdsNoAgentDbRequestDatabases';


export class RdsNoAgentDbRequest {
    public databases?: Array<RdsNoAgentDbRequestDatabases>;
    private 'total_count'?: number;
    public constructor(databases?: Array<RdsNoAgentDbRequestDatabases>) { 
        this['databases'] = databases;
    }
    public withDatabases(databases: Array<RdsNoAgentDbRequestDatabases>): RdsNoAgentDbRequest {
        this['databases'] = databases;
        return this;
    }
    public withTotalCount(totalCount: number): RdsNoAgentDbRequest {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}