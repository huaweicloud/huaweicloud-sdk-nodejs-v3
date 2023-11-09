import { InstanceFailDetail } from './InstanceFailDetail';
import { InstanceStatusType } from './InstanceStatusType';


export class InstanceStatusView {
    public status?: InstanceStatusType;
    private 'available_replica'?: number;
    public replica?: number;
    private 'fail_detail'?: InstanceFailDetail;
    private 'last_job_id'?: string;
    private 'last_job_status'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withStatus(status: InstanceStatusType): InstanceStatusView {
        this['status'] = status;
        return this;
    }
    public withAvailableReplica(availableReplica: number): InstanceStatusView {
        this['available_replica'] = availableReplica;
        return this;
    }
    public set availableReplica(availableReplica: number  | undefined) {
        this['available_replica'] = availableReplica;
    }
    public get availableReplica(): number | undefined {
        return this['available_replica'];
    }
    public withReplica(replica: number): InstanceStatusView {
        this['replica'] = replica;
        return this;
    }
    public withFailDetail(failDetail: InstanceFailDetail): InstanceStatusView {
        this['fail_detail'] = failDetail;
        return this;
    }
    public set failDetail(failDetail: InstanceFailDetail  | undefined) {
        this['fail_detail'] = failDetail;
    }
    public get failDetail(): InstanceFailDetail | undefined {
        return this['fail_detail'];
    }
    public withLastJobId(lastJobId: string): InstanceStatusView {
        this['last_job_id'] = lastJobId;
        return this;
    }
    public set lastJobId(lastJobId: string  | undefined) {
        this['last_job_id'] = lastJobId;
    }
    public get lastJobId(): string | undefined {
        return this['last_job_id'];
    }
    public withLastJobStatus(lastJobStatus: string): InstanceStatusView {
        this['last_job_status'] = lastJobStatus;
        return this;
    }
    public set lastJobStatus(lastJobStatus: string  | undefined) {
        this['last_job_status'] = lastJobStatus;
    }
    public get lastJobStatus(): string | undefined {
        return this['last_job_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceStatusView {
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