

export class VifPeerDetection {
    public id?: string;
    private 'vif_peer_id'?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: VifPeerDetectionStatusEnum | string;
    private 'loss_ratio'?: number;
    public constructor() { 
    }
    public withId(id: string): VifPeerDetection {
        this['id'] = id;
        return this;
    }
    public withVifPeerId(vifPeerId: string): VifPeerDetection {
        this['vif_peer_id'] = vifPeerId;
        return this;
    }
    public set vifPeerId(vifPeerId: string  | undefined) {
        this['vif_peer_id'] = vifPeerId;
    }
    public get vifPeerId(): string | undefined {
        return this['vif_peer_id'];
    }
    public withProjectId(projectId: string): VifPeerDetection {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): VifPeerDetection {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStartTime(startTime: string): VifPeerDetection {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): VifPeerDetection {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: VifPeerDetectionStatusEnum | string): VifPeerDetection {
        this['status'] = status;
        return this;
    }
    public withLossRatio(lossRatio: number): VifPeerDetection {
        this['loss_ratio'] = lossRatio;
        return this;
    }
    public set lossRatio(lossRatio: number  | undefined) {
        this['loss_ratio'] = lossRatio;
    }
    public get lossRatio(): number | undefined {
        return this['loss_ratio'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VifPeerDetectionStatusEnum {
    PROCESSING = 'processing',
    COMPLETE = 'complete',
    ERROR = 'error'
}
