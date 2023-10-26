

export class UpdateHpcShareRequestBody {
    public action?: string;
    private 'gc_time'?: number;
    public constructor(action?: string, gcTime?: number) { 
        this['action'] = action;
        this['gc_time'] = gcTime;
    }
    public withAction(action: string): UpdateHpcShareRequestBody {
        this['action'] = action;
        return this;
    }
    public withGcTime(gcTime: number): UpdateHpcShareRequestBody {
        this['gc_time'] = gcTime;
        return this;
    }
    public set gcTime(gcTime: number  | undefined) {
        this['gc_time'] = gcTime;
    }
    public get gcTime(): number | undefined {
        return this['gc_time'];
    }
}