

export class InstanceStatusStatistics {
    private 'static_name'?: string;
    private 'running_num'?: number;
    private 'stop_num'?: number;
    private 'hibernate_num'?: number;
    private 'other_num'?: number;
    private 'attached_num'?: number;
    private 'unattached_num'?: number;
    private 'cannot_attach_num'?: number;
    private 'in_process_num'?: number;
    private 'in_use_num'?: number;
    private 'unregistered_num'?: number;
    private 'ready_num'?: number;
    private 'disconnected_num'?: number;
    private 'unknown_num'?: number;
    public constructor() { 
    }
    public withStaticName(staticName: string): InstanceStatusStatistics {
        this['static_name'] = staticName;
        return this;
    }
    public set staticName(staticName: string  | undefined) {
        this['static_name'] = staticName;
    }
    public get staticName(): string | undefined {
        return this['static_name'];
    }
    public withRunningNum(runningNum: number): InstanceStatusStatistics {
        this['running_num'] = runningNum;
        return this;
    }
    public set runningNum(runningNum: number  | undefined) {
        this['running_num'] = runningNum;
    }
    public get runningNum(): number | undefined {
        return this['running_num'];
    }
    public withStopNum(stopNum: number): InstanceStatusStatistics {
        this['stop_num'] = stopNum;
        return this;
    }
    public set stopNum(stopNum: number  | undefined) {
        this['stop_num'] = stopNum;
    }
    public get stopNum(): number | undefined {
        return this['stop_num'];
    }
    public withHibernateNum(hibernateNum: number): InstanceStatusStatistics {
        this['hibernate_num'] = hibernateNum;
        return this;
    }
    public set hibernateNum(hibernateNum: number  | undefined) {
        this['hibernate_num'] = hibernateNum;
    }
    public get hibernateNum(): number | undefined {
        return this['hibernate_num'];
    }
    public withOtherNum(otherNum: number): InstanceStatusStatistics {
        this['other_num'] = otherNum;
        return this;
    }
    public set otherNum(otherNum: number  | undefined) {
        this['other_num'] = otherNum;
    }
    public get otherNum(): number | undefined {
        return this['other_num'];
    }
    public withAttachedNum(attachedNum: number): InstanceStatusStatistics {
        this['attached_num'] = attachedNum;
        return this;
    }
    public set attachedNum(attachedNum: number  | undefined) {
        this['attached_num'] = attachedNum;
    }
    public get attachedNum(): number | undefined {
        return this['attached_num'];
    }
    public withUnattachedNum(unattachedNum: number): InstanceStatusStatistics {
        this['unattached_num'] = unattachedNum;
        return this;
    }
    public set unattachedNum(unattachedNum: number  | undefined) {
        this['unattached_num'] = unattachedNum;
    }
    public get unattachedNum(): number | undefined {
        return this['unattached_num'];
    }
    public withCannotAttachNum(cannotAttachNum: number): InstanceStatusStatistics {
        this['cannot_attach_num'] = cannotAttachNum;
        return this;
    }
    public set cannotAttachNum(cannotAttachNum: number  | undefined) {
        this['cannot_attach_num'] = cannotAttachNum;
    }
    public get cannotAttachNum(): number | undefined {
        return this['cannot_attach_num'];
    }
    public withInProcessNum(inProcessNum: number): InstanceStatusStatistics {
        this['in_process_num'] = inProcessNum;
        return this;
    }
    public set inProcessNum(inProcessNum: number  | undefined) {
        this['in_process_num'] = inProcessNum;
    }
    public get inProcessNum(): number | undefined {
        return this['in_process_num'];
    }
    public withInUseNum(inUseNum: number): InstanceStatusStatistics {
        this['in_use_num'] = inUseNum;
        return this;
    }
    public set inUseNum(inUseNum: number  | undefined) {
        this['in_use_num'] = inUseNum;
    }
    public get inUseNum(): number | undefined {
        return this['in_use_num'];
    }
    public withUnregisteredNum(unregisteredNum: number): InstanceStatusStatistics {
        this['unregistered_num'] = unregisteredNum;
        return this;
    }
    public set unregisteredNum(unregisteredNum: number  | undefined) {
        this['unregistered_num'] = unregisteredNum;
    }
    public get unregisteredNum(): number | undefined {
        return this['unregistered_num'];
    }
    public withReadyNum(readyNum: number): InstanceStatusStatistics {
        this['ready_num'] = readyNum;
        return this;
    }
    public set readyNum(readyNum: number  | undefined) {
        this['ready_num'] = readyNum;
    }
    public get readyNum(): number | undefined {
        return this['ready_num'];
    }
    public withDisconnectedNum(disconnectedNum: number): InstanceStatusStatistics {
        this['disconnected_num'] = disconnectedNum;
        return this;
    }
    public set disconnectedNum(disconnectedNum: number  | undefined) {
        this['disconnected_num'] = disconnectedNum;
    }
    public get disconnectedNum(): number | undefined {
        return this['disconnected_num'];
    }
    public withUnknownNum(unknownNum: number): InstanceStatusStatistics {
        this['unknown_num'] = unknownNum;
        return this;
    }
    public set unknownNum(unknownNum: number  | undefined) {
        this['unknown_num'] = unknownNum;
    }
    public get unknownNum(): number | undefined {
        return this['unknown_num'];
    }
}