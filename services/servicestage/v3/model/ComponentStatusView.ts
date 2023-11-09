import { ComponentArtifact } from './ComponentArtifact';
import { ComponentFailDetail } from './ComponentFailDetail';
import { ComponentStatusType } from './ComponentStatusType';


export class ComponentStatusView {
    private 'component_status'?: ComponentStatusType;
    private 'available_replica'?: number;
    public replica?: number;
    private 'fail_detail'?: ComponentFailDetail;
    private 'last_job_id'?: string;
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public artifact?: ComponentArtifact;
    public constructor() { 
    }
    public withComponentStatus(componentStatus: ComponentStatusType): ComponentStatusView {
        this['component_status'] = componentStatus;
        return this;
    }
    public set componentStatus(componentStatus: ComponentStatusType  | undefined) {
        this['component_status'] = componentStatus;
    }
    public get componentStatus(): ComponentStatusType | undefined {
        return this['component_status'];
    }
    public withAvailableReplica(availableReplica: number): ComponentStatusView {
        this['available_replica'] = availableReplica;
        return this;
    }
    public set availableReplica(availableReplica: number  | undefined) {
        this['available_replica'] = availableReplica;
    }
    public get availableReplica(): number | undefined {
        return this['available_replica'];
    }
    public withReplica(replica: number): ComponentStatusView {
        this['replica'] = replica;
        return this;
    }
    public withFailDetail(failDetail: ComponentFailDetail): ComponentStatusView {
        this['fail_detail'] = failDetail;
        return this;
    }
    public set failDetail(failDetail: ComponentFailDetail  | undefined) {
        this['fail_detail'] = failDetail;
    }
    public get failDetail(): ComponentFailDetail | undefined {
        return this['fail_detail'];
    }
    public withLastJobId(lastJobId: string): ComponentStatusView {
        this['last_job_id'] = lastJobId;
        return this;
    }
    public set lastJobId(lastJobId: string  | undefined) {
        this['last_job_id'] = lastJobId;
    }
    public get lastJobId(): string | undefined {
        return this['last_job_id'];
    }
    public withCreator(creator: string): ComponentStatusView {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): ComponentStatusView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ComponentStatusView {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withArtifact(artifact: ComponentArtifact): ComponentStatusView {
        this['artifact'] = artifact;
        return this;
    }
}