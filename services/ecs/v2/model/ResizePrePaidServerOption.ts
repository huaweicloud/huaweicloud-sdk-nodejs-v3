import { ResizeServerExtendParam } from './ResizeServerExtendParam';


export class ResizePrePaidServerOption {
    public flavorRef: string;
    private 'dedicated_host_id'?: string | undefined;
    public extendparam?: ResizeServerExtendParam;
    public mode?: string;
    public constructor(flavorRef?: any) { 
        this['flavorRef'] = flavorRef;
    }
    public withFlavorRef(flavorRef: string): ResizePrePaidServerOption {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): ResizePrePaidServerOption {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId() {
        return this['dedicated_host_id'];
    }
    public withExtendparam(extendparam: ResizeServerExtendParam): ResizePrePaidServerOption {
        this['extendparam'] = extendparam;
        return this;
    }
    public withMode(mode: string): ResizePrePaidServerOption {
        this['mode'] = mode;
        return this;
    }
}