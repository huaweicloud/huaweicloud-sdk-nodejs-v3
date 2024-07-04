

export class UnlockNodeReadonlyStatusRequestBody {
    private 'status_preservation_time'?: number;
    public constructor(statusPreservationTime?: number) { 
        this['status_preservation_time'] = statusPreservationTime;
    }
    public withStatusPreservationTime(statusPreservationTime: number): UnlockNodeReadonlyStatusRequestBody {
        this['status_preservation_time'] = statusPreservationTime;
        return this;
    }
    public set statusPreservationTime(statusPreservationTime: number  | undefined) {
        this['status_preservation_time'] = statusPreservationTime;
    }
    public get statusPreservationTime(): number | undefined {
        return this['status_preservation_time'];
    }
}