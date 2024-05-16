

export class QueueSrcAssignUpdateDTO {
    private 'queue_attr'?: number;
    public description?: string;
    public constructor() { 
    }
    public withQueueAttr(queueAttr: number): QueueSrcAssignUpdateDTO {
        this['queue_attr'] = queueAttr;
        return this;
    }
    public set queueAttr(queueAttr: number  | undefined) {
        this['queue_attr'] = queueAttr;
    }
    public get queueAttr(): number | undefined {
        return this['queue_attr'];
    }
    public withDescription(description: string): QueueSrcAssignUpdateDTO {
        this['description'] = description;
        return this;
    }
}