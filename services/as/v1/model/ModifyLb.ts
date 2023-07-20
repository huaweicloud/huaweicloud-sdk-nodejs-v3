import { LbaasListener } from './LbaasListener';


export class ModifyLb {
    private 'lbaas_listener'?: LbaasListener;
    public listener?: string;
    private 'failed_reason'?: string;
    private 'failed_details'?: string;
    public constructor() { 
    }
    public withLbaasListener(lbaasListener: LbaasListener): ModifyLb {
        this['lbaas_listener'] = lbaasListener;
        return this;
    }
    public set lbaasListener(lbaasListener: LbaasListener  | undefined) {
        this['lbaas_listener'] = lbaasListener;
    }
    public get lbaasListener(): LbaasListener | undefined {
        return this['lbaas_listener'];
    }
    public withListener(listener: string): ModifyLb {
        this['listener'] = listener;
        return this;
    }
    public withFailedReason(failedReason: string): ModifyLb {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedDetails(failedDetails: string): ModifyLb {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: string  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): string | undefined {
        return this['failed_details'];
    }
}