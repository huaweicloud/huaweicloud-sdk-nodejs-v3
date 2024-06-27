

export class CaptureTaskVO {
    private 'capture_size'?: string;
    private 'created_date'?: string;
    private 'dest_address'?: string;
    private 'dest_address_type'?: number;
    private 'dest_port'?: string;
    public duration?: number;
    private 'is_deleted'?: number;
    private 'max_packets'?: number;
    private 'modified_date'?: string;
    public name?: string;
    public protocol?: number;
    private 'remaining_days'?: number;
    private 'source_address'?: string;
    private 'source_address_type'?: number;
    private 'source_port'?: string;
    public status?: number;
    private 'task_id'?: string;
    public constructor() { 
    }
    public withCaptureSize(captureSize: string): CaptureTaskVO {
        this['capture_size'] = captureSize;
        return this;
    }
    public set captureSize(captureSize: string  | undefined) {
        this['capture_size'] = captureSize;
    }
    public get captureSize(): string | undefined {
        return this['capture_size'];
    }
    public withCreatedDate(createdDate: string): CaptureTaskVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withDestAddress(destAddress: string): CaptureTaskVO {
        this['dest_address'] = destAddress;
        return this;
    }
    public set destAddress(destAddress: string  | undefined) {
        this['dest_address'] = destAddress;
    }
    public get destAddress(): string | undefined {
        return this['dest_address'];
    }
    public withDestAddressType(destAddressType: number): CaptureTaskVO {
        this['dest_address_type'] = destAddressType;
        return this;
    }
    public set destAddressType(destAddressType: number  | undefined) {
        this['dest_address_type'] = destAddressType;
    }
    public get destAddressType(): number | undefined {
        return this['dest_address_type'];
    }
    public withDestPort(destPort: string): CaptureTaskVO {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withDuration(duration: number): CaptureTaskVO {
        this['duration'] = duration;
        return this;
    }
    public withIsDeleted(isDeleted: number): CaptureTaskVO {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: number  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): number | undefined {
        return this['is_deleted'];
    }
    public withMaxPackets(maxPackets: number): CaptureTaskVO {
        this['max_packets'] = maxPackets;
        return this;
    }
    public set maxPackets(maxPackets: number  | undefined) {
        this['max_packets'] = maxPackets;
    }
    public get maxPackets(): number | undefined {
        return this['max_packets'];
    }
    public withModifiedDate(modifiedDate: string): CaptureTaskVO {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withName(name: string): CaptureTaskVO {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: number): CaptureTaskVO {
        this['protocol'] = protocol;
        return this;
    }
    public withRemainingDays(remainingDays: number): CaptureTaskVO {
        this['remaining_days'] = remainingDays;
        return this;
    }
    public set remainingDays(remainingDays: number  | undefined) {
        this['remaining_days'] = remainingDays;
    }
    public get remainingDays(): number | undefined {
        return this['remaining_days'];
    }
    public withSourceAddress(sourceAddress: string): CaptureTaskVO {
        this['source_address'] = sourceAddress;
        return this;
    }
    public set sourceAddress(sourceAddress: string  | undefined) {
        this['source_address'] = sourceAddress;
    }
    public get sourceAddress(): string | undefined {
        return this['source_address'];
    }
    public withSourceAddressType(sourceAddressType: number): CaptureTaskVO {
        this['source_address_type'] = sourceAddressType;
        return this;
    }
    public set sourceAddressType(sourceAddressType: number  | undefined) {
        this['source_address_type'] = sourceAddressType;
    }
    public get sourceAddressType(): number | undefined {
        return this['source_address_type'];
    }
    public withSourcePort(sourcePort: string): CaptureTaskVO {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withStatus(status: number): CaptureTaskVO {
        this['status'] = status;
        return this;
    }
    public withTaskId(taskId: string): CaptureTaskVO {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}